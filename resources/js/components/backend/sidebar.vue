<template>
  <div class="sidebar_app">
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Dashboard</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/product">Product</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/review">Review</router-link>
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
            this.$router.push({ path: "/login" });
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
.sidebar_app {
  background-color: #02071ba3;
  position: fixed;
  width: 16.7% !important;
  height: 100vh !important;
}
.nav-link {
  display: block;
  padding: 15px 0px;
  text-align: center;
  transition: 0.3s;
}
a {
  color: #ffffff !important;
  font-family: Roboto;
  font-size: 15px;
}
.nav-item:hover {
  background-color: #ffffff;

  a {
    color: black !important;
  }
}
</style>
