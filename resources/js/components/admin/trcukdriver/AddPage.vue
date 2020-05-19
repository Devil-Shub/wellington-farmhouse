<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col
              cols="12"
              md="12"
              ><h2>Add Driver</h2>
                </v-col>

          <v-col
          cols="12"
          md="12"
          > 
           
           <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          ><v-row>
            <v-col
            cols="5"
            md="5"
            >  
            <v-col
            cols="12"
            md="12"
            >          
         <file-pond
        name="test"
        ref="pond"
        label-idle="Driver Image"
        allow-multiple="false"
        v-bind:server="serverOptions"
        v-bind:files="myFiles"
       v-on:processfile="handleProcessFile"
        />
                  </v-col>           
          <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="addForm.driver_name"
            :rules="nameRules"
            label="Driver Name"
            required
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
            label="Email Address"
            required
          ></v-text-field>
        </v-col>
   
                
          <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="addForm.driver_name"
            :rules="nameRules"
            label="Driver Licence Number"
            required
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
            label="Licence Expiry Date"
            required
          ></v-text-field>
        </v-col>
<v-col
    cols="12"
    md="12"
    >
       <v-radio-group>
      <v-radio label="Option 1" value="radio-1"></v-radio>
      <v-radio label="Option 2" value="radio-2"></v-radio>
    </v-radio-group>
</v-col>
        <v-col
          cols="12"
          md="12"
        >
      <v-text-field
            v-model="addForm.driver_name"
            :rules="nameRules"
            label="Driver Salary"
            required
          ></v-text-field>
        </v-col>
      
 
                  <v-col
            cols="12"
            md="12"
            >          
         <file-pond
        name="test"
        ref="pond"
        label-idle="Upload Doccument"
        allow-multiple="false"
        v-bind:server="serverOptions"
        v-bind:files="myFiles"
       v-on:processfile="handleProcessFile"
        />
                  </v-col>
    
             </v-col>       
               
            <v-col
            cols="5"
            md="5"
            >  
                <v-col
          cols="12"
          md="12"
        >
      <v-text-field
            v-model="addForm.driver_name"
            :rules="nameRules"
            label="Address"
            required
          ></v-text-field>
        </v-col>
       <v-col
          cols="12"
          md="12"
        >
      <v-text-field
            v-model="addForm.driver_name"
            :rules="nameRules"
            label="City"
            required
          ></v-text-field>
        </v-col>
                
        <v-col
          cols="12"
          md="12"
        >
      <v-text-field
            v-model="addForm.driver_name"
            :rules="nameRules"
            label="Country"
            required
          ></v-text-field>
        </v-col>
             
        <v-col
          cols="12"
          md="12"
        >
      <v-text-field
            v-model="addForm.driver_name"
            :rules="nameRules"
            label="State"
            required
          ></v-text-field>
        </v-col>
       <v-col
        cols="12"
        md="12"
      >
           <v-text-field
          v-model="addForm.driver_name"
          :rules="nameRules"
          label="zipcode"
          required
        ></v-text-field>
      </v-col>  
       <v-col
        cols="12"
        md="12"
      >
           <v-text-field
          v-model="addForm.driver_name"
          :rules="nameRules"
          label="Mobile Number"
          required
        ></v-text-field>
      </v-col>      
 
                
             </v-col>    
               
                    <v-col
            cols="12"
            md="12"
            >  
       <v-btn color="success" class="mr-4" @click="save">Submit</v-btn>
       </v-col>
     </v-row>  </v-form>
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
        driver_name: '',
        email: '',
        description: '',
        service_image: '',
        },
       nameRules: [
        v => !!v || 'Service name is required',
      ],
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      priceRules: [
        v => !!v || 'Service price is invalid/required',
//        v => v > 100 || 'Password Min 8 characters',
      ],
      descriptionRules: [
        v => !!v || 'Service description is required',
      ],
       myFiles: [], 
    };
  },
    computed: {
        serverOptions () {
           const currentUser =   JSON.parse(localStorage.getItem("currentUser"))
           return {
             url: 'http://klk.leagueofclicks.com/api/auth/admin/',
             withCredentials: false,
             process: {
               url: './managerimage',
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
      
  },
  methods: {
       handleProcessFile: function(error, file) {
            this.addForm.service_image = file.serverId;
        },
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
