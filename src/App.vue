<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-white-frosted z-index-6">
      <div class="container">
        <router-link class="navbar-brand" to="/"><img src="/assets/images/logo.png" alt="babuy" /></router-link>

        <div class="collapse navbar-collapse" id="navbar-1">
          <ul class="navbar-nav ml-auto">
            <!-- / nav-item -->
            <li v-if="isLoggedIn()" class="nav-item">
              <router-link class="nav-link" to="/products">Products</router-link>
            </li>
            <!-- / nav-item -->
            <li v-if="isLoggedIn()" lass="nav-item">
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
