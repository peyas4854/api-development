<template>
  <div class="sidebar_app">
    <div class="logo_div">
      <img src="/img/logo/logo.png" alt class="logo" />
    </div>
    <ul class="nav flex-column">
      <li class="nav-item">
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
        <router-link
          :class="[this.$route.path == '/user' ? 'active_sidebar' : '', 'nav-link' ]"
          to="/user"
        >User</router-link>
      </li>
      <li class="nav-item">
        <router-link
          :class="[this.$route.path == '/calendar' ? 'active_sidebar' : '', 'nav-link' ]"
          to="/calendar"
        >Calendar</router-link>
      </li>
      <li class="nav-item">
        <router-link
          :class="[this.$route.path == '/schedule' ? 'active_sidebar' : '', 'nav-link' ]"
          to="/schedule"
        >Schudule</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Settings</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/logout">Logout</a>
      </li>
    </ul>
  </div>
</template>

<script>
import commonMethods from "../../helper/commonMethods";
export default {
  extends: commonMethods
};
</script>

<style scoped lang="scss">
</style>
