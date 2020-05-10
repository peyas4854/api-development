<template>
  <div>
    <preloader v-if="preLoader == true" />
    <div v-else>
      <div class="main_wrapper">
        <div class="main_wrapper_top_header">
          <h4>Profile</h4>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4 pr-0">
          <div class="main_wrapper">
            <div class="main_wrapper_card_header">
              <div class="image_div text-center">
                <!--  src="https://www.w3schools.com/howto/img_avatar.png" -->
                <!-- <img :src="'/img/'+user.userImage" alt="profile_image" class="profile_image" /> -->
                <img :src="'/img/'+user.image" alt="profile_image" class="profile_image" />
              </div>

              <h3 class="text-center mt-2">{{ user.userName}}</h3>
            </div>
          </div>
          <div class="main_wrapper mt-3">
            <ul class="list-group">
              <li
                :class="[profileTab ? 'ative_btn' : '', 'list-group-item' ]"
                @click="changeTab(1)"
              >Profile</li>
              <li
                :class="[changePasswordTab ? 'ative_btn' : '', 'list-group-item' ]"
                @click="changeTab(2)"
              >Change Password</li>
            </ul>
          </div>
        </div>

        <div class="col-md-8">
          <div class="main_wrapper" v-if="profileTab == true">
            <div class="main_wrapper_card_header">
              <h3>My Profile</h3>
            </div>
            <form class="main_wrapper_card_content">
              <div class="row">
                <div class="col-md-6 from_group col-sm-12">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" placeholder="Name" v-model="user.name" />
                  <!-- <p class="errors" v-if="errors.name">{{ errors.name[0] }}</p> -->
                </div>
                <div class="col-md-6 from_group col-sm-12">
                  <label for="price">Email</label>
                  <input type="email" class="form-control" placeholder="Price" v-model="user.email" />
                </div>

                <div class="col-md-6 from_group col-sm-12">
                  <label for="discount">Image</label>
                  <input type="file" class="form-control" @change="imageChange" />
                </div>
              </div>
            </form>
            <div class="from_button_section">
              <button class="btn app_primary_btn" @click="save()">Save</button>
            </div>
          </div>

          <div class="main_wrapper" v-if="changePasswordTab == true">
            <div class="main_wrapper_card_header">
              <h3>Change Password</h3>
            </div>
            <form class="main_wrapper_card_content">
              <div class="row">
                <div class="from_group col-sm-12">
                  <label for="name">New Password</label>
                  <input type="password" class="form-control" placeholder v-model="user.password" />
                  <!-- <p class="errors" v-if="errors.name">{{ errors.name[0] }}</p> -->
                </div>
                <div class="from_group col-sm-12">
                  <label for="price">Confirm Password</label>
                  <input type="password" class="form-control" placeholder v-model="user.c_password" />
                </div>
              </div>
            </form>
            <button class="btn btn-primary app_primary_btn mt-3" @click="save()">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import commonMethod from "../helper/commonMethods";
export default {
  extends: commonMethod,
  data() {
    return {
      user: {},
      profileTab: true,
      changePasswordTab: false,
      uploadImage: ""
    };
  },
  created() {
    //this.getUser("http://127.0.0.1:8000/admin");
    this.user = this.User;
    console.log("profile", this.user);
  },
  computed: {
    ...mapGetters(["User"])
  },
  methods: {
    imageChange(e) {
      var fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = e => {
        this.uploadImage = e.target.result;
      };
    },
    save() {
      this.inputFields = {
        name: this.user.name,
        email: this.user.email,
        image: this.uploadImage
      };

      console.log("sdf", this.inputFields);
      this.postDataMethod(
        "http://127.0.0.1:8000/admin/update",
        this.inputFields
      );
    },
    postDataSuccess(response) {
      console.log("reponse", response);
      //this.getUser("http://127.0.0.1:8000/admin");
    },
    postDataError(error) {
      //this.errors = error.errors;
      console.log("error", error);
    },
    changeTab(val) {
      if (val == 1) {
        this.profileTab = true;
        this.changePasswordTab = false;
      } else if (val == 2) {
        this.changePasswordTab = true;
        this.profileTab = false;
      }
    },

    getUser(route) {
      let instance = this;
      instance.axiosGet(
        route,
        function(response) {
          console.log("paici response ", response.data);
          instance.user = response.data.data;
          let getuser = response.data.data;
          instance.user.name = getuser.userName;
          instance.user.email = getuser.userEmail;
          instance.user.image = getuser.userImage;
        },
        function(response) {
          console.log("paici 2", response);
        }
      );
    }
  }
};
</script>

<style scoped>
.profile_image {
  width: 250px;
  height: 250px;
}
.list-group-item {
  border: transparent !important;
}
.list-group-item:hover {
  background-color: #081a6994;
  color: white;
  transition: 0.3s;
  cursor: pointer;
}
.ative_btn {
  border-left: 2.5px solid #081a6994 !important;
}
</style>
