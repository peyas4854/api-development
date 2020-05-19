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
                  {{ reviewData.length }}
                  <span class="h6 ml-2 my-auto">Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-review">
        <div class="card">
          <div class="card-body review-content" v-for="(reviews,i) in reviewData" :key="i">
            <p>{{ reviews.review}}</p>
            <p>By {{ reviews.customer_name}}</p>

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
            <textarea
              type="text"
              class="form-control"
              placeholder="Want to give a review ..."
              v-model="review"
              @keypress.enter="submitReview()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonMethod from "../helper/commonMethods";
import preLoader from "../components/base/preloader";
import { mapGetters } from "vuex";
export default {
  extends: commonMethod,
  components: {
    preLoader
  },
  data() {
    return {
      id: this.$route.params.id,
      reviewData: "",
      review: ""
    };
  },
  computed: {
    ...mapGetters(["User"])
  },
  created() {
    console.log(["product id", this.id], ["user", this.User]);
    this.getreview(
      "http://127.0.0.1:8000/api/products/" + this.id + "/reviews"
    );
  },

  methods: {
    getreview(route) {
      let instance = this;
      instance.preLoader = true;
      instance.axiosGet(
        route,
        function(response) {
          console.log("paici response ", response);
          instance.reviewData = response.data.data;
          const url = "https://dummyimage.com/vga";
        },
        function(response) {
          console.log("paici 2", response);
        }
      );
    },
    submitReview() {
      let instance = this;

      instance.inputField = {
        customer: this.User.name,
        review: this.review,
        star: 3
      };
      console.log("input", instance.inputField);
      instance.postDataMethod(
        "http://127.0.0.1:8000/api/products/" + this.id + "/reviews",
        this.inputField
      );
    },
    postDataSuccess(response) {
      this.review = "";
      console.log("reponse", response);
      this.getreview(
        "http://127.0.0.1:8000/api/products/" + this.id + "/reviews"
      );
    },
    postDataError(error) {
      //this.errors = error.errors;
      console.log("error", error);
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
