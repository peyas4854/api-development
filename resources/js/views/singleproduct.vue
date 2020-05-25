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
                <div class="rating_number">{{ avg_review }}/5</div>
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
      <h2 class="text-left" v-if="lodeMore <= reviewData.length ">
        Total show
        <span class="badge badge-secondary">{{ filterReview.length}}</span>
      </h2>
      <div class="product-review mb-1">
        <div class="card">
          <div class="card-body review-content" v-for="(reviews,i) in filterReview" :key="i">
            <div class="d-flex">
              <p class="flex1">
                <span class="fa fa-star checked" v-for="(star,i) in reviews.star" :key="i"></span>
              </p>
              <p class>{{ reviews.created_at }}</p>
            </div>

            <p>{{ reviews.review}}</p>
            <p>By {{ reviews.user.userName}}</p>
            <div class="mt-2" v-if="User.userType == 'Admin' || User.id ==reviews.user.id ">
              <button type="button" class="btn btn-outline-primary btn-sm mr-2">Edit</button>
              <button type="button" class="btn btn-outline-danger btn-sm">Delete</button>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center p-3" v-if="lodeMore <= reviewData.length ">
        <button @click="lodeMore +=1" class="btn btn-outline-primary btn-lg">Show more</button>
      </div>

      <div class="create-review mb-3">
        <div class="card">
          <div class="card-body">
            <div class="mb-2">
              <label for="description">Review</label>
              <textarea
                type="text"
                class="form-control"
                placeholder="Want to give a review ..."
                v-model="review"
              />
              <p class="errors" v-if="errors.review">{{ errors.review[0] }}</p>
            </div>

            <div class="form-check-inline">
              <label class="form-check-label">Rating:</label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" v-model="star" value="1" /> 1
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" v-model="star" value="2" /> 2
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" v-model="star" value="3" /> 3
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" v-model="star" value="4" /> 4
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" v-model="star" value="5" /> 5
              </label>
            </div>
            <p class="errors" v-if="errors.star">{{ errors.star[0] }}</p>
          </div>

          <div class="card-footer">
            <button type="button" class="btn btn-primary btn-sm" @click="submitReview()">Submit</button>
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
      review: "",
      star: "",
      errors: [],

      lodeMore: 2
    };
  },
  computed: {
    ...mapGetters(["User"]),
    avg_review() {
      let total = this.reviewData.reduce(function(prev, cur) {
        return prev + cur.star;
      }, 0);

      return Math.round(total / this.reviewData.length);
    },

    filterReview() {
      let setLength = 2;
      let totalLength = this.reviewData.slice(0, this.lodeMore);

      console.log("result", totalLength);
      return totalLength;
    }
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
        user_id: this.User.id,
        review: this.review,
        star: this.star
      };
      console.log("input", instance.inputField);
      instance.postDataMethod(
        "http://127.0.0.1:8000/api/products/" + this.id + "/reviews",
        this.inputField
      );
    },
    postDataSuccess(response) {
      this.review = "";
      this.star = "";
      console.log("reponse", response);
      this.getreview(
        "http://127.0.0.1:8000/api/products/" + this.id + "/reviews"
      );
    },
    postDataError(error) {
      this.errors = error.errors;
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
.checked {
  color: orange;
}
</style>
