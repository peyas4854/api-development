
<template>
  <div class="container-fluid">
    <div class="row">
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
          </transition> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "../backend/sidebar";
export default {
  components: {
    sidebar
  }
};
</script>

<style scoped>
.bg-light {
  background-color: #06b4f1d1!important;
  position: fixed;
  width: 100%;
  border: 0px !important;
}
.main-content {
  margin-top: 80px;
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
