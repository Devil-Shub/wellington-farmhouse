<template>
  <div>
    <stripe-elements
      ref="elementsRef"
      :pk="publishableKey"
      :amount="amount"
      locale="en"
      @token="tokenCreated"
      @loading="loading = $event"
    >
    </stripe-elements>
    <button @click="submit">Pay ${{amount / 100}}</button>
  </div>
</template>
 
<script>
import { paymentService } from "../_services/payment.service";
import { router } from "../_helpers/router";
import { StripeElements } from 'vue-stripe-checkout';
import { environment } from '../config/test.env';
export default {
  components: {
    StripeElements
  },
  data: () => ({
    loading: false,
    amount: 1000,
    publishableKey: environment.stripePublishableKey, 
    token: null,
    charge: null
  }),
 mounted: function() {
     if (this.$route.params.unique_id) {
        paymentService.paymentJob(this.$route.params.unique_id).then(response => {
          //handle response
          if (response.data) {
            this.$toast.open({
              message: response.message,
              type: "success",
              position: "top-right"
            });
          } else {
            this.$toast.open({
              message: response.message,
              type: "error",
              position: "top-right"
            });
          }
        });
      }
},
  methods: {
    submit () {
      this.$refs.elementsRef.submit();
    },
    tokenCreated (token) {
      this.token = token;
      this.charge = {
        source: token.id,
        amount: this.amount,
      }
      this.sendTokenToServer(this.charge);
    },
    sendTokenToServer (charge) {
     console.log(charge)
  
    },
  }
}
</script> 
