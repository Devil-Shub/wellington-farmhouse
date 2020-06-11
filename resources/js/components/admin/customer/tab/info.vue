<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12" md="12">
               <v-row>
                <v-col cols="12" md="12">
               <div
                class="v-avatar v-list-item__avatar"
                style="height: 40px; min-width: 40px; width: 40px;"
              >
                <img :src="avatar" />
              </div>
                  <file-pond
                    name="uploadImage"
                    ref="pond"
                    label-idle="Add Profile pic..."
                    allow-multiple="false"
                    v-bind:server="serverOptions"
                    v-bind:files="myFiles"
                    allow-file-type-validation="true"
                    accepted-file-types="image/jpeg, image/png"
                    v-on:processfile="handleProcessFile"
                  />
                </v-col>
		<v-col cols="3" md="3">
		 <v-select 
		  v-model="addForm.prefix"
		  :items="prefixs"
		  label="Prefix"
	          :rules="[v => !!v || 'Prefix is required']"
		  dense
		></v-select>
		</v-col>
                <v-col cols="3" md="3">
                  <v-text-field
                    v-model="addForm.customer_name"
                    label="Name"
                    required
                    :rules="[v => !!v || 'Customer name is required']"
                  ></v-text-field>
                </v-col>
                <v-col cols="3" md="3">
                  <v-text-field
                    v-model="addForm.email"
                    :rules="emailRules"
                    name="email"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>
                 <v-col cols="3" md="3">
                  <v-text-field
                    v-model="addForm.phone"
                    :rules="phoneRules"
                    label="Phone"
                    required
                    maxlength="10"
                  ></v-text-field>
                </v-col>
                <v-col cols="3" md="3">
                  <v-text-field
                    v-model="addForm.address"
                    label="Address"
                    required
                    :rules="[v => !!v || 'address is required']"
                  ></v-text-field>
                </v-col>
                <v-col cols="3" md="3">
                  <v-text-field
                    v-model="addForm.city"
                    label="City"
                    required
                    :rules="[v => !!v || 'City is required']"
                  ></v-text-field>
                </v-col>
                <v-col cols="3" md="3">
                  <v-text-field
                    v-model="addForm.province"
                    label="Province"
                    required
                    :rules="[v => !!v || 'Province is required']"
                  ></v-text-field>
                </v-col>
                <v-col cols="3" md="3">
                  <v-text-field
                    v-model="addForm.zipcode"
                    :rules="[v => !!v || 'Zip code is required']"
                    label="zipcode"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="3" md="3">
               <v-switch v-model="addForm.is_active" class="mx-2" label="Is Active" ></v-switch>
                </v-col>
               </v-row>
              </v-col>
              <v-btn color="success" class="mr-4" @click="update">Submit</v-btn>
              <v-btn color="success" class="mr-4" @click="Delete">Delete</v-btn>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { customerService } from "../../../../_services/customer.service";
import { router } from "../../../../_helpers/router";
import { environment } from "../../../../config/test.env";

export default {

  data() {
    return {
    prefixs: ['Ms.', 'Mr.', 'Mrs.'],
    isLoading: false,
    items: [],
    model: null,
      valid: true,
      avatar: null,
      apiUrl: environment.apiUrl,
      imgUrl: environment.imgUrl,
      addForm: {
        id: "",
        prefix: "",
        customer_name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        province: "",
        user_image: null,
        zipcode: '',
        is_active: '',
      },
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      phoneRules: [
        v => !!v || "Phone number is required",
        v => /^\d*$/.test(v) || "Enter valid number",
        v => v.length >= 10 || "Enter valid number length"
      ],
      rules: [
        value =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!"
      ],
      myFiles: []
    };
  },
  mounted: function() {
    customerService.getCustomer(this.$route.params.id).then(response => {
      //handle response
      if (response.status) {
        this.addForm = {
            id: response.data.id,
            prefix: response.data.prefix,
            customer_name: response.data.first_name,
            phone: response.data.phone,
            email: response.data.email,
            city: response.data.city,
            province: response.data.state,
            country: response.data.country,
            user_image: response.data.user_image,
            address: response.data.address,
	    zipcode: response.data.zip_code,
	    is_active: response.data.is_active
        }
	if(response.data.user_image){
	 this.avatar = this.imgUrl+response.data.user_image;
	}else{
         this.avatar = "/images/avatar.png";
	}
      } else {
        this.$toast.open({
          message: response.message,
          type: "error",
          position: "top-right"
        });
      }
    });
  },
  computed: {
    serverOptions() {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      return {
        url: this.apiUrl,
        withCredentials: false,
        process: {
          url: "uploadImage",
          headers: {
            Authorization: "Bearer " + currentUser.data.access_token
          }
        }
      };
    },
    url() {
      if (this.file) {
        let parsedUrl = new URL(this.file);
        return [parsedUrl.pathname];
      } else {
        return null;
      }
    }
  },
  methods: {
    handleProcessFile: function(error, file) {
       this.avatar = this.imgUrl+file.serverId;
      this.addForm.user_image = file.serverId;
    },
    update() {
      if (this.$refs.form.validate()) {
        customerService.edit(this.addForm).then(response => {
          //handle response
          if (response.status) {
            this.$toast.open({
              message: response.message,
              type: "success",
              position: "top-right"
            });
            //redirect to login
            //router.push("/admin/customer");
          } else {
            this.$toast.open({
              message: response.message,
              type: "error",
              position: "top-right"
            });
          }
        });
      }
    },
    Delete(){},
  }
};
</script>
