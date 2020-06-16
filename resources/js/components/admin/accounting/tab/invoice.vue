<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
    class="pt-0"
  >
    <v-row>
        <v-col sm="12" cols="12">
        <!-- all jobs -->
            <table id="example" class="table table-striped table-bordered" style="width:100%">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Customer</th>
                        <th>Job#</th>
                        <th>Service</th>
                        <th>Total</th>
                        <th>In quick book</th>
                        <th>Email</th>
                        <th>Download</th>
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
            </table>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { router } from "../../../../_helpers/router";
import { environment } from "../../../../config/test.env";
import { PlusCircleIcon } from "vue-feather-icons";
export default {
  components: {
    PlusCircleIcon
  },
  data() {
    return {
      
    };
  },
}

</script>