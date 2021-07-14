<template>
  <div class="login">
    <div
      class="pnf-container relative p-y-60 v-center bg-img"
      style="background-image: url(../assets/images/blur-light.jpg)"
    >
      <div class="container p-y-70">
        <div class="m-x-auto" style="max-width: 500px">
          <div class="card mb-15" data-aos="fade-up" data-aos-delay="200">
            <div class="card-body p-x-25">
              <div class="tab-content">
                <form v-on:submit.prevent="submit()" class="needs-validation" id="login-form3" novalidate="novalidate">
                  <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                  </ul>
                  <div class="form-group">
                    <input
                      type="email"
                      label="Email"
                      v-model="email"
                      class="form-control"
                      placeholder="Email"
                      style="font-family: 'Font Awesome 5 Free', sans-serif !important; font-weight: 400"
                      required=""
                    />
                  </div>
                  <!-- / form-group -->

                  <div class="form-group mb-10">
                    <input
                      type="password"
                      v-model="password"
                      class="form-control"
                      placeholder="Password"
                      style="font-family: 'Font Awesome 5 Free', sans-serif !important; font-weight: 400"
                      required=""
                    />
                  </div>
                  <!-- / form-group -->

                  <div class="row v-center mt-20">
                    <div class="col-12 mb-25">
                      <div class="checkbox checkbox-primary ml-10">
                        <label class="hidden"><input type="checkbox" /></label>
                        <input id="checkbox-login2" type="checkbox" />
                        <label for="checkbox-login2"><span>Remember Me</span></label>
                      </div>
                      <!-- / checkbox -->
                    </div>
                    <!-- / column -->
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary btn-block w-100">
                        <i class="fas fa-sign-in-alt mr-5"></i>
                        Sign In
                      </button>
                    </div>
                    <!-- / column -->
                  </div>
                  <!-- / row -->
                </form>
                <!-- / login-form -->
                <div class="mt-50 p-20 bg-white-glass rounded-sm raised-sm">
                  <p class="mb-0">
                    Don't have an account?
                    <router-link to="/signup">Sign Up</router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- / card-body -->
        </div>
        <!-- / card -->
      </div>
    </div>
    <!-- / container -->

    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push(`/products`);
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
