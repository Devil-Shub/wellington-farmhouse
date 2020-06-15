<template>
 
    <v-row>
     <v-col cols="8" md="8">
 <v-card
    class="mx-auto"
    outlined
  >
  <router-link v-if="payment" :to="paymentUrl" class="nav-item nav-link">
                    Payment
                    </router-link>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{currentUser.first_name}} {{currentUser.last_name}}</div>
        <v-list-item-title class="headline mb-1">{{currentUser.email}}</v-list-item-title>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
   <img v-if="currentUser.user_image" :src="'../'+currentUser.user_image" alt="John" />
                      <img v-if="!currentUser.user_image" src="/images/avatar.png" alt="driver" />
</v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text @click="logout">logout</v-btn>
    </v-card-actions> 
  </v-card>

</v-col>

  </v-row>
</template>

<script>
import { authenticationService } from "../_services/authentication.service";
import { router } from "../_helpers/router";
  export default {
    data () {
      return {
        colors: [
          'primary',
          'secondary',
          'yellow darken-2',
          'red',
          'orange',
        ],
	      currentUser: '',
        paymentUrl: '',
        payment: false,
        model: 1,
      }
    },
    mounted() {
       var Userdata = JSON.parse(localStorage.getItem("currentUser"));
	     this.currentUser = Userdata.data.user;
       this.paymentUrl = localStorage.getItem("payment");
       if(this.paymentUrl != 'undefined'){
          var r = paymentUrl.indexOf("payment");
          if(r){
            this.payment = true;
          }
       }
   },
  methods: {
    logout() {
      authenticationService.logout();
      router.push("/login");
    }
  }
  }
</script>
