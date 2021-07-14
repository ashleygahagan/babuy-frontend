<template>
  <div class="home">
    <header
      class="pt-0 lg bg-img jarallax"
      data-jarallax
      data-speed="0.8"
      style="background-image: url(../assets/images/ph-bg.jpg)"
    >
      <div class="overlay-lighter"></div>
      <div class="container">
        <div class="header-content xl">
          <div class="row v-center">
            <div class="col-md-5 text-left tablet-top-45">
              <h2 class="title">babuy</h2>
              <h6 class="mb-20">A local marketplace for contempoarary parents</h6>
              <p class="lead mb-30 w-70" data-aos="fade-up">
                A stressfree way to buy, sell or trade all of your outgrown or unneeded baby products locally.
              </p>
              <!-- / btn-aos-wrapper -->
            </div>
            <!-- / column -->
            <div class="col-md-7">
              <div class="card mb-0 w-70 ml-auto mr-0" data-aos="fade-up" data-aos-delay="1000">
                <div class="card-body">
                  <form class="needs-validation" id="register-form3" novalidate="novalidate">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        name="emailRegister3"
                        placeholder="&#xf0e0; Email"
                        style="font-family: 'Font Awesome 5 Free', sans-serif !important; font-weight: 400"
                        required=""
                      />
                    </div>
                    <!-- / form-group -->
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="usernameRegister3"
                        placeholder="&#xf2bd; Username"
                        style="font-family: 'Font Awesome 5 Free', sans-serif !important; font-weight: 400"
                        required=""
                      />
                    </div>
                    <!-- / form-group -->
                    <div class="form-group">
                      <input
                        type="password"
                        id="passwordRegister3"
                        class="form-control"
                        name="passwordRegister3"
                        placeholder="&#xf11c; Password"
                        style="font-family: 'Font Awesome 5 Free', sans-serif !important; font-weight: 400"
                        required=""
                      />
                    </div>
                    <!-- / form-group -->
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        name="passwordRegisterConfirm3"
                        placeholder="&#xf14a; Confirm Password"
                        style="font-family: 'Font Awesome 5 Free', sans-serif !important; font-weight: 400"
                        required=""
                      />
                    </div>
                    <!-- / form-group -->

                    <div class="form-footer mt-30">
                      <div class="checkbox checkbox-primary ml-10 text-left mb-30">
                        <label class="hidden"><input type="checkbox" /></label>
                        <input id="checkbox-register2" type="checkbox" />
                        <label for="checkbox-register2">
                          <span>
                            Accept
                            <a href="#x">Terms &amp; Conditions</a>
                          </span>
                        </label>
                      </div>
                      <!-- / checkbox -->
                      <button type="submit" class="btn btn-primary d-block w-100">
                        <i class="fas fa-user-plus mr-5"></i>
                        Register
                      </button>
                    </div>
                    <!-- /form-footer -->
                  </form>
                  <!-- / register-form -->
                </div>
                <!-- / card-body -->
              </div>
              <!-- / card -->
            </div>
            <!-- / column -->
          </div>
          <!-- / row -->
        </div>
        <!-- / header-content -->
      </div>
      <!-- / container -->
    </header>
  </div>
</template>

<style></style>

<script>
// import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function () {},
  methods: {},
};
</script>
