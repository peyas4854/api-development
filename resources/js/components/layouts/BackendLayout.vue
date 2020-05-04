
<template>
  <div class="container-fluid">
    <div class="row" >
      <div class="col-md-2 p-0">
        <sidebar />
      </div>
      <div class="col-md-10 content-body p-0">
        <div class="card bg-light text-dark">
          <div class="card-body">Light card</div>
        </div>
        <div class="main-content">
          <router-view />
          <!-- <transition name="fade">
          </transition>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "../backend/sidebar";
import commonMethod from "../../helper/commonMethods";
export default {
  extends: commonMethod,
  components: {
    sidebar
  },
  created() {
    console.log("backloayout", this.isLoggedIn);
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
