<template>
  <div>
    <h1>app home</h1>

    <p>{{ user }}</p>
  </div>
</template>

<script>
//import { mapMutations } from "vuex";
export default {
  props: ["user"],
  created() {
    console.log("user", this.user);
    this.$store.commit("set_User", this.user);
  }
};
</script>

<style>
</style>
