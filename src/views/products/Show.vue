<template>
  <div class="products-show">
    <header class="page-header bg-gradient-body">
      <div class="container">
        <h4 class="page-title mb-15" data-aos="fade-down">{{ product.title }}</h4>
        <nav class="breadcrumb p-y-0 p-x-0" data-aos="fade-right">
          <router-link class="breadcrumb-item" to="/home">Home</router-link>
          <router-link class="breadcrumb-item" to="/products">Products</router-link>
          <span class="breadcrumb-item active">Details</span>
        </nav>
        <!-- / bradcrumb -->
      </div>
      <!-- / container -->
    </header>

    <div class="main-container p-0">
      <section class="p-y-100">
        <div class="container">
          <div class="row v-center">
            <div class="col-lg-6 tablet-lg-top-30 page-content" data-aos="fade-up" data-aos-delay="100">
              <div id="product-swiper" class="swiper-container rounded">
                <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="/assets/images/ph-square.jpg" alt="" /></div>
                  <div class="swiper-slide"><img src="/assets/images/ph-square.jpg" alt="" /></div>
                  <div class="swiper-slide"><img src="/assets/images/ph-square.jpg" alt="" /></div>
                </div>
                <!-- / swiper-wrapper -->
                <!-- Add Arrows -->
                <div class="swiper-pagination"></div>
              </div>
              <!-- / product-swiper -->
            </div>
            <!-- / column -->

            <div class="col-lg-6 sidebar" data-aos="fade-up" data-aos-delay="300">
              <p class="fs-12 mb-10">
                Category:
                <span class="fw-bold">{{ product.category.name }}</span>
              </p>
              <h4 class="mb-5">{{ product.title }}</h4>
              <p class="fs-20 mb-15">{{ "$" }}{{ product.price }}</p>
              <p class="fs-18 mb-15">Condition: {{ product.condition }}</p>
              <p class="lead m-y-40">
                {{ product.description }}
              </p>
              <p class="fs-15 mb-15">Seller contact: {{ product.user.email }}</p>
              <div class="form-cart">
                <div class="input-group mb-0">
                  <span class="input-group-btn">
                    <router-link
                      class="btn btn-primary rounded-md m-y-10 mr-10"
                      type="button"
                      v-bind:to="`/users/${product.user.id}`"
                      tag="button"
                    >
                      <i class="far fa-user"></i>

                      <span>Seller Profile</span>
                    </router-link>
                  </span>
                </div>
                <!-- / input-group -->
                <div class="spacer-1x">&nbsp;</div>
              </div>
              <div class="form-cart">
                <div class="input-group mb-0">
                  <span class="input-group-btn">
                    <router-link
                      class="btn btn-primary-light m-y-10 mr-10"
                      v-if="$parent.getUserId() == product.user.id"
                      v-bind:to="`/products/${product.id}/edit`"
                      tag="button"
                    >
                      <span>Edit Product</span>
                    </router-link>
                  </span>
                </div>
                <!-- / input-group -->
              </div>
              <!-- / form-cart -->
            </div>
            <!-- / column -->
          </div>
        </div>
        <!-- / container -->
      </section>
      <!-- / product -->
    </div>
    <!-- / main-container -->

    <!-- <img v-if="product.product_images[0]" :src="`${product.product_images[0].url}`" alt="" /> -->
    <!-- <div v-for="(product, key) in product.product_images" v-bind:key="key"><img v-bind:src="product.url" /></div>
    <h3>{{ product.title }}</h3>

    <p>Category: {{ product.category.name }}</p>
    <p>Price: {{ "$" }}{{ product.price }}</p>

    <p>Description: {{ product.description }}</p>
    <p>Condition: {{ product.condition }}</p>
    <p>Seller contact: {{ product.user.email }}</p>

    <p>{{ "Seller Profile:" }}</p>
    <router-link v-bind:to="`/users/${product.user.id}`" tag="button">{{ product.user.username }}</router-link>

    <br />
    <router-link v-if="$parent.getUserId() == product.user.id" v-bind:to="`/products/${product.id}/edit`" tag="button">
      Edit Product
    </router-link> -->
  </div>
</template>

<style>
img {
  max-width: 350px;
}
</style>

<script>
/* swiper */
import axios from "axios";
export default {
  data: function () {
    return {
      product: [],
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
