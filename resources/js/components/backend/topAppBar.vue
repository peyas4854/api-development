<template>
  <div>
    <div class="card bg-light text-dark">
      <div class="card-body">
        <!-- <p class="flex1 p-0 my-auto">Dashboard</p> -->
        <div class="flex1 my-auto">
          <ul class="nav right_item">
            <li class="nav-item my-auto">
             
                <select class="form-control" v-model="lang" @change="handleChange($event)">
                  <option value="en">English</option>
                  <option value="ru">Russian</option>
                </select>
             
            </li>
            <li class="nav-item my-auto">
              <a class="nav-link position-relative" href="#">
                <i class="fa fa-envelope icon_top_bar"></i>
                <span class="badge badge-pill badge-danger icon_number">5</span>
              </a>
            </li>
            <li class="nav-item my-auto">
              <a class="nav-link position-relative" href="#">
                <i class="fa fa-tasks icon_top_bar"></i>
                <span class="badge badge-pill badge-warning icon_number">4</span>
              </a>
            </li>
            <li class="nav-item my-auto">
              <a class="nav-link position-relative" href="#">
                <i class="fa fa-bell icon_top_bar"></i>
                <span class="badge badge-pill badge-danger icon_number">5</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle position-relative"
                id="avatarDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                type="button"
              >
                <img :src="'/img/'+User.image" alt="avatar" class="avatar" />
                <div class="dropdown-menu" aria-labelledby="avatarDropdown">
                  <div class="ticker"></div>
                  <ul class="list-group">
                    <li class="list-group-item">
                      <router-link :to="{ name: 'profile', params: { id: User.id }}" class>
                        <i class="fa fa-user pr-1"></i>
                        Profile
                      </router-link>
                    </li>
                    <li class="list-group-item" @click="logout()">
                      <i class="fa fa-sign-out pr-1"></i>
                      logout
                    </li>
                  </ul>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import commonMethods from "../../helper/commonMethods";
export default {
  extends: commonMethods,
  computed: {
    ...mapGetters(["User"]),
  },
  data(){
    return{
    lang: localStorage.getItem('lang')||'en',
    }
  },

  created() {
    // console.log("top ap bar", this.User);
  },
  methods: {
    toogle() {
      this.$hub.$emit("emitToogle");
    },
    logout() {
      this.axiosGet(
        "http://127.0.0.1:8000/logout",
        function (response) {
          console.log("paici response ", response.status);
          if (response.status === 200) {
            // this.$router.push({
            //   path: "/login"
            // });
            location.reload();
          }
        },
        function (response) {
          console.log("paici 2", response);
        }
      );
    },
    handleChange(event){
      console.log('lang',event.target.value);
      localStorage.setItem('lang',event.target.value)
      //window.location.reload();
      location.reload();

    }
  },
};
</script>

<style scoped>
.bg-light {
  background-color: #06d0f1f2 !important;
  position: fixed;
  width: 100%;
  border: 0px !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  z-index: 9;
}
.bg-light:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.card-body {
  border-bottom: 1px solid #d3d3daf3 !important;
  display: flex;
  padding: 0px 50px;
  height: 70px;
}
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.image {
  position: relative;
  left: 10em;
}
.slider_icon {
  position: relative;
  top: 24px;
  right: 24px;
  font-size: 22px !important;
}
.icon_top_bar {
  font-size: 18px;
  color: #ffffff;
}
.dropdown-menu.show {
  display: block;
  position: absolute !important;
  left: -10px !important;
  padding: 0px;
}

.ticker {
  position: absolute;
  right: 44px;
  top: -8px;
  width: 1.1em;
  height: 1.1em;
  border-radius: 0em 0em 0.5em 0em;
  transform: rotate(225deg);
  background: linear-gradient(-45deg, #ffffff 50%, transparent 50%);
}
.icon_number {
  position: absolute;
  top: 0px;
  right: 4px;
}
.right_item {
  float: right;
}
</style>
