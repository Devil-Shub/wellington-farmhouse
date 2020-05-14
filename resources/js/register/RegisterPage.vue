<template>
    <v-app>
 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="firstname"
            :rules="FnameRules"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="lastname"
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
           <v-col cols="12" sm="12">
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
           <v-text-field
            v-model="confirm_password"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="confirmPassword"
            :type="show2 ? 'text' : 'password'"
            name="confirm_password"
            label="Confirm Password"
            hint="At least 8 characters"
            counter
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>
           <v-btn
                color="success"
                class="mr-4"
                @click="validate"
              >
      Submit
    </v-btn>
      </v-row>
    </v-container>
  </v-form>
    </v-app>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      show1: false,
      show2: false,
      firstname: '',
       FnameRules: [
        v => !!v || 'First name is required',
      ],
      lastname: '',
      LnameRules: [
        v => !!v || 'Last name is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      confirm_password: '',
      rules: {
          required: value => !!value || 'Password is equired.',
          min: v => v.length >= 8 || 'Password Min 8 characters'
      },
       confirmPassword: [
        v => !!v || 'Confirm password is equired.',
        v => (v && v.length >= 8) || 'Confirm password must be 8 characters', 
      ],
    }),
    methods: {
        validate () {
          if( this.$refs.form.validate() ){
              this.axios.post('http://klk.leagueofclicks.com/api/auth/signup',{first_name: this.firstname, last_name:this.lastname,email:this.email, password:this.password, confirm_passwors:this.confirm_password, role_id:4})
               .then(function (response) {

                   console.log("Ddd");
                   console.log(response)
                })
                .catch(function (error) {
                     console.log(error)
                });
          }
       }
    }
  }
</script>
