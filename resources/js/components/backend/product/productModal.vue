<template>
  <div class>
    <div class="modal-header">
      <h4 class="modal-title" v-if="id">Edit Product {{ id }}</h4>
      <h4 class="modal-title" v-else>Add Product</h4>
      <button type="button" class="close" data-dismiss="modal" @click.prevent>&times;</button>
    </div>
    <div class="modal-body">
      <div class="alert alert-success">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong>{{ setMessage }}!</strong>
      </div>
      <div v-if="preLoader == true">
        <preloader />
      </div>
      <form v-else>
        <div class="row">
          <div class="col-md-6 from_group col-sm-12">
            <label for="name">Name</label>
            <input type="text" class="form-control" placeholder="Name" v-model="product.name" />
            <p class="errors" v-if="errors.name">{{ errors.name[0] }}</p>
          </div>
          <div class="col-md-6 from_group col-sm-12">
            <label for="price">Price</label>
            <input type="number" class="form-control" placeholder="Price" v-model="product.price" />
            <p class="errors" v-if="errors.price">{{ errors.price[0] }}</p>
          </div>
          <div class="col-md-12 from_group col-sm-12">
            <label for="description">Description</label>
            <textarea
              type="text"
              class="form-control"
              placeholder="Description"
              v-model="product.detail"
              rows="3"
            />
            <p class="errors" v-if="errors.detail">{{ errors.detail[0] }}</p>
          </div>
          <div class="col-md-6 from_group col-sm-12">
            <label for="discount">Discount</label>
            <input
              type="number"
              class="form-control"
              placeholder="Discount"
              v-model="product.discount"
            />
            <p class="errors" v-if="errors.discount">{{ errors.discount[0] }}</p>
          </div>
          <div class="col-md-6 from_group col-sm-12">
            <label for="stock">Stock</label>
            <input type="number" class="form-control" placeholder="Price" v-model="product.stock" />
            <p class="errors" v-if="errors.stock">{{ errors.stock[0] }}</p>
          </div>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary app_primary_btn" @click="save()">Save</button>
      <button type="button" class="btn btn-danger" data-dismiss="modal" @click.prevent>Close</button>
    </div>
  </div>
</template>

<script>
import commonMethods from "../../../helper/commonMethods";
export default {
  extends: commonMethods,
  //   props: {
  //     id: {
  //       type: Number,
  //       required: false
  //     },
  //     modalID: {
  //       type: String,
  //       required: false
  //     }
  //   },
  props: ["id", "modalID"],
  data() {
    return {
      product: {
        user_id: 1
      },
      errors: []
    };
  },
  mounted() {

    let instance = this;
    $("#add-edit-modal").on("hidden.bs.modal", function() {
      instance.isActice = false;
      console.log("modal close");
    });
  },
  created() {
    console.log("modal active", this.modalID);
    console.log("modal created");
    if (this.id) {
      this.getProduct("http://127.0.0.1:8000/api/products/" + this.id);
    }
  },
  methods: {
    save() {
      let instance = this;
      instance.inputField = instance.product;
      instance.postDataMethod(
        "http://127.0.0.1:8000/api/products",
        this.inputField
      );
    },
    postDataSuccess(response) {
      this.product = {};
      console.log("postDataSuccess", response);
      this.message = response.data.message;
      $(this.modalID).modal("hide");
      this.modalCloseAction(this.modalID);
      (this.errors = []), console.log("message", this.message);
    },
    postDataError(error) {
      console.log("postDataError", error);
      this.errors = error.errors;
    },
    getProduct(route) {
      //console.log("df");
      let instance = this;
      instance.preLoader = true;
      instance.axiosGet(
        route,
        function(response) {
          //console.log("paici response ", response);
          instance.product = response.data.data;
          // instance.message = response.data.message;
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
.modal-header {
  background-color: #4f96e6;
  color: #ffffff !important;
}
.from_group {
  margin-bottom: 10px;
}
.errors {
  color: red;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
}
</style>
