<template>
      <v-app>
             <v-container>
      <v-row>
              <v-col
          cols="12"
          md="12"
          ><h2>Edit Manager</h2></v-col>
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
  
      <v-file-input 
        :rules="rules"
        placeholder="Pick an avatar"  
        prepend-icon="mdi-camera"
        show-size accept="image/*" 
        label="Avatar"
        @change="GetImage"
        v-model="editForm.user_image"
        >
      </v-file-input>
    
     </v-col>
          <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="editForm.first_name"
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
            v-model="editForm.last_name"
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
            v-model="editForm.email"
            :rules="emailRules"
            name="email"
            label="E-mail"
            required
          ></v-text-field>
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
 import { managerService } from "../../../_services/manager.service";
//import { imageVUE } from '../../image'
export default {
   components: {
//      'image-component': imageVUE,
  },
  data() {
    return {
        valid: true,
        avatar: null,
        editForm: {
            user_id: null,
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
    };
  },
   mounted: function() {
         managerService.getManager(this.$route.params.id).then(response => {
              //handle response
              if(response.status) {
                   this.editForm.user_id = response.data.id;
                this.editForm.user_image = response.data.user_image;
                if(response.data.user_image){
                    this.avatar = response.data.user_image;
                }else{
                    this.avatar = '/images/avatar.png';
                }
                this.editForm.first_name = response.data.first_name;
                this.editForm.last_name = response.data.last_name;
                this.editForm.email = response.data.email;
                this.editForm.phone = response.data.phone;
              } else {
                  router.push("/admin/manager"); 
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
        this.editForm.user_image = e;
      },
       update () {
          if( this.$refs.form.validate() ){
              managerService.edit(this.editForm).then(response => {
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
