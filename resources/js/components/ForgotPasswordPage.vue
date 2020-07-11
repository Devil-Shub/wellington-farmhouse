<template class="bg_login_img">
  <v-app id="login_bg">
 <img src="images/login-bg4.jpg" />
    <div class="login_form">
             <v-container>
      <v-row>
      <v-col cols="6" md="6" class="img_bg_outside">
            <div class="img_bg">
              <img src="images/login_img.png" />
            </div>
          </v-col>
       <v-col
          cols="6"
          md="6"
          >
<div class="login_box">
   <div class="login_txt">
                <h2>Recover your password</h2>
                <p>Please enter your email address and we'll send you instructions on how to reset your password.</p>
              </div>
        <v-form
           ref="form"
           v-model="valid"
           lazy-validation
         >
       <v-col cols="12" sm="12">
                  <v-text-field
                v-model="email"
                :rules="emailRules"
                name="email"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
           <router-link to="/login">Back To Login</router-link>
           <v-btn color="success"  class="login_btn">Recover Password</v-btn>
   
  </v-form>
</div>
       </v-col>
             </v-row>
    </v-container>
</div>
    </v-app>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { router } from "../_helpers/router";
import { authenticationService } from "../_services/authentication.service";
  export default {
    data: () => ({
      valid: true,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
    }),
    computed: {
        passwordConfirmationRule() {
          return () => (this.password === this.confirm_password) || 'Password must match'
        },
    },
    methods: {
    }
  }
</script>
<style>
/* #login_bg > img {
  max-width: 100%;
} */
#login_bg {
  background-image: url("/public/images/login-bg.jpg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.login_form {
  max-width: 1000px;
  width: 100%;
  margin: auto;
  padding: 20px;
  position: absolute;
  left: 0;
  right: 0;
  top: calc(50% - 265px);
}
.login_txt {
  padding-bottom: 26px;
}
.login_form .row {
  background: #fff;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
}
.login_form .img_bg img {
  max-width: 100%;
}
.login_txt h2 {
  color: #2c2c2c;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;
}
.login_txt p {
  color: #2c2c2c;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
}
.sign_up {
  color: #2c2c2c;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}
.btn_grp {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  flex-direction: row-reverse;
}
#login_bg .login_form .btn_grp button.login_btn {
  background: #5c8546;
  color: #fff;
  font-size: 13px;
  text-transform: capitalize;
  font-weight: 400;
  padding: 10px 30px;
  border-radius: 7px;
  outline: none;
}
.social_btn button {
  margin-right: 20px;
}
.img_bg_outside {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eff2f7;
}
.login_box {
  padding: 1rem;
}
.v-text-field {
  padding-top: 0px;
  margin-top: 0px;
}
.v-input input {
 
}
.v-application .error--text {
  border: none;
}
.v-text-field.v-input--has-state > .v-input__control > .v-input__slot:before {
  border: none;
}
.v-text-field > .v-input__control > .v-input__slot:after,
.v-text-field > .v-input__control > .v-input__slot:before {
  content: none;
}
.forget {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.forget .custom_checkbox {
  margin: 0;
}
.forget .custom_checkbox label {
  top: 4px;
}
.v-application .primary--text {
  color: #5c8545 !important;
}
@media only screen and (max-width: 992px) {
  .img_bg_outside {
    display: none;
  }
}
</style>
