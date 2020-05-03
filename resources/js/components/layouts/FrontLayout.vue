
<template>
  <div>
    <Appmenu />

    <div class="container content-body">
      <div class="row">
        <div class="col-md-9 pl-0">
          <router-view></router-view>
        </div>

        <div class="col-md-3 pr-0"><sidebar/></div>
      </div>
    </div>
<Appfooter/>
  </div>
</template>

<script>
import sidebar from "../frontend/Appsidebar";
import Appmenu from "../frontend/Appmenu";
import Appfooter from "../frontend/Appfooter";
export default {
  components: {
    sidebar,
    Appmenu,
Appfooter
  }
};
</script>

<style scoped>
.content-body{
background-color: #ffffff40;
}
</style>
