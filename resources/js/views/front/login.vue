<template>
  <div>
    <div class="global-container">
      <div class="image-div">
        <img src="img/login/login.jpg" alt class="image" />
      </div>
      <div class="card login-form">
        <div class="card-body">
          <div class="card-text">
            <div>
              <h1>Login</h1>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
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
              <input type="password" class="form-control form-control-sm" v-model="user.password" />
              <!-- <a href="#">Forgot password?</a> -->
              <p class="errors" v-if="errors.password">{{ errors.password[0] }}</p>
            </div>

            <button class="btn btn-primary btn-block" @click="login()">Sign in</button>

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
      console.log("response", response.data);
      location.reload();
      //this.$router.push({ path: "/" });
      //   if (response.status === 200) {
      //     window.reload();
      //     //console.log("response", response.data.data.user);
      //     this.set_User(response.data.data.user);
      //     //this.$router.push({ path: "/" });
      //   }
    },
    postDataError(error) {
      this.errors = error.errors;
      console.log("error", this.errors);
    }
  }
};
</script>

<style scoped lang="scss">
.image-div {
  height: 100vh;
}
.image-div:after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #00020459;
  height: 100%;
  width: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.login-form {
  width: 330px;
  position: absolute !important;
  background-color: transparent !important;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.card-body {
  display: flex;
  flex: inherit;
  background-color: #08010170;
  justify-content: center;
  align-items: center;
  padding: 80px;
}

.card-title {
  font-weight: 300;
  color: #ffffff;
}

.card-text {
  width: 400px;
  h1 {
    text-align: center;
    color: #ffffff;
  }
  .form-group {
    margin-bottom: 20px;
    label {
      color: #ffffff;
    }
    input {
      height: 50px !important;
    }
  }
  .sign-up {
    text-align: center;
    padding: 20px 0 0;
    color: #ffffff;
    a {
      color: #ffffff !important;
    }
  }
  button {
    height: 58px;
    background-color: #0883c5;
    border: none !important;
    border: none;
    transition: 0.3s;
  }
  button:hover {
    background-color: #0cdcb1;
  }
}

.btn {
  font-size: 14px;
  margin-top: 20px;
}

.alert {
  margin-bottom: -30px;
  font-size: 13px;
  margin-top: 20px;
}
</style>
