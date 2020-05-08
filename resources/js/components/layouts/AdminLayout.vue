
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 p-0">
        <sidebar />
      </div>
      <div class="col-md-10 content-body p-0">
        <appbar />
        <div class="main-content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "../backend/sidebar";
import appbar from "../../components/backend/topappBar";

export default {
  components: {
    sidebar,
    appbar
  }
};
</script>

<style scoped>
</style>
