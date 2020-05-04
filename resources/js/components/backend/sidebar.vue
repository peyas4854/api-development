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
        <a class="nav-link" href="#">Settings</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="logout()">Logout</a>
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
      this.postDataMethod("http://127.0.0.1:8000/logout");
    }
  }
};
</script>

<style scoped>
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
}
a {
  color: #ffffff;
  text-decoration: none;
  background-color: transparent;

  font-size: 20px;
}
</style>
