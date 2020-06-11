<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
    class="pt-0"
  >
    <v-row>
    <div class="add-icon">
      <router-link to="/admin/jobs/add" class="nav-item nav-link">
        <plus-circle-icon size="1.5x" class="custom-class"></plus-circle-icon>
      </router-link>
    </div>
    <div class="job-tabs">
      <v-tabs class="" v-model="tab" background-color="transparent" color="basil" grow>
        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      </v-tabs>

      <!-- all jobs -->
      <v-tabs-items v-model="tab" class="custom-tab-content">
        <v-tab-item v-for="item in items" :key="item">
          <v-card class="" color="basil" flat v-if="item == 'All Jobs'">
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Image</th>
                      <th class="text-left">Job Summary</th>
                      <th class="text-left">Sort By</th>
                      <th class="text-left">Techs</th>
                      <th class="text-left">Time</th>
                      <th class="text-left">Distance</th>
                      <th class="text-left">Payment</th>
                      <th class="text-left">Chat</th>
                      <th class="text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

      <!-- assigned jobs -->
      <v-tabs-items v-model="tab" class="custom-tab-content">
        <v-tab-item v-for="item in items" :key="item">
          <v-card class="" color="basil" flat v-if="item == 'Assigned Jobs'">
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Image</th>
                      <th class="text-left">Job Summary</th>
                      <th class="text-left">Sort By</th>
                      <th class="text-left">Techs</th>
                      <th class="text-left">Time</th>
                      <th class="text-left">Distance</th>
                      <th class="text-left">Payment</th>
                      <th class="text-left">Chat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

      <!-- completed jobs -->
      <v-tabs-items v-model="tab" class="custom-tab-content">
        <v-tab-item v-for="item in items" :key="item">
          <v-card class="" color="basil" flat v-if="item == 'Completed Jobs'">
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Image</th>
                      <th class="text-left">Job Summary</th>
                      <th class="text-left">Sort By</th>
                      <th class="text-left">Techs</th>
                      <th class="text-left">Time</th>
                      <th class="text-left">Distance</th>
                      <th class="text-left">Payment</th>
                      <th class="text-left">Chat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

      <!-- open jobs -->
      <v-tabs-items v-model="tab" class="custom-tab-content">
        <v-tab-item v-for="item in items" :key="item">
          <v-card class="" color="basil" flat v-if="item == 'Open Jobs'">
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Image</th>
                      <th class="text-left">Job Summary</th>
                      <th class="text-left">Sort By</th>
                      <th class="text-left">Payment</th>
                      <th class="text-left">Chat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

      <!-- repeating jobs -->
      <v-tabs-items v-model="tab" class="custom-tab-content">
        <v-tab-item v-for="item in items" :key="item">
          <v-card class="" color="basil" flat v-if="item == 'Repeating Jobs'">
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Image</th>
                      <th class="text-left">Job Summary</th>
                      <th class="text-left">Sort By</th>
                      <th class="text-left">Payment</th>
                      <th class="text-left">Chat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

      <!-- unpaid jobs -->
      <v-tabs-items v-model="tab" class="custom-tab-content">
        <v-tab-item v-for="item in items" :key="item">
          <v-card class="" color="basil" flat v-if="item == 'Unpaid Jobs'">
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Image</th>
                      <th class="text-left">Job Summary</th>
                      <th class="text-left">Sort By</th>
                      <th class="text-left">Techs</th>
                      <th class="text-left">Time</th>
                      <th class="text-left">Distance</th>
                      <th class="text-left">Payment</th>
                      <th class="text-left">Chat</th>
                      <th class="text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>

    </v-row>
  </v-container>
</template>

<script>
import { PlusCircleIcon } from "vue-feather-icons";
export default {
  components: {
    PlusCircleIcon
  },
  data() {
    return {
      tab: null,
      items: ["All Jobs", "Assigned Jobs", "Completed Jobs", "Open Jobs", "Repeating Jobs", "Unpaid Jobs"],
    };
  },
  created() {
  
  }
};
</script>
