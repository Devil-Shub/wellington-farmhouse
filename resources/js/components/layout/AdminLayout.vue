<template>
  <v-app id="inspire" class="my-app">
    <v-navigation-drawer class="side-nav" v-model="drawer" app clipped>
      <v-card class="mx-auto" width="300">
	 <v-list>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>

            <v-list-item
              v-for="subItem in item.items"
              :key="subItem.title"
              @click=""
            >
              <v-list-item-content>
                <v-list-item-title>
		<router-link :to="subItem.url" class="nav-item nav-link">{{ subItem.title }}</router-link>
		</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </v-list>	
      </v-card>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-row>
        <v-col cols="3" md="3">
          <div class="float-right">
            <!--<img :src="`images/logo.png`" alt="">-->
          </div>
          <div class="float-left">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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

    <div class="addHereHtml" style="width: 900px;margin-left: 257px;margin-top: 85px;">
      <router-view></router-view>
    </div>
  </v-app>
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
    items: [
          {
            action: 'local_activity',
            title: 'Main',
            active: true,
            items: [
              { title: 'Overview', url: 'dashboard' },
              { title: 'Jobs', url: 'dashboard'  },
              { title: 'Dispatches', url: 'dashboard'  },
              { title: 'Services', url: 'services'  }
            ]
          },
          {
            action: 'local_activity',
            title: 'Customer',
            items: [
              { title: 'Customer', url: 'customer'  },
              { title: 'Customer Compnay', url: 'dashboard'  }
            ]
          },
          {
            action: 'local_activity',
            title: 'Employee',
            items: [
              { title: 'Managers', url: 'manager' },
	      { title: 'Drivers', url: 'driver' }
            ]
          },
          {
            action: 'local_activity',
            title: 'Fleet',
            items: [
              { title: 'Truck', url: 'trucks' },
	      { title: 'Skid', url: 'skidsteers' }
            ]
          },
          {
            action: 'local_activity',
            title: 'Accounts',
            items: [
              { title: 'Accountings',url: 'dashboard' },
              { title: 'Reports', url: 'dashboard' }
            ]
          }
        ]
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
