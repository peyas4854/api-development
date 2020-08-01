<template>
  <div class>
    <div class="modal-header">
      <h4 class="modal-title" v-if="id">Edit user</h4>
      <h4 class="modal-title" v-else>Invite user</h4>
      <button type="button" class="close" data-dismiss="modal" @click.prevent>&times;</button>
    </div>
    <div class="modal-body">
      <div v-if="preLoader == true">
        <preloader />
      </div>
      <form v-else>
        <div class="row">
          <div class="col-md-6 from_group col-sm-12">
            <label for="name">Name</label>
            <input type="text" class="form-control" placeholder="Name" v-model="user.name" />
            <p class="errors" v-if="errors.name">{{ errors.name[0] }}</p>
          </div>
          <div class="col-md-6 from_group col-sm-12">
            <label for="name">Email</label>
            <input type="text" class="form-control" placeholder="Name" v-model="user.email" />
            <p class="errors" v-if="errors.email">{{ errors.email[0] }}</p>
          </div>
          <div class="col-md-12 from_group col-sm-12">
            <label for="name">Role</label>
            <select name v-model="user.userType" class="form-control">
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            <p class="errors" v-if="errors.usertype">{{ errors.usertype[0] }}</p>
          </div>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary app_primary_btn" @click="save()">Save</button>
      <button type="button" class="btn btn-danger" data-dismiss="modal" @click.prevent>Close</button>
    </div>
  </div>
</template>

<script>
import commonMethods from "../../../helper/commonMethods";
export default {
  extends: commonMethods,

  props: ["id", "modalID"],
  data() {
    return {
      user: {},
      errors: []
    };
  },
  created() {
    if (this.id) {
      console.log("edit route");
      this.getProduct("http://127.0.0.1:8000/user/" + this.id);
    }
  },
  methods: {
    save() {
      let instance = this;
      instance.inputField = {
        name: this.user.name,
        email: this.user.email,
        userType: this.user.userType
      };
      console.log("input", instance.inputField);
      if (this.id) {
        instance.postDataMethod(
          "http://127.0.0.1:8000/user/update/" + this.id,
          this.inputField
        );
      } else {
        instance.postDataMethod(
          "http://127.0.0.1:8000/user/invite",
          this.inputField
        );
      }
    },
    postDataSuccess(response) {
      $(this.modalID).modal("hide");
      this.$hub.$emit("reloadDataTable");
    },
    postDataError(error) {
      this.errors = error.errors;
    },
    getProduct(route) {
      let instance = this;
      instance.preLoader = true;
      instance.axiosGet(
        route,
        function(response) {
          console.log("paici response ", response);
          instance.user = response.data.data;
          instance.preLoader = false;
        },
        function(response) {
          console.log("paici 2", response);
          instance.preLoader = true;
        }
      );
    }
  }
};
</script>


