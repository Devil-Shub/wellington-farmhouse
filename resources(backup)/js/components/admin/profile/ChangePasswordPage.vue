<template>
    <v-app>
      <v-container fluid>
      <v-row>
       <div class="bread_crum">
      <ul>
        <li>
          <h4 class="main-title text-left top_heading">
            Change Password
            <span class="right-bor"></span>
          </h4>
        </li>
        <li>
          <router-link to="/admin/dashboard" class="home_svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-home h-5 w-5 mb-1 stroke-current text-primary"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevrons-right w-4 h-4"
              >
                <polyline points="13 17 18 12 13 7" />
                <polyline points="6 17 11 12 6 7" />
              </svg>
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/admin/services">
            List
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevrons-right w-4 h-4"
              >
                <polyline points="13 17 18 12 13 7" />
                <polyline points="6 17 11 12 6 7" />
              </svg>
            </span>
          </router-link>
        </li>
        <li>Add</li>
      </ul>
    </div>
 	
        <v-col cols="12" md="12" class="new_driver" id="new_driver">
        <v-form ref="form" v-model="valid" class="v-form custom_form_field" lazy-validation>
       <v-col cols="12" sm="12" pt-0>
          <v-col sm="2" class="label-align pt-0">
            <label>Password</label>
          </v-col>
          <v-col sm="4" class="pt-0">
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="password"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          </v-col>
            </v-col>

            <v-col cols="12" sm="12" class="pt-0">
            <v-col sm="2" class="label-align pt-0">
              <label>Change Password</label>
            </v-col>
            <v-col sm="4" class="pt-0">
           <v-text-field
            v-model="confirm_password"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, passwordConfirmationRule]"
            :type="show2 ? 'text' : 'password'"
            name="confirm_password"
            label="Confirm Password"
            hint="At least 8 characters"
            counter
            @click:append="show2 = !show2"
          ></v-text-field>
          </v-col>
        </v-col>
        <v-col sm="12" class="label-align pt-0">
        <v-col sm="12" class="label-align pt-0">
           <v-btn color="success" class="mr-4 ml-3 custom-save-btn" @click="validate">Update</v-btn>
        </v-col>
        </v-col>
   
  </v-form>
       </v-col>
             </v-row>
    </v-container>
    </v-app>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { authenticationService } from "../../../_services/authentication.service";
  export default {
    data: () => ({
           show1: false,
      show2: false,
      password: '',
      confirm_password: '',
      valid: true,
      rules: {
          required: value => !!value || 'Password is equired.',
          min: v => v.length >= 8 || 'Password Min 8 characters'
      },
    }),
    computed: {
        passwordConfirmationRule() {
          return () => (this.password === this.confirm_password) || 'Password must match'
        },
    },
    methods: {
        validate () {
          if( this.$refs.form.validate() ){
            authenticationService.changePassword({password: this.password, password_confirmation:this.confirm_password}).then(response => {
              //handle response
              if(response.status) {
                  this.$toast.open({
                    message: response.message,
                    type: 'success',
                    position: 'top-right'
                  });
               //redirect to login
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
  }
</script>

<style>
    .new_driver {
       background-color: #fff;
       box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
       border-radius: 7px;
       padding: 20px 0px !important;
}  
.v-text-field__slot input {
    border: 0px !important;
} 
.filepond--root {
    margin-bottom: 0px !important;
    padding-left: 0px !important;
}
.filepond--wrapper {
    padding-left: 0px !important;
}    
.new_driver .v-input input {
    padding-left: 0px !important;
    padding-right: 0px !important;
}
#new_driver.new_driver button.mdi {
    background: transparent !important;
} 
.v-menu__content .v-picker .v-picker__title.primary {
    background-color: #11b276 !important;
}
label {
    font-weight: 500;
}
#new_driver .custom_form_field label {
    font-size: 14px; 
}

</style>
