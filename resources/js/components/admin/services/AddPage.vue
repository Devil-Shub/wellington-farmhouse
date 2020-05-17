<template>
      <v-app>
             <v-container>
      <v-row>
          <v-col
          cols="12"
          md="12"
          ><h2>Add Service</h2></v-col>
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
            v-model="addForm.service_name"
            :rules="nameRules"
            label="Service name"
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
            v-model="addForm.price"
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
        v-model="addForm.description"
            :rules="descriptionRules"
            label="Description"
            required
    ></v-textarea>
       
        </v-col>
           <v-btn color="success" class="mr-4" @click="save">Submit</v-btn>
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
//import { imageVUE } from '../../image'
export default {
   components: {
//      'image-component': imageVUE,
  },
  data() {
    return {
        valid: true,
        avatar: null,
        addForm: {
        service_name: '',
        price: '',
        description: '',
        },
       nameRules: [
        v => !!v || 'Service name is required',
      ],
      priceRules: [
        v => !!v || 'Service price is invalid/required',
//        v => v > 100 || 'Password Min 8 characters',
      ],
      descriptionRules: [
        v => !!v || 'Service description is required',
      ],
    };
  },
  created() {
      
  },
  methods: {
       save () {
          if( this.$refs.form.validate() ){
              console.log(this.addForm)
             jobService.add(this.addForm).then(response => {
              //handle response
              if(response.status) {
                  this.$toast.open({
                    message: response.message,
                    type: 'success',
                    position: 'top-right'
                  });
               //redirect to login
               router.push("/admin/services");
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
