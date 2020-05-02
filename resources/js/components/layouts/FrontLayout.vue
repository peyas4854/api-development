
<template>
  <div>
    <Appmenu />

    <div class="container content-body">
      <div class="row">
        <div class="col-md-9">
          <router-view></router-view>
        </div>

        <div class="col-md-3"><sidebar/></div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "../frontend/Appsidebar";
import Appmenu from "../frontend/Appmenu";
export default {
  components: {
    sidebar,
    Appmenu
  }
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
  z-index: 999;
}
.bg-light:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.main-content {
  margin-top: 80px;
  padding: 0px 15px;
}
.card-body {
  border-bottom: 1px solid #d3d3daf3 !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
