<template>
  <div>
    <div class="global-container">
      <div class="card login-form">
        <div class="card-body">
          <h3 class="card-title text-center"></h3>
          <div class="card-text">
            <!--
            <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div>-->

            <!-- to error: add class "has-danger" -->
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control form-control-sm"
                id="email"
                v-model="user.email"
              />
              <p class="errors" v-if="errors.email">{{ errors.email[0] }}</p>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <a href="#">Forgot password?</a>
              <input type="password" class="form-control form-control-sm" v-model="user.password" />
              <p class="errors" v-if="errors.password">{{ errors.password[0] }}</p>
            </div>
            <button type="submit" class="btn btn-primary btn-block" @click="login()">Sign in</button>

            <div class="sign-up">
              Don't have an account?
              <a href>Create One</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import commonMethods from "../../helper/commonMethods";
export default {
  extends: commonMethods,
  data() {
    return {
      user: {},
      errors: []
    };
  },
  methods: {
    ...mapMutations(["set_User"]),
    login() {
      let instance = this;
      instance.inputField = this.user;
      instance.postDataMethod("http://127.0.0.1:8000/login", this.inputField);
    },
    postDataSuccess(response) {
      if (response.status === 200) {
        // location.reload();
        //console.log("response", response.data.data.user);
        this.set_User(response.data.data.user);
        this.$router.push({ path: "/" });
      }
    },
    postDataError(error) {
      this.errors = error.errors;
      console.log("error", this.errors);
    }
  }
};
</script>

<style scoped>
.global-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  padding-top: 10px;
  font-size: 14px;
  margin-top: 30px;
}

.card-title {
  font-weight: 300;
}

.btn {
  font-size: 14px;
  margin-top: 20px;
}

.login-form {
  width: 330px;
  margin: 20px;
}

.sign-up {
  text-align: center;
  padding: 20px 0 0;
}

.alert {
  margin-bottom: -30px;
  font-size: 13px;
  margin-top: 20px;
}
</style>
