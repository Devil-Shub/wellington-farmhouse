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
export default {
  components: {
    StripeElements
  },
  data: () => ({
    loading: false,
    amount: 1000,
    publishableKey: 'pk_test_51GsAraH9zpgoQ1TSjD70A2YceJPHAGDEPymEdBMDg2R93EWywLH1pQyGClwxUMdlaYau9alEu6sdkfheZmMV8OOL00BUsqHsLr', 
    token: null,
    charge: null
  }),
 mounted: function() {
   alert(this.$route.params.unique_id)
     if (this.$route.params.unique_id) {
        paymentService.paymentJob(this.$route.params.unique_id).then(response => {
          //handle response
          if (response.data) {
            this.$toast.open({
              message: response.message,
              type: "success",
              position: "top-right"
            });
            //redirect to login
            router.push("/admin/trucks");
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
