<template>
  <div>
    <nav v-if="isCustomer" class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <a @click="logout" class="nav-item nav-link">Logout</a>
      </div>
    </nav>
    <nav v-if="!currentUser" class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav">
        <router-link to="/login" class="nav-item nav-link">Login</router-link>
        <router-link to="/register" class="nav-item nav-link">Register</router-link>
      </div>
    </nav>
     
    <div v-if="isAdmin">
      <nav v-if="currentUser" class="navbar navbar-expand navbar-dark bg-dark">
          <div class="navbar-nav">
            <router-link to="/dashboard" class="nav-item nav-link">Dashboard</router-link>
            <a @click="logout" class="nav-item nav-link">Logout</a>
          </div>
      </nav>
    </div>
     <router-view></router-view>
<div id="snackbar">Something Here ....</div> 
  </div>
</template>

<script>
import { authenticationService } from "../_services/authentication.service";
import { router } from "../_helpers/router";
import { Role } from "../_helpers/role";

export default {
  name: "app",
  data() {
    return {
      currentUser: null
    };
  },
  computed: {
    isAdmin() {
      return this.currentUser && this.currentUser.data.user.role_id === Role.Admin;
    },
    isAdminManager() {
      return this.currentUser && this.currentUser.data.user.role_id === Role.Admin_Manager;
    },
    isTruckDriver() {
      return this.currentUser && this.currentUser.data.user.role_id === Role.Truck_Driver;
    },
    isCustomer() {
      return this.currentUser && this.currentUser.data.user.role_id === Role.Customer;
    },
    isCustomerManager() {
      return this.currentUser && this.currentUser.data.user.role_id === Role.Customer_Manager;
    },
    Company() {
      return this.currentUser && this.currentUser.data.user.role_id === Role.Company;
    }
  },
  created() {
    authenticationService.currentUser.subscribe(x => (this.currentUser = x));
  },
  methods: {
    logout() {
      authenticationService.logout();
      router.push("/login");
    }
  }
};
</script>
