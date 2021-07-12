<template>
  <div class="products-index">
    <header class="page-header dark bg-img" style="background-image: url(/assets/images/page-dark.jpg)">
      <div class="container">
        <h1 class="page-title mb-15" data-aos="fade-down">Products</h1>
        <nav class="breadcrumb p-y-0 p-x-0" data-aos="fade-right">
          <router-link class="breadcrumb-item" to="/">Home</router-link>
          <span class="breadcrumb-item active">Products</span>
        </nav>
        <!-- / bradcrumb -->
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="widget">
          <h6 class="widget-title">Search</h6>
          <div class="input-group input-w-overlap-btn mb-0">
            <input type="text" v-model="search" class="form-control pill" placeholder="Search" />
            <span class="input-group-btn">
              <button class="btn btn-sm btn-icon btn-circle btn-primary overlapping-btn" type="button">
                <i class="fas fa-search"></i>
              </button>
            </span>
            <!-- / input-group-btn -->
          </div>
          <!-- / input-group -->
        </div>
        <!-- / widget -->
      </div>
      <!-- / container -->
    </header>

    <section class="lg bg-img" style="background-image: url(/assets/images/blur-primary.jpg)">
      <div class="container">
        <h3 class="section-title hidden text-center mb-60" data-aos="fade-down">Latest Products</h3>
        <div class="row">
          <div
            class="col-md-6 col-lg-4"
            v-for="product in orderBy(
              filterBy(filterBy(products, categoryFilter, 'category'), search),
              'created_at',
              -1
            )"
            v-bind:key="product.id"
          >
            <div class="card" data-aos="fade-up">
              <div class="card-body p-y-30">
                <img
                  v-if="product.product_images[0]"
                  :src="`${product.product_images[0].url}`"
                  alt=""
                  class="mb-30 rounded"
                />
                <p class="card-title product-title fs-20">
                  <a href="#x" class="title-link primary-hover fs-20">{{ product.title }}</a>
                  <span class="price-inline title-color">{{ "$" }}{{ product.price }}</span>
                </p>
                <p>
                  <a href="#x" class="card-text mt-5 title-link">{{ product.category.name }}</a>
                </p>
                <div class="product-card-footer">
                  <router-link class="btn btn-xs btn-primary btn-inline mt-10" v-bind:to="`/products/${product.id}`">
                    <i class="fas fa-shopping-cart mr-5"></i>
                    <span>More Info</span>
                    >
                  </router-link>
                </div>
                <!-- / product-card-footer -->
              </div>
              <!-- / card-body -->
            </div>
            <!-- / card -->
          </div>
          <!-- / column -->
        </div>
        <!-- / row -->
      </div>
      <!-- / container -->
    </section>

    <div class="spacer-3x">&nbsp;</div>

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
