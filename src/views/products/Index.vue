<template>
  <div class="products-index">
    <header
      class="page-header-sm dark bg-img"
      style="background-image: url(/assets/images/page-dark.jpg)"
      height="200px"
    >
      <div class="container">
        <h1 class="page-title mb-15">Products</h1>
        <nav class="breadcrumb p-y-0 p-x-0" data-aos="fade-right">
          <router-link class="breadcrumb-item" to="/">Home</router-link>
          <span class="breadcrumb-item active">Products</span>
        </nav>
        <!-- / bradcrumb -->
      </div>

      <!-- / container -->
    </header>

    <!-- non-picture background -->
    <section class="lg bg-gradient-body">
      <!-- <div class="spacer-3x">&nbsp;</div> -->
      <div class="container">
        <nav class="top-nav top-nav-light bg-white-frosted" style="border-radius: 1rem">
          <div class="container">
            <div class="row v-center">
              <div class="left col-md-6">
                <router-link v-bind:to="`/products/new`" tag="button" class="btn btn-gradient-primary mr-10">
                  New Product
                </router-link>
              </div>
              <!-- / column -->
              <div class="right col-md-3 text-right">
                <select v-model="categoryFilter" class="custom-select" id="select">
                  <option value="">Select Category</option>
                  <option v-for="category in categories" v-bind:key="category.id" :value="category.name">
                    {{ category.name }}
                  </option>
                </select>
              </div>
              <!-- / column -->
              <div class="right col-md-3 text-right">
                <div class="input-group mb-0">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-search text-primary"></i></span>
                  </div>
                  <input v-model="search" type="text" class="form-control w-icon-left" placeholder="Search..." />
                </div>
              </div>
              <!-- / column -->
            </div>
            <!-- / row -->
          </div>
          <!-- / container -->
        </nav>
      </div>
      <div class="spacer-1x">&nbsp;</div>
      <div class="container">
        <h3 class="section-title hidden text-center mb-60 aos-init aos-animate" data-aos="fade-down">Latest Posts</h3>
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
            <router-link v-bind:to="`/products/${product.id}`">
              <div class="card aos-init aos-animate" data-aos="fade-up">
                <div class="card-body pb-30">
                  <img
                    v-if="product.product_images[0]"
                    :src="`${product.product_images[0].url}`"
                    alt=""
                    class="rounded raised-sm mb-30"
                  />

                  <p class="card-title">
                    <a href="#x" class="fs-24 text-link title-color primary-hover va-middle">{{ product.title }}</a>
                  </p>

                  <p class="mt-10 mb-0 fs-14">
                    {{ product.category.name }}
                  </p>
                  <p class="btn btn-xs btn-info-light m-y-5 mr-5" v-if="product.trade == true">Willing to trade!</p>
                  <p class="m-y-5 badge badge-pill badge-danger" v-if="product.sold == true">Sold</p>
                  <p class="fs-16 bt-1 border-faded pt-15 mt-20 mb-0">
                    <span class="pull-right">
                      <i class="fas fa-dollar-sign"></i>
                      {{ product.price }}
                    </span>
                  </p>
                </div>
                <!-- / card-body -->
              </div>
            </router-link>
            <!-- / card -->
          </div>
          <!-- / column -->
        </div>
        <!-- / row -->
      </div>
    </section>

    <!-- / ORIGINAL CODE -->
    <!-- 
    <label for="categories">Categories:</label>
    <select v-model="categoryFilter" name="category" type="select">
      <option v-for="category in categories" v-bind:key="category.id" :value="category.name">
        {{ category.name }}
      </option>
    </select>
    <input type="text" v-model="search" placeholder="Search" />
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
    </div> -->
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
