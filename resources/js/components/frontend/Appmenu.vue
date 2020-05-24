<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/">Home</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <div class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                v-model="productSearch"
              />
            </div>
          </li>
          <!-- <li class="nav-item my-auto ml-3">
            <a to="/login" v-if=" User.length < 0 ">login</a>
            <a href="/logout" v-else>logout</a>
          </li>-->
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      productSearch: ""
    };
  },
  watch: {
    productSearch(newval) {
      this.set_productSearch(newval);
    }
  },
  computed: {
    ...mapGetters(["User"])
  },
  methods: {
    ...mapMutations(["set_productSearch"])
  }
};
</script>

<style scoped>
.navbar {
  position: fixed !important;
  top: 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  z-index: 999;
  width: 100%;
  box-shadow: 4px 5px 5px 6px #e6dbdb40;
  margin-bottom: 12px !important;
  /* padding-bottom: 16px; */
  height: 6em !important;
}

input.form-control.mr-sm-2 {
  width: 500px;
  height: 50px;
  background-color: #ffffff;
}
</style>
