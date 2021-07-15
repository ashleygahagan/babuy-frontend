<template>
  <div class="users-show">
    <div class="main-container p-0">
      <section class="lg bg-gradient-body">
        <div class="container">
          <!-- <div class="row"> -->
          <div class="col-lg-8 tablet-lg-top-30 page-content">
            <div class="blog-post mb-50">
              <h4 class="page-title mb-15">{{ user.username }}</h4>
              <nav class="breadcrumb p-y-0 p-x-0" data-aos="fade-right">
                <router-link class="breadcrumb-item" to="/home">Home</router-link>
                <span class="breadcrumb-item active">Seller Profile</span>
              </nav>
              <div class="page-content" data-aos="fade-up" data-aos-delay="300">
                <img :src="user.profile_picture" alt="" class="raised-sm rounded-10" />
                <p class="fs-16 bt-1 bb-1 border-secondary p-15 m-y-40">
                  <i class="far fa-user mr-5"></i>
                  {{ user.username }}
                  <span class="mr-5 ml-5 text-muted">/</span>
                  <i class="fas fa-map-pin"></i>
                  {{ user.zip_code }}
                  <span class="pull-right">
                    <i class="fas fa-envelope"></i>
                    {{ user.email }}
                  </span>
                </p>
              </div>
              <router-link
                v-if="$parent.getUserId() == user.id"
                v-bind:to="`/users/${user.id}/edit`"
                tag="button"
                class="btn btn-sm btn-primary-light m-y-5 mr-5"
              >
                Edit Profile
              </router-link>
            </div>

            <!-- / comments -->
          </div>
          <!-- / column -->
        </div>
        <!-- / row -->
        <!-- </div> -->
        <!-- / container -->

        <div id="related-posts">
          <div class="container">
            <h4 class="page-title mb-15" data-aos="fade-down">Products</h4>
            <div class="row v-center">
              <div v-for="product in user.products" v-bind:key="product.id" class="col-md-4">
                <div class="card" data-aos="fade-up" data-aos-delay="100">
                  <router-link v-bind:to="`/products/${product.id}`" class="card-body pb-30">
                    <img img v-if="product.product_images[0]" :src="`${product.product_images[0].url}`" alt="" />
                    <h6 class="mb-5">{{ product.title }}</h6>
                    <p class="fs-12 bt-1 border-faded pt-15 mt-20 mb-0"></p>
                    <p class="m-y-5 badge badge-pill badge-danger" v-if="product.sold == true">Sold</p>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <!-- <img :src="user.profile_picture" alt="" />
    <h3>{{ user.username }}</h3>
    <p>Email: {{ user.email }}</p>
    <p>Zip: {{ user.zip_code }}</p>

    <br />
    <router-link v-if="$parent.getUserId() == user.id" v-bind:to="`/users/${user.id}/edit`" tag="button">
      Edit Profile
    </router-link>
    <br />
    <br />
    <h3>Products:</h3>

    <div v-for="product in user.products" v-bind:key="product.id">
      <img :src="`${product.productImage}`" alt="" />
      <router-link v-bind:to="`/products/${product.id}`">
        <h3>{{ product.title }}</h3>
        <img v-if="product.product_images[0]" :src="`${product.product_images[0].url}`" alt="" />
      </router-link>
    </div>
  </div> -->
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
