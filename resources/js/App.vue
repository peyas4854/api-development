<template>
  <div>
    <h3>app vue</h3>
    <router-view />
  </div>
</template>
<script>
import adminlayout from "./components/layouts/AdminLayout";
import frontlayout from "./components/layouts/FrontLayout";
export default {
  props: ["user"],
  components: {
    adminlayout,
    frontlayout
  },
  created() {
    console.log("props", this.user);
    this.$store.commit("set_User", this.user);
  }
};
</script>

<style>
</style>
