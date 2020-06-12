<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col sm="12" cols="12">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Sno</th>
                  <th class="text-left">Card No</th>
                  <th class="text-left">Expiry</th>
                  <th class="text-left">Status</th>
                  <th class="text-left">Primary</th>
                  <th class="text-left">Add On</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>XXXXXXX22</td>
                  <td>3/4/22</td>
                  <td>Active</td>
                  <td>Yes</td>
                  <td>8/07/2020</td>
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
import { PlusCircleIcon } from "vue-feather-icons";
import { router } from "../../../../_helpers/router";
export default {
  components: {
    PlusCircleIcon
  },
  data() {
    return {
      prefix: ["One", "Two", "Three", "Four"]
    };
  }
};
</script>
