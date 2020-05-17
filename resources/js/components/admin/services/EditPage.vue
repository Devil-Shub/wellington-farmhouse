<template>
      <v-app>
             <v-container>
      <v-row>
              <v-col
          cols="12"
          md="12"
          ><h2>Edit Service</h2></v-col>
             <v-col
          cols="12"
          md="12"
          >
           <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
          <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="editForm.service_name"
            :rules="nameRules"
            label="Service Name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            type="number"
            max="100"
            min="0"
            v-model="editForm.price"
            :rules="priceRules"
            label="Service Price"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
      <v-textarea
      clearable
      clear-icon="cancel"
     v-model="editForm.description"
    :rules="descRules"
    label="Description"
    required
    ></v-textarea>
        </v-col>
           <v-btn color="success" class="mr-4" @click="update">Update</v-btn>
             </v-form>
                 </v-col>
   </v-row>
    </v-container>
    </v-app>
</template>

<script>
 import { required } from "vuelidate/lib/validators";
 import { jobService } from "../../../_services/job.service";
 import { router } from "../../../_helpers/router";
export default {
   components: {
//      'image-component': imageVUE,
  },
  data() {
    return {
        valid: true,
        avatar: null,
        editForm: {
            id: '',
        service_name:'',
        price:'',
        description:''
        },
       nameRules: [
        v => !!v || 'Service name is required',
      ],
      priceRules: [
        v => !!v || 'Service price is invalid/required',
      ],
      descRules: [
        v => !!v || 'Service description is required',
      ],
    };
  },
   mounted: function() {
         jobService.getService(this.$route.params.id).then(response => {
              //handle response
              if(response.status) {
                  this.editForm.id = response.data.id;
                this.editForm.service_name = response.data.service_name;
                this.editForm.price = response.data.price;
                this.editForm.description = response.data.description;
              } else {
                  router.push("/admin/services"); 
                  this.$toast.open({
                    message: response.message,
                    type: 'error',
                    position: 'top-right'
                  })
              }
            });
    },
  methods: {
      GetImage(e){
         this.avatar = URL.createObjectURL(e);
      },
       update () {
          if( this.$refs.form.validate() ){
              jobService.edit(this.editForm).then(response => {
              //handle response
              if(response.status) {
                  this.$toast.open({
                    message: response.message,
                    type: 'success',
                    position: 'top-right'
                  });
               //redirect to login
               router.push("/admin/service");
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
