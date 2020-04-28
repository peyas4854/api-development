<template>
  <div class="main_wrapper">
    <div class="top_wrapper">
      <div class="top_wrapper_header">
        <h3 class="p-0 top_wrapper_header_content">Product</h3>
      </div>
      <div class="top_wrapper_button">
        <button class="btn btn-primary">button</button>
      </div>
    </div>

<div class="table_wrapper">
<table class="table">
    <thead>
      <tr>
        <th>Product name </th>
        <th>Price</th>
        <th>Description</th>
        <th>Discount</th>
        <th>Stock</th>
        <th>Created user</th>
      </tr>
    </thead>
    <tbody v-for="products in product" :key="products.id">
      <tr>
        <td>{{ products.name }}</td>
        <td>{{ products.price }}</td>
        <td>{{ products.description }}</td>
        <td>{{ products.discount }}</td>
        <td>{{ products.stock }}</td>
        <td>{{ products.created_by }}</td>

      </tr>

    </tbody>
  </table>
</div>
  </div>
</template>

<script>
export default {
data(){
return{
product:'',
}
},
created(){
console.log('product');
this.allProduct();
},
methods:{
allProduct(){
    let vm = this;
console.log('all product');
axios.get('http://127.0.0.1:8000/api/products')
  .then(function (response) {
    // handle success
    console.log(response.data.data);
    vm.product = response.data.data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

}

};
</script>

<style scoped>
.main_wrapper {
background-color: #ffffff;
}
.top_wrapper {
  padding: 10px 22px;
  height: 60px;
  background-color: #0e77e0a1!important;

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
