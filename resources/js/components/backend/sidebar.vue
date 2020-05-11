<template>
  <div class="sidebar_app">
    <div class="logo_div">
      <img src="img/logo/logo.png" alt class="logo" />
    </div>
    <ul class="nav flex-column">
      <li class="nav-item">
        <!-- <router-link class="nav-link" to="/">Dashboard</router-link> -->
        <router-link
          :class="[this.$route.path == '/' ? 'active_sidebar' : '', 'nav-link' ]"
          to="/"
        >Dashboard</router-link>
      </li>
      <li class="nav-item">
        <router-link
          :class="[this.$route.path == '/product' ? 'active_sidebar' : '', 'nav-link' ]"
          to="/product"
        >Product</router-link>
      </li>
      <li class="nav-item">
        <router-link
          :class="[this.$route.path == '/review' ? 'active_sidebar' : '', 'nav-link' ]"
          to="/review"
        >Review</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/logout">Logout</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Settings</a>
      </li>
    </ul>
  </div>
</template>

<script>
import commonMethods from "../../helper/commonMethods";
export default {
  extends: commonMethods,
  methods: {
    logout() {
      this.axiosGet(
        "http://127.0.0.1:8000/logout",
        function(response) {
          console.log("paici response ", response.status);
          if (response.status === 200) {
            this.$router.push({
              path: "/login"
            });
          }
        },
        function(response) {
          console.log("paici 2", response);
        }
      );
    }
  }
};
</script>

<style scoped lang="scss">
img.logo {
  width: 80px;
  height: 69px;
}
.logo_div {
  border-bottom: 1px solid #ece5e51a;
  text-align: center;
}
.sidebar_app {
  background-color: #505463;
  position: fixed;
  width: 182px !important;
  height: 100vh !important;
  z-index: 99 !important;
}
.nav-link {
  display: block;
  padding: 25px;
  margin-bottom: 8px;
  text-align: center;
  transition: 0.3s;
  background-color: red;
  /* color: blue!important; */
  /* background-color: #312b2b!important; */
}
a {
  color: #ffffff !important;
  font-family: Roboto;
  font-size: 15px;
}
.active_sidebar {
  color: #00ffc4 !important;
}
.nav-item:hover {
  a {
    color: #00ffc4 !important;
  }
}
</style>
