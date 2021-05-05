<template>
  <div class="main_wrapper">
    <div class="main_wrapper_top_header">
      <div class="header_content my-auto">
        <h4>Product</h4>
      </div>
      <div class="header_content_button">
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

    <div class="main_wrapper_card_content">
      <datatable :dataset="dataset" />
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
        //same as data from server
        headers: ["Name", "Price", "Discount", "Stock"],
        colums: [
          { title: " Name", key: "name", type: "text" },
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
</style>
