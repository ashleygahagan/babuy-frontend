<template>
  <div id="app">
    <div class="container relative">
      <nav class="navbar navbar-expand-lg navbar-light main-nav z-index-99999">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/"><img src="assets/images/logo.png" alt="babuy" /></router-link>

          <div class="collapse navbar-collapse" id="navbar-1">
            <ul class="navbar-nav mr-auto ml-15">
              <!-- / nav-item -->
              <li v-if="isLoggedIn()" class="nav-item">
                <router-link class="nav-link" to="/products">Products</router-link>
              </li>
              <!-- / nav-item -->
              <li class="nav-item">
                <router-link class="nav-link" :to="`/users/${getUserId()}`">Profile</router-link>
              </li>
              <!-- / nav-item -->
              <li v-if="isLoggedIn()" class="nav-item">
                <router-link class="nav-link" to="/logout">Logout</router-link>
              </li>
              <!-- / nav-item -->
              <li v-if="!isLoggedIn()" class="nav-item">
                <router-link class="nav-link" to="/signup">Signup</router-link>
              </li>
              <!-- / nav-item -->
              <li v-if="!isLoggedIn()" class="nav-item">
                <router-link class="nav-link" to="/login">Login</router-link>
              </li>
            </ul>
            <!-- / navbar-button -->
          </div>
          <!-- / navbar-collapse -->
        </div>
        <!-- / container-fluid -->
      </nav>
      <!-- / navbar -->
    </div>
    <!-- / container -->
    <!-- / original header -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/products">Products</router-link>
      |
      <span v-if="isLoggedIn()">
        <router-link :to="`/users/${getUserId()}`">Profile</router-link>
        |
        <router-link to="/logout">Logout</router-link>
      </span>
      <span v-else>
        <router-link to="/signup">Signup</router-link>
        |
        <router-link to="/login">Login</router-link>
      </span>
    </div> -->
    <router-view />
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
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
