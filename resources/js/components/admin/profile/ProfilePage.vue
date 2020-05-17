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
           <v-btn color="success" class="mr-4" @click="update">Submit</v-btn>
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
        updateForm: {
        user_id: null,
        first_name: '',
        last_name: '',
        email: '',
        user_image: '',
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
    };
  },
    created() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    this.user_id = currentUser.data.user.id;
    this.user_image = currentUser.data.user.image;
    if(currentUser.data.user.image){
        this.avatar = currentUser.data.user.image;
    }else{
        this.avatar = '/images/avatar.png';
    }
    this.first_name = currentUser.data.user.first_name;
    this.last_name = currentUser.data.user.last_name;
    this.email = currentUser.data.user.email;

  },
  methods: {
      GetImage(e){
         this.avatar = URL.createObjectURL(e);
      },
      upload(){
          
      },
       update () {
          if( this.$refs.form.validate() ){
            this.updateForm.user_id = this.user_id;
            this.updateForm.first_name = this.first_name;
            this.updateForm.last_name = this.last_name;
            this.updateForm.email = this.email;
            this.updateForm.user_image = this.user_image;
             authenticationService.updateProfile(this.updateForm).then(response => {
              //handle response
              if(response.status) {
                  this.$toast.open({
                    message: response.message,
                    type: 'success',
                    position: 'top-right'
                  });
               //redirect to login
               router.push("/admin/profile");
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
