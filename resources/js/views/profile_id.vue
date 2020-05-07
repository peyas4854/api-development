<template>
  <div>
    <div class="main_wrapper">
      <div class="top_wrapper">
        <div class="top_wrapper_header">
          <h3 class="p-0 top_wrapper_header_content">Profile</h3>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-md-4 pr-0">
        <div class="main_wrapper">
          <div class="main_wrapper_card_header">
            <div class="image_div text-center">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="profile_image"
                class="profile_image"
              />
            </div>

            <h3 class="text-center mt-2">User Name</h3>
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
                <label for="price">Price</label>
                <input type="number" class="form-control" placeholder="Price" v-model="user.price" />
              </div>
              <div class="col-md-12 from_group col-sm-12">
                <label for="description">Description</label>
                <textarea
                  type="text"
                  class="form-control"
                  placeholder="Description"
                  v-model="user.detail"
                  rows="3"
                />
              </div>
              <div class="col-md-6 from_group col-sm-12">
                <label for="discount">Discount</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Discount"
                  v-model="user.discount"
                />
              </div>
              <div class="col-md-6 from_group col-sm-12">
                <label for="stock">Stock</label>
                <input type="number" class="form-control" placeholder="Price" v-model="user.stock" />
              </div>
            </div>
            <button class="btn btn-primary app_primary_btn mt-3" @click="save()">Save</button>
          </form>
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
            <button class="btn btn-primary app_primary_btn mt-3" @click="save()">Save</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      profileTab: true,
      changePasswordTab: false
    };
  },

  methods: {
    changeTab(val) {
      console.log("val", val);
      if (val == 1) {
        this.profileTab = true;
        this.changePasswordTab = false;
      } else if (val == 2) {
        this.changePasswordTab = true;
        this.profileTab = false;
      }
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
