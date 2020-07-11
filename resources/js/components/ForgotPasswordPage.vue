<template>
    <v-app>
             <v-container>
      <v-row>
       <v-col
          cols="12"
          md="12"
          >
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
           <v-btn color="success" class="mr-4">Update</v-btn>
   
  </v-form>
       </v-col>
             </v-row>
    </v-container>
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
