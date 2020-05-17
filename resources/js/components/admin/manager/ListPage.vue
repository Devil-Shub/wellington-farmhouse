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
          <td>  <router-link to="/admin/manager/edit" class="nav-item nav-link"><edit-icon size="1.5x" class="custom-class"></edit-icon></router-link></td>
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
    import { UserPlusIcon, EditIcon } from 'vue-feather-icons'
  export default {
      components: {
       UserPlusIcon,
       EditIcon
      },
    data () {
      return {
        managers: [
          {
            name: 'Frozen Yogurt',
            email: 159,
          },
        ],
      }
    },
  }
</script>