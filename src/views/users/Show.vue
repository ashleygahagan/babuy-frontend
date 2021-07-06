<template>
  <div class="users-show">
    <img :src="user.profile_picture" alt="" />
    <h3>{{ user.username }}</h3>
    <p>Email: {{ user.email }}</p>
    <p>Zip: {{ user.zip_code }}</p>
    <!-- Will show edit button only if user is viewing their own profile -->
    <br />
    <router-link v-if="$parent.getUserId() == user.id" v-bind:to="`/users/${user.id}/edit`" tag="button">
      Edit Profile
    </router-link>
    <br />
    <br />
    <h3>Products:</h3>
    <!-- Displays products that this user has listed -->
    <div v-for="product in user.products" v-bind:key="product.id">
      <img :src="`${product.productImage}`" alt="" />
      <router-link v-bind:to="`/products/${product.id}`">
        <h3>{{ product.title }}</h3>
        <img v-if="product.product_images[0]" :src="`${product.product_images[0].url}`" alt="" />
      </router-link>
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
