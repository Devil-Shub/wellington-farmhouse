<template>
      <v-app>
             <v-container>
      <v-row>
      <v-col
          cols="12"
          md="12"
        >
          <router-link to="/admin/manager/add" class="nav-item nav-link"><user-plus-icon size="1.5x" class="custom-class"></user-plus-icon></router-link>
            
            </v-col>
      <v-col
          cols="12"
          md="12"
        >
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
            <th class="text-left">Image</th>
          <th class="text-left">Name</th>
          <th class="text-left">Email</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in managers" :key="item.name">
            <td>   
                <div class="v-avatar v-list-item__avatar" style="height: 40px; min-width: 40px; width: 40px;">
                    <img :src="`/images/avatar.png`" alt="John">
                </div>
            </td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td> 
            <router-link to="/admin/manager/edit" class="nav-item nav-link"><edit-icon size="1.5x" class="custom-class"></edit-icon></router-link>
              <v-menu
                bottom
                origin="center center"
                transition="scale-transition"
              >
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                dark
                v-on="on"
              >
                More
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title @click="Action()">Deactivate</v-list-item-title>
               
                <v-list-item-title v-on="on">
                <v-row justify="center">
                    <v-dialog v-model="dialog" persistent max-width="600px">
                      <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark v-on="on">Delete</v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="headline">User Delete</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-row>
                                Are you sure you want delete this user?
                            </v-row>
                          </v-container>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="Close">No</v-btn>
                          <v-btn color="blue darken-1" text @click="Delete(2)">Yes</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                </v-row>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
          
  
      </v-col>         
     </v-row>
    </v-container>
    </v-app>
</template>

<script>
       import { required } from "vuelidate/lib/validators";
 import { managerService } from "../../../_services/manager.service";
    import { UserPlusIcon, EditIcon } from 'vue-feather-icons'
  export default {
      components: {
       UserPlusIcon,
       EditIcon
      },
    data () {
      return {
          dialog: false,
        managers: [
          {
            name: 'Frozen Yogurt',
            email: 159,
          },
        ],
      }
    },
    methods: {
        Action(){
            
        },
        Delete(e){
           if(e){
            managerService.Delete({'user_id': e}).then(response => {
              //handle response
              if(response.status) {
                  this.$toast.open({
                    message: response.message,
                    type: 'success',
                    position: 'top-right'
                  });
               //redirect to login
               router.push("/admin/manager");
              } else {
                  this.$toast.open({
                    message: response.message,
                    type: 'error',
                    position: 'top-right'
                  })
              }
            });
           }
        },
        Close(){
          this.dialog = false 
        }
    }
  }
</script>