<template>
  <div class="signup">
    <div
      class="pnf-container relative p-y-60 v-center bg-img"
      style="background-image: url(../assets/images/signup2.jpg)"
    >
      <div class="overlay-lighter"></div>
      <div class="container p-y-70">
        <div class="m-x-auto" style="max-width: 500px">
          <div class="card mb-15" data-aos="fade-up" data-aos-delay="200">
            <div class="card-body p-x-25">
              <form v-on:submit.prevent="submit()" class="needs-validation" id="register-form3" novalidate="novalidate">
                <ul>
                  <li class="text-danger" v-for="error in errors" v-bind:key="error">
                    {{ error }}
                  </li>
                </ul>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="newUserParams.first_name"
                    placeholder="First Name"
                    style="font-family: 'Font Awesome 5 Free', sans-serif !important; font-weight: 400"
                    required=""
                  />
                </div>
                <!-- / form-group -->
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="newUserParams.last_name"
                    placeholder="Last Name"
                    style="font-family: 'Font Awesome 5 Free', sans-serif !important; font-weight: 400"
                    required=""
                  />
                </div>
                <!-- / form-group -->
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="newUserParams.username"
                    placeholder="Username"
                    style="font-family: 'Font Awesome 5 Free', sans-serif !important; font-weight: 400"
                    required=""
                  />
                </div>
                <!-- / form-group -->
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    v-model="newUserParams.email"
                    placeholder="Email"
                    style="font-family: 'Font Awesome 5 Free', sans-serif !important; font-weight: 400"
                    required=""
                  />
                </div>
                <!-- / form-group -->
                <div class="form-group">
                  <input
                    type="Zipcode"
                    class="form-control"
                    v-model="newUserParams.zip_code"
                    placeholder="Zip Code"
                    style="font-family: 'Font Awesome 5 Free', sans-serif !important; font-weight: 400"
                    required=""
                  />
                </div>
                <!-- / form-group -->
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    v-model="newUserParams.password"
                    placeholder="Password"
                    style="font-family: 'Font Awesome 5 Free', sans-serif !important; font-weight: 400"
                    required=""
                  />
                </div>
                <!-- / form-group -->
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    v-model="newUserParams.password_confirmation"
                    placeholder="Confirm Password"
                    style="font-family: 'Font Awesome 5 Free', sans-serif !important; font-weight: 400"
                    required=""
                  />
                </div>
                <!-- / form-group -->

                <div class="col-12">
                  <button type="submit" class="btn btn-primary btn-block w-100">
                    <i class="fas fa-user-plus mr-5"></i>
                    Sign Up
                  </button>
                </div>
                <!-- / row -->
              </form>
              <!-- / register-form -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>First Name:</label>
        <input type="text" class="form-control" v-model="newUserParams.first_name" />
      </div>
      <div class="form-group">
        <label>Last Name:</label>
        <input type="text" class="form-control" v-model="newUserParams.last_name" />
      </div>
      <div class="form-group">
        <label>Username:</label>
        <input type="text" class="form-control" v-model="newUserParams.username" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="newUserParams.email" />
      </div>
      <div class="form-group">
        <label>Zipcode:</label>
        <input type="text" class="form-control" v-model="newUserParams.zip_code" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="newUserParams.password" />
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input type="password" class="form-control" v-model="newUserParams.password_confirmation" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
