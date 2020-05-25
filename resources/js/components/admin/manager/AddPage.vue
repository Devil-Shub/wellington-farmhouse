<template>
      <v-app>
             <v-container>
      <v-row>
          <v-col
          cols="12"
          md="12"
          ><h2>Add manager</h2></v-col>
             <v-col
          cols="12"
          md="12"
          >
           <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

<v-row>
  <v-col
          cols="6"
          md="6"
        >
  
            <v-col
          cols="12"
          md="12"
        >
  
        <file-pond
        name="uploadImage"
        ref="pond"
        label-idle="Drop files here..."
        allow-multiple="false"
        v-bind:server="serverOptions"
        v-bind:files="myFiles"
        allow-file-type-validation="true"
        accepted-file-types="image/jpeg, image/png"
       v-on:processfile="handleProcessFile"
        />  
     </v-col>
          <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="addForm.first_name"
            label="Manager name"
            required
           :rules="[v => !!v || 'Manager name is required']"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="addForm.email"
            :rules="emailRules"
            name="email"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
     <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="addForm.city"
            label="City"
            required
           :rules="[v => !!v || 'City is required']"
          ></v-text-field>
        </v-col>
  <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="addForm.state"
            label="State"
            required
           :rules="[v => !!v || 'State is required']"
          ></v-text-field>
        </v-col>

  <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="addForm.country"
            label="Country"
            required
           :rules="[v => !!v || 'Country is required']"
          ></v-text-field>
        </v-col>
</v-col>

  <v-col
          cols="6"
          md="6"
        >
          <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="addForm.identification_number"
            label="Identification number"
 	    required
           :rules="[v => !!v || 'Country is required']"
          ></v-text-field>
        </v-col>
     
 <v-col cols="12" md="12">
                  <v-menu
                    v-model="menu1"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        label="Joining Date"
                        prepend-icon="event"
                        readonly
                        v-on="on"
			required
                      :rules="[v => !!v || 'Joining date is required']"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" @input="menu1 = false"></v-date-picker>
                  </v-menu>
                </v-col>

 <v-col cols="12" md="12">
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date1"
                        label="Releaving date(if required)"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date1" @input="menu2 = false" ></v-date-picker>
                  </v-menu>
                </v-col>
  <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="addForm.slaray"
            label="Country"
            required
           :rules="[v => !!v || 'Manager salary is required']"
          ></v-text-field>
        </v-col>
           <v-col
          cols="12"
          md="12"
        >
  
        <file-pond
        name="uploadImage"
        ref="pond"
        label-idle="Identification Document..."
        allow-multiple="false"
        v-bind:server="serverOptions"
        v-bind:files="myFiles"
        allow-file-type-validation="true"
        accepted-file-types="image/jpeg, image/png"
       v-on:processfile="handleProcessFile1"
        />  
     </v-col>
</v-col>


<v-btn color="success" class="mr-4" @click="update">Submit</v-btn>
 </v-row>
             </v-form>
                 </v-col>
   </v-row>
    </v-container>
    </v-app>
</template>

<script>
 import { required } from "vuelidate/lib/validators";
 import { managerService } from "../../../_services/manager.service";
 import { router } from "../../../_helpers/router";
 import { environment } from "../../../config/test.env";

export default {
   components: {
//      'image-component': imageVUE,
  },
  data() {
    return {
        valid: true,
        avatar: null,
        menu2: false,
        menu1: false,
        date:'',
        date1: '',
        apiUrl: environment.apiUrl,
        addForm: {
        first_name: '',
        city: '',
        email: '',
        state: '',
        country: '',
	user_image: null,
	phone: '',
	role_id: 2,
        document: '',
        joining_date: '',
        releaving_date: '',
        identification_number: '',
        salary: '',
        },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
     rules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],
      myFiles: [],      
    };
  },
  computed: {
        serverOptions () {
           const currentUser =   JSON.parse(localStorage.getItem("currentUser"))
           return {
             url: this.apiUrl,
             withCredentials: false,
             process: {
               url: 'uploadImage',
               headers: {
                 'Authorization': "Bearer " + currentUser.data.access_token,
               },
             }
           }
      },
      url () {
      if (this.file) {
        let parsedUrl = new URL(this.file)
        return [parsedUrl.pathname]
      } else {
        return null
      }
    },
  },
  created() {
        this.avatar = '/images/avatar.png';
  },
  methods: {
    handleProcessFile: function(error, file) {
      this.addForm.user_image = file.serverId;
    },
    handleProcessFile1: function(error, file) {
      this.addForm.document = file.serverId;
    },
       update () { 
          this.addForm.joining_date = this.date;
          this.addForm.releaving_date = this.date1;
           console.log(this.addForm)
          if( this.$refs.form.validate() ){
             managerService.add(this.addForm).then(response => {
              //handle response
              if(response.status) {
                  this.$toast.open({
                    message: response.message,
                    type: 'success',
                    position: 'top-right'
                  });
               //redirect to login
               router.push("/admin/manager");
              } else {
                  this.$toast.open({
                    message: response.message,
                    type: 'error',
                    position: 'top-right'
                  })
              }
            });
          }
      }
    }
};
</script>
