<template>
  <div class="products-index">
    <label for="categories">Categories:</label>
    <select v-model="categoryFilter" name="category" type="select">
      <option v-for="category in categories" v-bind:key="category.id" :value="category.name">
        {{ category.name }}
      </option>
    </select>
    <input type="text" v-model="search" placeholder="Search" />
    <!-- Button to post a new product -->
    <br />
    <br />
    <router-link v-bind:to="`/products/new`" tag="button">New Product</router-link>
    <div
      v-for="product in orderBy(filterBy(filterBy(products, categoryFilter, 'category'), search), 'created_at', -1)"
      v-bind:key="product.id"
    >
      <router-link v-bind:to="`/products/${product.id}`">
        <img v-if="product.product_images[0]" :src="`${product.product_images[0].url}`" alt="" />
        <p>{{ product.title }}</p>
      </router-link>
      <p>{{ product.category.name }}</p>
      <p>{{ "$" }}{{ product.price }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      products: [],
      search: "",
      categoryFilter: "",
      categories: [],
    };
  },
  created: function () {
    this.productsIndex();
    this.categoriesIndex();
  },
  methods: {
    productsIndex: function () {
      axios.get("/products").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
    categoriesIndex: function () {
      axios.get("/categories").then((response) => {
        console.log(response.data);
        this.categories = response.data;
      });
    },
  },
};
</script>
