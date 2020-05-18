<template>
      <v-app>
             <v-container>
      <v-row>
          <v-col
          cols="12"
          md="12"
          ><h2>Admin Profile</h2></v-col>
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
        <div class="v-avatar v-list-item__avatar" style="height: 40px; min-width: 40px; width: 40px;">
          <img :src="avatar" alt="John">
      </div>
  
    <file-pond
        name="test"
        ref="pond"
        label-idle="Drop files here..."
        allow-multiple="false"
        v-bind:server="myServer"
        v-bind:files="myFiles"
         v-on:updatefiles="handleFilePondUpdateFile"
       
        />
      <v-file-input 
        :rules="rules"
        placeholder="Pick an avatar"  
        prepend-icon="mdi-camera"
        show-size accept="image/*" 
        label="Avatar"
        @change="GetImage"
        v-model="addForm.user_image"
        >
      </v-file-input>
    
     </v-col>
          <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="addForm.first_name"
            :rules="FnameRules"
            label="First name"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="addForm.last_name"
            :rules="LnameRules"
            label="Last name"
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
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
           <v-btn color="success" class="mr-4" @click="update">Submit</v-btn>
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
        first_name: '',
        last_name: '',
        email: '',
         user_image: null,
         phone: '',
        },
       FnameRules: [
        v => !!v || 'First name is required',
      ],
      LnameRules: [
        v => !!v || 'Last name is required',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
     rules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],
      myFiles: [],
          myServer: {
            process: (fieldName, file, metadata, load) => {
              // simulates uploading a file
              setTimeout(() => {
                load(Date.now())
              }, 1500);
            },
            load: (source, load) => {
              // simulates loading a file from the server
              console.log(source)
              fetch(source).then(res => res.blob()).then(load);
            }
          },
      
    };
  },
  created() {
        this.avatar = '/images/avatar.png';
  },
  methods: {
      GetImage(e){
         
         this.avatar = URL.createObjectURL(e);
         this.addForm.user_image = e;
      },
        handleFilePondUpdateFile(files){
          this.myFiles = files.map(files => files.file);
        },
      
       update () {
           this.addForm.user_image = this.myFiles[0];
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
