<template>
  <v-app>
    <v-container>
      <v-row>
        <h2>Customer List</h2>
        <div class="add-icon">
          <router-link to="/admin/customer/add" class="nav-item nav-link">
          <plus-circle-icon size="1.5x" class="custom-class"></plus-circle-icon>
          </router-link>
        </div>
   <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-col cols="12" md="12">
          <v-data-table
	    v-bind:headers="headers"
	    :items="items"
	    :search="search"
	    class="elevation-1"
	  >
	  <template slot="items" slot-scope="props">
	    <td>{{ props.item.index }}</td>
	    <td class="text-xs-right">{{ props.item.username }}</td>
	    <td class="text-xs-right">{{ props.item.email }}</td>
	    <td class="text-xs-right">{{ props.item.phone }}</td>
	  </template>
	</v-data-table>
      </v-col>
    </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { managerService } from "../../../_services/manager.service";
import {
  UserIcon,
  EditIcon,
  TrashIcon,
  PlusCircleIcon
} from "vue-feather-icons";
import { router } from "../../../_helpers/router";

export default {
  components: {
    UserIcon,
    EditIcon,
    TrashIcon,
    PlusCircleIcon
  },
  data() {
    return {
      search: '',
        headers: [
        {
        text:'Name',
        align: 'left',
        sortable: false,
        value:'index'
        },
        { text: 'First Name', value: 'first_name' },
        { text: 'Email', value: 'email' },
        { text: 'Phone', value: 'phone' }
     ],
     items: [],
 
    };
  },
  getList() {},
  mounted() {
    this.getResults();
  },
  methods: {
    getResults() {
      managerService.listService().then(response => {
        //handle response
        if (response.status) {
          this.items = response.data;
        } else {
          this.$toast.open({
            message: response.message,
            type: "error",
            position: "top-right"
          });
        }
      });
    },
    Delete(e) {
      if (e) {
        managerService.Delete(e).then(response => {
          //handle response
          if (response.status) {
            this.$toast.open({
              message: response.message,
              type: "success",
              position: "top-right"
            });
            //redirect to login
            this.dialog = false;
            //load new data
            this.getResults();
            //router.push("/admin/manager");
          } else {
            this.dialog = false;
            this.$toast.open({
              message: response.message,
              type: "error",
              position: "top-right"
            });
          }
        });
      }
    },
    Close() {
      this.dialog = false;
    }
  }
};
</script>
