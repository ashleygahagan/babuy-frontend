<template>
  <div class="products-show">
    <img v-if="product.product_images[0]" :src="`${product.product_images[0].url}`" alt="" />
    <h3>{{ product.title }}</h3>
    <p>Category: {{ product.category.name }}</p>
    <p>Price: {{ "$" }}{{ product.price }}</p>
    <p>Description: {{ product.description }}</p>
    <p>Sold? {{ product.sold }}</p>
    <p>Condition: {{ product.conditon }}</p>
    <p>Seller contact: {{ product.user.email }}</p>
    <!-- Displays user that this product belongs to -->
    <div v-for="user in product.user.id" v-bind:key="user.id">
      <p>{{ "Seller Profile:" }}</p>
      <router-link v-bind:to="`/users/${product.user.id}`" tag="button">{{ product.user.username }}</router-link>
    </div>
    <!-- Will show edit button only if user is viewing their own item -->
    <br />
    <router-link v-if="$parent.getUserId() == product.user.id" v-bind:to="`/products/${product.id}/edit`" tag="button">
      Edit Product
    </router-link>
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
      product: [],
      productImages: [],
    };
  },
  created: function () {
    this.showProduct();
  },
  methods: {
    showProduct: function () {
      axios.get(`/products/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.product = response.data;
        this.products = response.data.products;
      });
    },
  },
};
</script>
