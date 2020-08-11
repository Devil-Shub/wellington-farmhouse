<template>
  <v-app>
    <div class="bread_crum">
      <ul>
        <li>
          <h4 class="main-title top_heading">
            All Managers
            <span class="right-bor"></span>
          </h4>
        </li>
        <li>
          <router-link to="/admin/dashboard" class="home_svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-home h-5 w-5 mb-1 stroke-current text-primary"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevrons-right w-4 h-4"
              >
                <polyline points="13 17 18 12 13 7" />
                <polyline points="6 17 11 12 6 7" />
              </svg>
            </span>
          </router-link>
          <router-link v-if="!isAdmin" to="/manager/manager/add" class="nav-item nav-link">
            <plus-circle-icon size="1.5x" class="custom-class"></plus-circle-icon>
          </router-link>
        </div>
        <v-col cols="12" md="12" id="manager_wrap">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Image</th>
                  <th class="text-left">Manager Name</th>
                  <th class="text-left mgr-add-col">Address</th>
                  <th class="text-left">Contact Number</th>
                  <th class="text-left">Email Address</th>
                  <th class="text-left">Salary</th>
                  <th class="text-left">Active</th>
                  <th class="text-left">Options</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in managers" :key="item.name" v-on:click="selectTr(index)" v-bind:class="{ 'selected' : isActive == index}">
                  <template v-if="checkuser != item.id">
                    <td>
                      <div
                        class="v-avatar v-list-item__avatar"
                        style="height: 40px; min-width: 40px; width: 40px;"
                      >
                        <img v-if="item.user_image" :src="'../'+item.user_image" alt="John" />
                        <img v-if="!item.user_image" src="/images/avatar.png" alt="driver" />
                      </div>
                    </td>
                    <td>
                      <router-link
                        :to="'/admin/manager/view/' + item.id"
                        class="nav-item nav-link"
                      >{{ item.first_name }} {{ item.last_name }}</router-link>
                    </td>
                    <td>{{ item.address }} {{ item.city }} {{ item.state }} {{ item.country }} {{ item.zip_code }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.email }}</td>
                    <td>${{ item.manager.salary }}</td>
                    <td>
                      <v-chip v-if="!item.is_active" class="ma-2" color="red" text-color="white">No</v-chip>
                      <v-chip
                        v-if="item.is_active"
                        class="ma-2"
                        color="green"
                        text-color="white"
                      >Yes</v-chip>
                    </td>
                    <td class="action-col">
                        <!-- <edit-icon size="1.5x" class="custom-class"></edit-icon> -->
                        <!-- <trash-icon size="1.5x" class="custom-class"></trash-icon> -->

          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { managerService } from "../../../_services/manager.service";
import { authenticationService } from "../../../_services/authentication.service";
import {
  UserIcon,
  EditIcon,
  TrashIcon,
  PlusCircleIcon,
  MoreVerticalIcon,
} from "vue-feather-icons";
import { router } from "../../../_helpers/router";
export default {
  components: {
    UserIcon,
    EditIcon,
    TrashIcon,
    PlusCircleIcon,
    MoreVerticalIcon,
  },
  data() {
    return {
      dialog: false,
      triggerDropdown: null,
      on: false,
      isActive: null,
      managers: [],
      isAdmin: true,
      checkuser: "",
    };
  },
  mounted() {
    const currentUser = authenticationService.currentUserValue;
    this.checkuser = currentUser.data.user.id;
    if (currentUser.data.user.role_id == 1) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
    this.getResults();
  },
  methods: {
    selectTr: function (rowIndex) {
      this.isActive = rowIndex;
    },
    getResults() {
      managerService.listService().then((response) => {
        //handle response
        if (response.status) {
          this.managers = response.data;
        } else {
          this.$toast.open({
            message: response.message,
            type: "error",
            position: "top-right",
          });
        }
      });
    },
    Delete(e) {
      if (e) {
        managerService.Delete(e).then((response) => {
          //handle response
          if (response.status) {
            this.$toast.open({
              message: response.message,
              type: "success",
              position: "top-right",
            });
            //redirect to login
            this.dialog = false;
            //load new data
            this.getResults();
            //               router.push("/admin/manager");
          } else {
            this.dialog = false;
            this.$toast.open({
              message: response.message,
              type: "error",
              position: "top-right",
            });
          }
        });
      }
    },
    Close() {
      this.dialog = false;
    },
    dropdownToggle: function (setIndex) {
      //if same index is called up again then close it
      if (this.triggerDropdown == setIndex) {
        this.triggerDropdown = null;
      } else {
        this.triggerDropdown = setIndex;
      }
    },
  },
   updated() {
    setTimeout(function () {
      $(document).ready(function () {
        $("#example").DataTable({
          aoColumnDefs: [
            {
              bSortable: false,
              aTargets: [-1, -2, -3, -4, -5, -6],
            },
          ],
          // language: {
          //   paginate: {
          //     previous: "",
          //     next: "",
          //   },
          // },
          oLanguage: { sSearch: "" },
        });
        $("#example_wrapper .dataTables_filter input").attr(
          "placeholder",
          "Search Managers"
        );
        $(
          "#example_wrapper .dataTables_paginate .paginate_button.previous"
        ).text("");
        $("#example_wrapper .dataTables_paginate .paginate_button.next").text(
          ""
        );
      });
    }, 1000);
  },
};
</script>

