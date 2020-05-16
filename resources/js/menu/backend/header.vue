<template>
     <div class="navbar-nav">
            <router-link to="/dashboard" class="nav-item nav-link">Dashboard</router-link>
            <a @click="logout" class="nav-item nav-link">Logout</a>
          </div>
</template>
<script>
import { authenticationService } from ".../_services/authentication.service";
//import { router } from ".../_helpers/router";
export default {
  methods: {
    logout() {
      authenticationService.logout();
      router.push("/login");
    }
  }
}
</script>