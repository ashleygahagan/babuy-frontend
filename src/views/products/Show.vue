<template>
  <div class="products-show">
    <div class="main-container p-0">
      <div class="bg-gradient-body">
        <div class="container">
          <div class="row v-center">
            <div class="spacer-2x">&nbsp;</div>
            <div class="col-lg-6 tablet-lg-top-30 page-content" data-aos="fade-up" data-aos-delay="100">
              <div class="row">
                <div class="glightbox-gallery">
                  <img
                    v-for="(product, key) in product.product_images"
                    v-bind:key="key"
                    v-bind:src="product.url"
                    class="rounded-sm"
                  />
                </div>
              </div>
              <!-- / column -->
              <!-- / row -->

              <div class="spacer">&nbsp;</div>
              <!-- / column -->
            </div>
            <!-- / column -->

            <div class="col-lg-6 sidebar" data-aos="fade-up" data-aos-delay="300">
              <p class="fs-12 mb-10">
                Category:
                <span class="fw-bold">{{ product.category.name }}</span>
              </p>
              <h4 class="mb-5">{{ product.title }}</h4>
              <p class="fs-20 mb-15">{{ "$" }}{{ product.price }}</p>
              <p class="m-y-5 badge badge-pill badge-danger" v-if="product.sold == true">Sold</p>

              <p class="fs-18 mb-15">Condition: {{ product.condition }}</p>
              <p class="btn btn-xs btn-info-light m-y-5 mr-5" v-if="product.trade == true">Willing to trade!</p>
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
                  <div class="spacer-2x">&nbsp;</div>
                </div>
                <!-- / input-group -->
              </div>
              <!-- / form-cart -->
            </div>
            <!-- / column -->
          </div>
        </div>
      </div>
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
