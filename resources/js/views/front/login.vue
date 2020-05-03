<template>
  <div>
    <div class="global-container">
      <div class="card login-form">
        <div class="card-body">
          <h3 class="card-title text-center">Log in to Codepen</h3>
          <div class="card-text">
            <!--
            <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div>-->
            <form>
              <!-- to error: add class "has-danger" -->
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control form-control-sm" id="email" v-model="user.name"/>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <a href="#">Forgot password?</a>
                <input type="password" class="form-control form-control-sm" v-model="user.password"/>
              </div>
              <button type="submit" class="btn btn-primary btn-block">Sign in</button>

              <div class="sign-up">
                Don't have an account?
                <a href="">Create One</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
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
