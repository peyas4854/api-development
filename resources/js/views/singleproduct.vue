<template>
  <div>
    <preLoader v-if="preLoader ==true" />
    <div v-else>
      <div class="image">
        <img src="https://dummyimage.com/vga" class="figure-img img-fluid rounded" alt="image" />
      </div>
      <div class="rating-div mb-3">
        <div class="card">
          <div class="card-body">
            <h3>Rating</h3>
            <div class="top d-flex flex-row">
              <div class="flex1">
                <div class="rating_number">3.5/5</div>
              </div>
              <p class="flex2">name</p>
              <div class="flex1">
                <div class="rating_number">
                  120
                  <span class="h5 ml-2 my-auto">Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-review">
        <div class="card">
          <div class="card-body review-content" v-for="(reviews,i) in review" :key="i">
            <p>{{ reviews.review}}</p>
            <p>{{ reviews.customer_name}}</p>

            <div class="d-flex">
              <p class="flex1">rating</p>
              <p class>{{ reviews.created_at }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="create-review">
        <div class="card">
          <div class="card-body">
            <label for="description">Review</label>
            <textarea type="text" class="form-control" placeholder="Description" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonMethod from "../helper/commonMethods";
import preLoader from "../components/base/preloader";

export default {
  extends: commonMethod,
  components: {
    preLoader
  },
  data() {
    return {
      id: this.$route.params.id,
      review: ""
    };
  },
  created() {
    console.log("id", this.id);
    this.getreview(
      "http://127.0.0.1:8000/api/products/" + this.id + "/reviews"
    );
  },

  methods: {
    getreview(route) {
      //console.log("df");
      let instance = this;
      instance.preLoader = true;
      instance.axiosGet(
        route,
        function(response) {
          console.log("paici response ", response);
          instance.review = response.data.data;
          const url = "https://dummyimage.com/vga";
        },
        function(response) {
          console.log("paici 2", response);
        }
      );
    }
  }
};
</script>

<style scoped>
.flex1 {
  flex: 1;
}
.flex2 {
  flex: 2;
}
.card-body.review-content {
  border-bottom: 1px solid black;
}
.rating_number {
  height: rem;

  padding: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 600;
  font-family: Roboto;
  color: #02000a;
}
</style>
