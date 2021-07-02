<template>
  <div class="users-show">
    <img :src="user.profile_picture" alt="" />
    <h2>{{ user.username }}</h2>
    <p>Email: {{ user.email }}</p>
    <p>Zip: {{ user.zip_code }}</p>
    <!-- Will show edit button only if user is viewing their own profile -->
    <br />
    <!-- NOT WORKING - NEED TO FIGURE OUT CORRECT PATH TO GET TO EDIT PAGE -->
    <router-link v-if="$parent.getUserId() == user.id" to="`/users/user.id/edit`" tag="button">
      Edit Profile
    </router-link>
    <br />
    <!-- Displays products that this user has listed -->
    <div v-for="product in user.products" v-bind:key="product.id">
      <img :src="`${product.product_image}`" alt="" />
      <h3>{{ product.title }}</h3>
      <router-link v-bind:to="`/products/${product.id}`" tag="button">See More</router-link>
    </div>
  </div>
</template>

<style>
img {
  max-width: 350px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
      products: [],
    };
  },
  created: function () {
    this.showUser();
  },
  methods: {
    showUser: function () {
      axios.get(`/users/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.user = response.data;
        this.products = response.data.products;
      });
    },
  },
};
</script>
