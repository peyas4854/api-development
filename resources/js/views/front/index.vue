<template>
  <div>
    <div class="row">
      <div class="col-md-4" v-for="(products,i) in product" :key="i">
        <router-link :to="{ name: 'singleproduct', params: { id: products.id }}">
          <div class="card">
            <img :src="products.img" alt="Denim Jeans" />
            <h1>{{ products.name }}</h1>
            <p class="price">${{ products.price }}</p>
            <div class="rating">
              <span class="fa fa-star checked" v-for="(rating,i) in products.avg_rating" :key="i"></span>
            </div>

            <button>Add to Cart</button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: [
        {
          id: 1,
          name: "lorem",
          avg_rating: 2,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0o5Y9SQQWrmzd0s7euMYFmgtmxYOBE6Srb7JqcPAHYBzFfDZS&usqp=CAU",
          button_text: "click here",
          price: 1900,
          discount: 2
        },
        {
          id: 2,
          name: "lorem",
          avg_rating: 4,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0o5Y9SQQWrmzd0s7euMYFmgtmxYOBE6Srb7JqcPAHYBzFfDZS&usqp=CAU",
          button_text: "click here",
          price: 1200,
          discount: 3
        }
      ]
    };
  }
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
.checked {
  color: orange;
}
</style>