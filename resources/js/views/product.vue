<template>
  <div class="main_wrapper">
    <div>
      <div class="top_wrapper">
        <div class="top_wrapper_header">
          <h3 class="p-0 top_wrapper_header_content">Product</h3>
        </div>
        <div class="top_wrapper_button">
          <button
            class="btn btn-primary app_primary_btn"
            data-toggle="modal"
            data-target="#add-edit-modal"
            @click="addEdit('')"
          >Add</button>
        </div>
      </div>

      <div class="modal fade" id="add-edit-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <productmodal
            class="modal-content"
            v-if="isActive"
            :id="selectedItemId"
            :modalID="modalID"
            ref="vuemodal"
          ></productmodal>
        </div>
      </div>
      <!-- <div v-if="preLoader == true">
        <preloader />
      </div>-->
      <div class="table_wrapper">
        <!-- <table class="table">
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
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  data-toggle="modal"
                  data-target="#add-edit-modal"
                  @click="addEdit(products.id)"
                >Edit</button>
                <button type="button" class="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>-->
        <datatable :dataset="dataset" />
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
      modalID: "#add-edit-modal",
      dataset: {
        source: "http://127.0.0.1:8000/api/products",
        headers: [
          "Product name",
          "Price",
          "Discount",
          "Stock",
          "Created By",
          "Action"
        ],
        colums: [
          { title: " Product name", key: "name", type: "text" },
          { title: " Price", key: "price", type: "text" },
          { title: " Discount", key: "discount", type: "text" },
          { title: " Stock", key: "stock", type: "text" },
          { title: " Created By", key: "created_by", type: "text" },
          { title: " Action", key: "action", type: "component" }
        ]
      }
    };
  },
  mounted() {
    let instance = this;
    this.$hub.$on("addEdit", function(id) {
      instance.addEdit(id);
    });
    this.modalCloseAction(this.modalID);
    this.$hub.$on("deleteMethod", function(id) {
      console.log("delete route", id);
      instance.axiosDelete("http://127.0.0.1:8000/api/products/" + id);
    });
  },
  created() {
    //this.getProduct("http://127.0.0.1:8000/api/products");
    //this.setPreloader(true);
  },
  methods: {
    getProduct(route) {
      let instance = this;
      instance.axiosGet(
        route,
        function(response) {
          //console.log("paici response ", response);
          instance.product = response.data.data;
          instance.message = response.data.message;
          instance.setPreloader(false);
        },
        function(response) {
          // console.log("paici 2", response);
          instance.setPreloader(true);
        }
      );
    }
  }
};
</script>

<style scoped>
.main_wrapper {
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
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
