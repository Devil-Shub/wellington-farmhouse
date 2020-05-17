<template>
      <v-app>
             <v-container>
      <v-row>
      <v-col
          cols="12"
          md="12"
        >
          <router-link to="/admin/service/add" class="nav-item nav-link"><user-plus-icon size="1.5x" class="custom-class"></user-plus-icon></router-link>
            
            </v-col>
      <v-col
          cols="12"
          md="12"
        >
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
            <th class="text-left">Service Name</th>
          <th class="text-left">Price</th>
          <th class="text-left">Descriptions</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in managers" :key="item.name">
          <td>{{ item.service_name }}</td>
          <td>${{ item.price }}</td>
           <td>${{ item.description }}</td>
          <td> 
           <router-link :to="'/admin/service/edit/' + item.id" class="nav-item nav-link"><edit-icon size="1.5x" class="custom-class"></edit-icon></router-link>
            <v-btn color="blue darken-1" text @click="Delete(item.id)">Delete</v-btn>
<!--                <v-row justify="center">
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
                                Are you sure you want delete this service?
                            </v-row>
                          </v-container>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="Close">No</v-btn>
                         
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                </v-row>-->
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
 import { jobService } from "../../../_services/job.service";
 import { UserPlusIcon, EditIcon } from 'vue-feather-icons'
 import { router } from "../../../_helpers/router";
  export default {
      components: {
       UserPlusIcon,
       EditIcon
      },
    data () {
      return {
          dialog: false,
          on: false,
        managers: [],
      }
    },
    getList(){
     
    },
    mounted: function()  {
          jobService.listService().then(response => {
            //handle response
            if(response.status) {
             this.managers = response.data;
            } else {

                this.$toast.open({
                  message: response.message,
                  type: 'error',
                  position: 'top-right'
                })
            }
          });
    },
    methods: {
        Action(){
            
        },
        Delete(e){
           if(e){
              
            jobService.Delete(e).then(response => {
              //handle response
              if(response.status) {
                  this.$toast.open({
                    message: response.message,
                    type: 'success',
                    position: 'top-right'
                  });
               //redirect to login
               this.dialog = false 
//               router.push("/admin/service");
              } else {
                  this.dialog = false 
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