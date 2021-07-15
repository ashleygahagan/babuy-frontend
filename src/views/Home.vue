<template>
  <div class="home">
    <header
      class="pt-0 lg bg-img jarallax"
      data-jarallax
      data-speed="0.8"
      style="background-image: url(../assets/images/home.jpg)"
    >
      <div class="overlay-lighter"></div>
      <div class="container">
        <div class="header-content">
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
                  <div class="card w-raised-icon lg-icon">
                    <div class="card-body text-right">
                      <div class="raised-icon bg-glass-frosted icon-lg right-30 circle raised">
                        <i class="fas fa-baby text-primary-light"></i>
                      </div>
                      <!-- / raised-icon -->
                      <h5 class="card-title mt-40">About Us</h5>
                      <p class="card-text">Simply create an account, login, and begin shopping or selling!</p>
                      <li v-if="isLoggedIn()" class="btn btn-primary-light pill">
                        <router-link class="nav-link" to="/products">Check It Out</router-link>
                      </li>
                      <!-- / nav-item -->
                      <li v-if="!isLoggedIn()" class="btn btn-primary-light pill">
                        <router-link class="nav-link" to="/login">Check It Out</router-link>
                      </li>
                    </div>
                    <!-- / card-body -->
                  </div>
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
  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
    getUserId: function () {
      return localStorage.user_id;
    },
  },
};
</script>
