<template>
  <div class="main_wrapper">
    <div class="main_wrapper_top_header">
      <div class="header_content my-auto">
        <h4>User List</h4>
      </div>
      <div class="header_content_button">
        <button
          class="btn btn-primary app_primary_btn"
          data-toggle="modal"
          data-target="#add-edit-modal"
          @click="addEdit('')"
        >Invite</button>
      </div>
    </div>
    <div class="modal fade" id="add-edit-modal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <usermodal
          class="modal-content"
          v-if="isActive"
          :id="selectedItemId"
          :modalID="modalID"
          ref="vuemodal"
        ></usermodal>
      </div>
    </div>

    <div class="main_wrapper_card_content">
      <datatable :dataset="dataset" />
    </div>
  </div>
</template>

<script>
import commonMethod from "../helper/commonMethods";
import usermodal from "../components/backend/user/userModal";
export default {
  extends: commonMethod,
  components: {
    usermodal
  },
  data() {
    return {
      modalID: "#add-edit-modal",
      dataset: {
        source: "http://127.0.0.1:8000/userlist",
        //same as data from server
        headers: ["Name", "UserType", "Email", "Image"],
        colums: [
          { title: " Name", key: "name", type: "text" },
          { title: " UserType", key: "userType", type: "text" },
          { title: " Email", key: "email", type: "text" },
          { title: " Action", key: "action", type: "component" }
        ]
      }
    };
  },
  mounted() {
    let instance = this;
    this.$hub.$on("addEdit", function(id) {
      instance.addEdit(id);
    });
    this.modalCloseAction(this.modalID);
  }
};
</script>

<style>
</style>
