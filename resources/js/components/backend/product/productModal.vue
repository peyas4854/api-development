<template>
  <div class="">
    <!-- Modal Header -->
    <div class="modal-header">
      <h4 class="modal-title">Add Product</h4>
      <!-- <button type="button" class="close" data-dismiss="modal">&times;</button> -->
    </div>

    <!-- Modal body -->
    <div class="modal-body">
 <div v-if="preLoader == true">
      <preloader />
    </div>
      <form v-else>
        <div class="row">
          <div class="col-md-6 from_group col-sm-12">
            <label for="name">Name</label>
            <input type="text" class="form-control" placeholder="Name" v-model="product.name" />
            <p class="errors" v-if="errors.name" > {{ errors.name[0] }}</p>
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

    <!-- Modal footer -->
    <div class="modal-footer">
      <button class="btn btn-primary app_primary_btn" @click="save()">Save</button>
      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
    </div>
  </div>
</template>

<script>
import commonMethods from "../../../helper/commonMethods";
export default {
  extends: commonMethods,
  data() {
    return {
      product: {
        user_id: 1
      },
      errors:[],
        modalID:'#productModal',
    };
  },
  created() {
   // console.log('modal active',this.isActive);
  },
  methods: {
    save() {
        this.preLoader=false;
      this.inputField = this.product;
      console.log(this.inputField);
      axios
        .post("http://127.0.0.1:8000/api/products", this.inputField)
        .then(response => {
          console.log(response.data);

        })
        .catch(error => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
            console.log(typeof( this.errors))
        });
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
