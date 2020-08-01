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
      <preloader v-if="preLoader == true" />
     <div v-else >

    

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Emil</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user,i) in users" :key="i">
            <th scope="row">{{ i+1}}</th>
            <td>{{ user.name}}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.userType }}</td>
            <td>
              <button class="btn btn-primary">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col-md-12">
          <nav aria-label="Page">
            <ul class="pagination justify-content-center">
              <li
                class="page-item"
                @click="fetchPaginationUser(pagination.prev_page)"
                v-bind:class="{disabled:!pagination.prev_page}"
              >
                <span class="page-link">Previous</span>
              </li>
              <li
                class="page-item cursor-pointer"
                v-for="(n,i) in pagination.last_page"
                :key="i"
                v-bind:class="{active:pagination.current_page == n}"
              >
                <a
                  class="page-link "
                  @click="fetchPaginationUser(pagination.path_page + n)"
                >{{ n }}</a>
              </li>

              <li
                class="page-item"
                @click="fetchPaginationUser(pagination.next_page)"
                v-bind:class="{disabled:!pagination.last_page}"
              >
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item">{{ pagination.current_page}} of {{ pagination.last_page}}</li>
            </ul>
          </nav>
        </div>
      </div>

 </div>
    </div>
  </div>
</template>

<script>
import commonMethod from "../helper/commonMethods";
import usermodal from "../components/backend/user/userModal";
export default {
  extends: commonMethod,
  components: {
    usermodal,
  },
  data() {
    return {
      modalID: "#add-edit-modal",
      url: "/userlist",
      pagination: [],
      users: [],
      // dataset: {
      //   source: "http://127.0.0.1:8000/userlist",
      //   //same as data from server
      //   headers: ["Name", "UserType", "Email", "Image"],
      //   colums: [
      //     { title: " Name", key: "name", type: "text" },
      //     { title: " UserType", key: "userType", type: "text" },
      //     { title: " Email", key: "email", type: "text" },
      //     { title: " Action", key: "action", type: "component" }
      //   ]
      // }
    };
  },
  mounted() {
    let instance = this;
    this.$hub.$on("addEdit", function (id) {
      instance.addEdit(id);
    });
    this.modalCloseAction(this.modalID);
  },
  created() {
    this.getAllUser();
  },
  methods: {
    getAllUser() {
      //console.log("127.0.0.1:8000/userlist");
      let instance = this;
      instance.axiosGet(
        this.url,
        function (response) {
          console.log("user response ", response);
          instance.users = response.data.data;
          instance.makePagination(response.data);
        },
        function (response) {
          console.log("user erro ", response);
        }
      );
    },
    makePagination(data) {
      console.log("pagination", data);
      let pagination = {
        current_page: data.current_page,
        first_page: data.first_page_url,
        last_page: data.last_page,
        next_page: data.next_page_url,
        prev_page: data.prev_page_url,
        path_page: data.path + "?page=",
      };
      this.pagination = pagination;
    },
    fetchPaginationUser(url) {
      console.log("url", url);
      this.url = url;
      this.getAllUser();
    },
  },
};
</script>

<style scoped lang="scss">
.active {
  background-color: blue;
}
</style>
