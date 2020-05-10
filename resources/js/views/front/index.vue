<template>
  <div>
    <preloader v-if="preLoader == true " />
    <div class="row" v-else>
      <div class="col-md-4 pr-0" v-for="(products,i) in filterProduct" :key="i">
        <div class="single-poduct">
          <router-link :to="{ name: 'singleproduct', params: { id: products.id }}">
            <div class="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0o5Y9SQQWrmzd0s7euMYFmgtmxYOBE6Srb7JqcPAHYBzFfDZS&usqp=CAU"
                alt="Denim Jeans"
              />
              <h4>{{ products.name }}</h4>
              <p class="price">${{ products.price }}</p>
              <div class="rating">
                <span class="fa fa-star checked" v-for="(rating,i) in products.avg_rating" :key="i"></span>
              </div>

              <button>Add to Cart</button>
            </div>
          </router-link>
        </div>
      </div>
      <div v-if="filterProduct.length == 0" class="col-md-12">
        <h4 class="no_match">Ops! No Match found | Try Again</h4>
      </div>
    </div>
  </div>
</template>

<script>
import commonMethod from "../../helper/commonMethods";
import preloader from "../../components/base/preloader";
import { mapGetters } from "vuex";
export default {
  extends: commonMethod,
  conponents: {
    preloader
  },
  data() {
    return {
      preLoader: true,
      product: ""
    };
  },
  created() {
    this.getProduct("http://127.0.0.1:8000/api/products/");
  },
  computed: {
    filterProduct() {
      if (this.productSearchBy !== "") {
        console.log(typeof this.product);
        console.log("val", this.productSearchBy);
        return this.product.filter(c =>
          c.name
            .toLowerCase()
            .includes(this.productSearchBy.trim().toLowerCase())
        );
        console.log("result", result);
      } else {
        return this.product;
      }
    },
    ...mapGetters(["productSearchBy"])
  },
  methods: {
    getProduct(route) {
      let instance = this;
      instance.axiosGet(
        route,
        function(response) {
          console.log("paici response ", response);
          instance.product = response.data.data;
          //instance.message = response.data.message;
          //instance.setPreloader(false);
        },
        function(response) {
          console.log("paici 2", response);
          // instance.setPreloader(true);
        }
      );
    },
    test() {}
  }
};
</script>

<style scoped>
.single-poduct {
  margin-bottom: 20px;
}
.single-poduct:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

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
a:hover {
  text-decoration: none;
}
.no_match {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
}
</style>
