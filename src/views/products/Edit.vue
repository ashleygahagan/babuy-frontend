<template>
  <div class="products-edit">
    <div class="main-container p-0">
      <section class="lg bg-gradient-body">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 tablet-lg-top-30 page-content">
              <h4 class="page-title mb-15">Edit Product</h4>
              <nav class="breadcrumb p-y-0 p-x-0" data-aos="fade-right">
                <router-link class="breadcrumb-item" to="/home">Home</router-link>
                <router-link class="breadcrumb-item" to="/products">Products</router-link>
                <span class="breadcrumb-item active">Edit</span>
              </nav>
            </div>
            <div class="card-body text-center">
              <ul>
                <li class="text-danger" v-for="error in errors" v-bind:key="error">
                  {{ error }}
                </li>
              </ul>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      v-model="editProductParams.title"
                      placeholder="Title"
                      style="font-family: 'Font Awesome 5 Free', sans-serif !important; font-weight: 400"
                    />
                  </div>
                  <!-- / form-group -->
                </div>
                <!-- / column -->

                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      v-model="editProductParams.price"
                      placeholder="Price"
                      style="font-family: 'Font Awesome 5 Free', sans-serif !important; font-weight: 400"
                    />
                  </div>
                  <!-- / form-group -->
                </div>
                <!-- / column -->

                <div class="form-group">
                  <textarea
                    class="form-control"
                    v-model="editProductParams.description"
                    rows="4"
                    placeholder="Description"
                    style="
                      font-family: 'Font Awesome 5 Free', sans-serif !important;
                      font-weight: 400;
                      min-height: 115px;
                      max-height: 150px;
                    "
                  ></textarea>
                  <div class="spacer-1x">&nbsp;</div>

                  <div class="col-md-12">
                    <div class="form-group">
                      <select
                        class="btn btn-outline-primary has-split-dropdown"
                        v-bind:value="editProductParams.category_id"
                        name="category"
                        v-model="editProductParams.category_id"
                        id="select"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        Catgeory
                        <option value="">Select Category</option>
                        <option value="1">Strollers</option>
                        <option value="2">Car Seats</option>
                        <option value="3">Furniture</option>
                        <option value="4">Bedding & Decor</option>
                        <option value="5">Nursing & Feeding</option>
                        <option value="6">Toys & Learning</option>
                        <option value="7">Bath & Diapering</option>
                        <option value="8">Clothing & Accessories</option>
                        <option value="9">Health & Safety</option>
                        <option value="10">Maternity</option>
                        <option value="11">Miscellaneous</option>
                      </select>
                    </div>
                    <!-- / form-group -->
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <select
                        class="btn btn-outline-primary has-split-dropdown"
                        v-bind:value="editProductParams.condition"
                        name="condition"
                        v-model="editProductParams.condition"
                        id="select"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        Condition
                        <option>Select Conditon</option>
                        <option value="New">New</option>
                        <option value="Gently Used">Gently Used</option>
                        <option value="Used">Used</option>
                      </select>
                    </div>
                    <!-- / form-group -->
                  </div>
                  <!-- / column -->
                </div>
                <!-- / row -->
              </div>

              <div class="col-md-12">
                <div class="form-check">
                  <div class="btn-group checkbox-group">
                    <input type="checkbox" class="form-check-input" v-model="editProductParams.trade" />
                    <label>Willing to trade?</label>
                  </div>
                  <!-- / checbox -->
                </div>
                <!-- / btn-group -->
              </div>
              <!-- / form-group -->

              <!-- / column -->
              <div class="col-md-12">
                <div class="form-check">
                  <div class="btn-group checkbox-group">
                    <input type="checkbox" class="form-check-input" v-model="editProductParams.sold" />
                    <label>Sold?</label>
                  </div>
                  <!-- / checbox -->
                </div>
                <!-- / btn-group -->
              </div>
              <div class="spacer-1x">&nbsp;</div>
              <p class="text-danger">Please add at least one image or your product will not be displayed!</p>
              <div class="col-md-12">
                Image link:
                <input type="text" v-model="newImage" />

                <button v-on:click="addProductImage(newImage)" class="btn btn-xs btn-primary-light m-y-5 mr-5">
                  Add Image
                </button>
                <!-- / form-group -->
              </div>
              <div class="spacer-1x">&nbsp;</div>
              <div
                v-for="productImage in editProductParams.product_images"
                v-bind:key="productImage.id"
                class="form-group"
              >
                <img class="mb-30 rounded raised-sm" v-bind:src="productImage.url" />
                <button class="btn btn-xs btn-danger m-y-5 mr-5" v-on:click="destroyProductImage(productImage)">
                  Delete Image
                </button>
              </div>
              <button class="btn btn-primary m-y-10 mr-10" v-on:click="editProduct()">Save Changes</button>

              <button class="btn btn-danger-light m-y-10 mr-10" v-on:click="destroyProduct()">Delete Product</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- 
    <h3>Edit Product</h3>
    <ul>
      <li class="text-danger" v-for="error in errors" v-bind:key="error">
        {{ error }}
      </li>
    </ul>
    <div class="form-group">
      <label>Title:</label>
      <input type="text" class="form-control" v-model="editProductParams.title" />
    </div>
    <div class="form-group">
      <label>Price:</label>
      <input type="text" class="form-control" v-model="editProductParams.price" />
    </div>
    <div class="form-group">
      <label>Description:</label>
      <input type="text" class="form-control" v-model="editProductParams.description" />
    </div>
    <div class="form-group">
      <label>Category:</label>
      <select v-bind:value="editProductParams.category_id" name="category" v-model="editProductParams.category_id">
        <option value="1">Strollers</option>
        <option value="2">Car Seats</option>
        <option value="3">Furniture</option>
        <option value="4">Bedding & Decor</option>
        <option value="5">Nursing & Feeding</option>
        <option value="6">Toys & Learning</option>
        <option value="7">Bath & Diapering</option>
        <option value="8">Clothing & Accessories</option>
        <option value="9">Health & Safety</option>
        <option value="10">Maternity</option>
        <option value="11">Miscellaneous</option>
      </select>
    </div>
    <div class="form-group">
      <label>Condition:</label>

      <select v-bind:value="editProductParams.condition" name="condition" v-model="editProductParams.condition">
        <option value="New">New</option>
        <option value="Gently Used">Gently Used</option>
        <option value="Used">Used</option>
      </select>
    </div>
    <div class="form-check">
      <label>Willing to trade?</label>
      <input type="checkbox" class="form-check-input" v-model="editProductParams.trade" />
    </div>
    <div class="form-check">
      <label>Sold?</label>
      <input type="checkbox" class="form-check-input" v-model="editProductParams.sold" />
    </div>
    <p>Please add at least one image below or your listing will not get posted!</p>
    <div>
      <input type="text" v-model="newImage" />
      <button v-on:click="addProductImage(newImage)">Add Image</button>
    </div>
    <br />
    <div v-for="productImage in editProductParams.product_images" v-bind:key="productImage.id" class="form-group">
      <img v-bind:src="productImage.url" class="form-control" />
      <button v-on:click="destroyProductImage(productImage)">Delete Image</button>
    </div>
    <br />
    <button v-on:click="editProduct">Save Changes</button>
    <button v-on:click="destroyProduct">Delete Product</button>
  </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      editProductParams: {},
      productImages: [],
      errors: [],
      newImage: "",
      product: {},
    };
  },
  created: function () {
    this.showProduct();
  },
  methods: {
    showProduct: function () {
      axios.get(`/products/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.editProductParams = response.data;
        this.productImages = this.editProductParams.product_images;
        console.log("Images array", this.productImages);
      });
    },
    editProduct: function () {
      axios
        .patch(`/products/${this.$route.params.id}`, this.editProductParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/products/${this.$route.params.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },

    destroyProduct: function () {
      if (confirm("Are you sure you want to delete this product? This action cannot be reversed.")) {
        axios
          .delete(`/products/${this.$route.params.id}`)
          .then(() => {
            this.$parent.flashMessage = "Your product has been deleted.";
            this.$router.push("/products");
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },
    destroyProductImage: function (picture) {
      if (confirm("Are you sure you want to delete this image? This action cannot be reversed.")) {
        axios
          .delete(`/product_images/${picture.id}`)
          .then(() => {
            var index = this.editProductParams.product_images.indexOf(picture);
            this.editProductParams.product_images.splice(index, 1);
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },
    addProductImage: function (newImage) {
      var params = {
        product_id: this.$route.params.id,
        url: newImage,
      };
      axios
        .post(`/product_images/`, params)
        .then((response) => {
          this.editProductParams.product_images.push(response.data);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
