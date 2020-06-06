<template>
     <v-app-bar app clipped-left>
      <v-row>
        <v-col cols="3" md="3">
          <div class="float-right">
              <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          </div>
          <div class="float-left">
          
          </div>
        </v-col>
        <v-col cols="9" md="9">
          <v-row class="float-right" justify="space-around">
            <v-menu bottom origin="center center" transition="scale-transition">
              <template v-slot:activator="{ on }">
                <v-list-item-avatar v-on="on">
                  <img :src="profileImage" id="userImage"/>
                </v-list-item-avatar>
              </template>
              <v-list class="header-right-menu">
                <v-list-item>
                  <v-list-item-title>
                    <router-link to="/admin/profile" class="nav-item nav-link">Profile</router-link>
                  </v-list-item-title>
                     <v-list-item-title>
                  <router-link to="/admin/changepassword" class="nav-item nav-link">Change Password</router-link>
                  </v-list-item-title>
                     <v-list-item-title>
                  <router-link to="/admin/admin/add" class="nav-item nav-link">Add Admin</router-link>
                  </v-list-item-title>
                  <v-list-item-title>
                    <button type="button" @click="logout" class="nav-item nav-link">Logout</button>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
</template>

<script>
import { authenticationService } from "../../_services/authentication.service";
import { router } from "../../_helpers/router";
import { environment } from "../../config/test.env";

export default {
  props: {
    source: String
  },

  data: () => ({
    drawer: null,
    profileImage: '',
    baseUrl: environment.baseUrl,
  }),

  created() {
    this.loadProfileImage();
  },
  methods: {
    loadProfileImage() {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
	if(currentUser.data.user.user_image){
      	    this.profileImage = "../../"+currentUser.data.user.user_image;
	}else{
          this.profileImage = "/images/avatar.png";
	}
    },
    logout() {
      authenticationService.logout();
      router.push("/login");
    }
  }
};
</script>
