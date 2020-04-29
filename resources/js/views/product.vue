<template>
  <div class="main_wrapper">

    <div v-if="preLoader == true">
      <preloader />
    </div>
    <div v-else>
      <div class="alert alert-success">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong>{{ message }}!</strong>
      </div>
      <div class="top_wrapper">
        <div class="top_wrapper_header">
          <h3 class="p-0 top_wrapper_header_content">Product</h3>
        </div>
        <div class="top_wrapper_button">
          <button class="btn btn-primary app_primary_btn" @click="addModal()">Add</button>
        </div>
      </div>
      <div class="modal_wrapper">
        <!-- <productmodal/> -->
        <div class="modal fade" id="productModal" role="dialog" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <productmodal class="modal-content"  />
          </div>
        </div>
      </div>

      <div class="table_wrapper">
        <table class="table">
          <thead>
            <tr>
              <th>Product name</th>
              <th>Price</th>

              <th>Discount</th>
              <th>Stock</th>
              <th>Created user</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-for="products in product" :key="products.id">
            <tr>
              <td>{{ products.name }}</td>
              <td>{{ products.price }}</td>

              <td>{{ products.discount }}</td>
              <td>{{ products.stock }}</td>
              <td>{{ products.created_by }}</td>
              <td>
                <button type="button" class="btn btn-primary btn-sm">Edit</button>
                <button type="button" class="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import productmodal from "../components/backend/product/productModal";
import commonMethod from "../helper/commonMethods";
export default {
  extends: commonMethod,
  components: {
    productmodal,
    commonMethod
  },
  data() {
    return {
      product: "",
      message: "",
      preLoader: true
    };
  },
  created() {
    this.getProduct("http://127.0.0.1:8000/api/products");
  },
  methods: {
    addModal() {
      $("#productModal").modal("toggle");
    },
    getProduct(route) {
      //console.log("df");
      let instance = this;
      instance.axiosGet(
        route,
        function(response) {
          //console.log("paici response ", response);
          instance.product = response.data.data;
          instance.message = response.data.message;
          instance.preLoader = false;
        },
        function(response) {
         // console.log("paici 2", response);
            instance.preLoader = true;
        }
      );
    }
  }
};
</script>

<style scoped>
.main_wrapper {
    background-color: #ffffff;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.2);
}
.top_wrapper {
  padding: 10px 22px;
  height: 60px;
  background-color: #0e77e0a1 !important;
}
.top_wrapper_header {
  float: left;
}
.top_wrapper_button {
  float: right;
}
.top_wrapper_header_content {
  color: #ffffff;
}
</style>
