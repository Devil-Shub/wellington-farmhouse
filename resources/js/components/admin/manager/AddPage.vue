<template>
      <v-app>
             <v-container>
      <v-row>
              <v-col
          cols="12"
          md="12"
          ><h2>Add Manager</h2></v-col>
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
  
                <input type="hidden" :value="user_id" name="user_id">
      <v-file-input 
        :rules="rules"
        placeholder="Pick an avatar"  
        prepend-icon="mdi-camera"
        show-size accept="image/*" 
        label="Avatar"
        @change="GetImage"
        v-model="user_image"
        >
      </v-file-input>
    
     </v-col>
          <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="first_name"
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
            v-model="last_name"
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
            v-model="email"
            :rules="emailRules"
            name="email"
            label="E-mail"
            required
          ></v-text-field>
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
 import { authenticationService } from "../../../_services/authentication.service";
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
        user_id: null,
        first_name: '',
        last_name: '',
        email: '',
        user_image: '',
        role_id: 2,
        },
       FnameRules: [
        v => !!v || 'First name is required',
      ],
      LnameRules: [
        v => !!v || 'Last name is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
     rules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],
    };
  },
    created() {
        this.avatar = '/images/avatar.png';
  },
  methods: {
      GetImage(e){
         this.avatar = URL.createObjectURL(e);
      },
      upload(){
          
      },
       save () {
          if( this.$refs.form.validate() ){
            this.addForm.user_id = this.user_id;
            this.addForm.first_name = this.first_name;
            this.addForm.last_name = this.last_name;
            this.addForm.email = this.email;
            this.addForm.user_image = this.user_image;
            this.addForm.role_id = 2;
            console.log(this.addForm);
          }
      }
    }
};
</script>
