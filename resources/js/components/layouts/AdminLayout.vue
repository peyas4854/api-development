
<template>
  <div>
    <!-- <div class="row">
      <div class="col-md-2 p-0">
        <sidebar />
      </div>
      <div class="col-md-10 content-body p-0">
        <appbar />
        <div class="main-content">
          <router-view />
        </div>
      </div>
    </div>-->
    <div class="d-flex">
      <aside :class="{ active: active}">
        <sidebar />
      </aside>
      <div id="app-main">
        <appbar />
        <div class="container-fluid p-0">
          <div :class="[active == true ? 'content-body' : 'container_mr_0', 'nav-link' ]">
            <div class="row">
              <div class="col-md-12 p-0">
                <div class="main-content">
                  <i class="fa fa-bars" @click="toogle()"></i>
                  <p class="p-0 my-auto page_header">Dashboard</p>

                  <router-view />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "../backend/sidebar";
import appbar from "../../components/backend/topappBar";

export default {
  data() {
    return {
      active: true
    };
  },
  components: {
    sidebar,
    appbar
  },
  mounted() {},
  methods: {
    toogle() {
      this.active = !this.active;

      console.log("value", this.active);
    }
  }
};
</script>

<style scoped lang="scss">
aside {
  //   width: 200px;
  height: 100vh;
  display: none;
}

.active {
  display: block;
}

#app-main {
  display: contents;
}
.content-body {
  margin-left: 185px;
}
.container_mr_0 {
  margin-left: 0px !important;
}
i.fa.fa-bars {
  position: fixed;
  top: 23px;
  font-size: 22px;
  cursor: pointer;
  z-index: 99;
}
.page_header {
  position: fixed;
  top: 22px;
  left: 18em;
  z-index: 9;
}
</style>
