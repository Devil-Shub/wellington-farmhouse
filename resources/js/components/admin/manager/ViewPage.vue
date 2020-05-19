<template>
      <v-app>
             <v-container>
      <v-row>
     
        
      <v-subheader>Service</v-subheader>     
        <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Name</v-list-item-title>
              <v-list-item-subtitle>{{addForm.first_name}}  {{addForm.last_name}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
      
         <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Email</v-list-item-title>
          <v-list-item-subtitle>{{addForm.email}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
        <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Active</v-list-item-title>
          <v-list-item-subtitle>   <v-chip v-if="!addForm.is_active"
              class="ma-2"
              color="red"
              text-color="white"
            >
              Deactivate
            </v-chip>
            <v-chip v-if="addForm.is_active"
              class="ma-2"
              color="green"
              text-color="white"
            >
              Activate
            </v-chip></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
         
   </v-row>
    </v-container>
    </v-app>
</template>

<script>
     import { managerService } from "../../../_services/manager.service"
export default {
   components: {
//      'image-component': imageVUE,
  },
  data() {
    return {
        valid: true,
        avatar: null,
        addForm: {
        first_name: '',
        last_name: '',
        email: '',
        is_active: '',
         user_image: null,
         phone: '',
        },   
    };
  },
  created() {
        managerService.getManager(this.$route.params.id).then(response => { 
          if(response.status) {
              this.addForm.user_id = response.data.id; 
              if(response.data.user_image){
                this.addForm.user_image = response.data.user_image; 
               }
              if(response.data.user_image){  
                  this.avatar = response.data.user_image; 
              }else{        
                  this.avatar = '/images/avatar.png';   
              }        
              this.addForm.first_name = response.data.first_name;   
              this.addForm.last_name = response.data.last_name;    
              this.addForm.email = response.data.email;       
              this.addForm.phone = response.data.phone;  
              this.addForm.is_active = response.data.is_active;   
              console.log(this.addForm)
          } else {              
              router.push("/admin/manager");    
              this.$toast.open({     
                  message: response.message, 
                  type: 'error',      
                  position: 'top-right'   
              })       
          }        
      });

  },
  methods: {
    
    }
};
</script>
