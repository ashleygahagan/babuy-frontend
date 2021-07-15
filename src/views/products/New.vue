<template>
  <div class="products-new">
    <div class="main-container p-0">
      <section class="lg bg-gradient-body">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 tablet-lg-top-30 page-content">
              <h4 class="page-title mb-15">New Product</h4>
              <nav class="breadcrumb p-y-0 p-x-0" data-aos="fade-right">
                <router-link class="breadcrumb-item" to="/home">Home</router-link>
                <router-link class="breadcrumb-item" to="/products">Products</router-link>
                <span class="breadcrumb-item active">New Product</span>
              </nav>
            </div>
            <div class="card-body text-center">
              <ul>
                <li class="text-danger" v-for="error in errors" v-bind:key="error">
                  {{ error }}
                </li>
              </ul>
              <form
                v-on:submit.prevent="createProduct()"
                class="needs-validation"
                id="form-validation3"
                novalidate="novalidate"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        v-model="newProductParams.title"
                        placeholder="Title"
                        required=""
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
                        v-model="newProductParams.price"
                        placeholder="Price"
                        required=""
                        style="font-family: 'Font Awesome 5 Free', sans-serif !important; font-weight: 400"
                      />
                    </div>
                    <!-- / form-group -->
                  </div>

                  <!-- / column -->

                  <div class="form-group">
                    <textarea
                      class="form-control"
                      v-model="newProductParams.description"
                      rows="4"
                      placeholder="Description"
                      required=""
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
                        Catgeory:
                        <br />
                        <br />
                        <select
                          class="btn btn-outline-primary has-split-dropdown"
                          v-bind:value="newProductParams.category_id"
                          name="category"
                          v-model="newProductParams.category_id"
                          id="select"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="true"
                        >
                          Catgeory
                          <option value=""></option>
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
                        Condition:
                        <br />
                        <br />
                        <select
                          class="btn btn-outline-primary has-split-dropdown"
                          v-bind:value="newProductParams.condition"
                          name="condition"
                          v-model="newProductParams.condition"
                          id="select"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="true"
                        >
                          Condition
                          <option value=""></option>
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
                  <div class="form-group">
                    <div class="btn-group checkbox-group">
                      <div class="checkbox checkbox-primary">
                        <label class="hidden"><input type="checkbox" /></label>
                        <input v-model="newProductParams.trade" id="checkbox1" type="checkbox" />
                        <label for="checkbox1">Willing to trade?</label>
                      </div>
                      <!-- / checbox -->
                    </div>
                    <!-- / btn-group -->
                  </div>
                  <!-- / form-group -->
                </div>
                <!-- / column -->

                <button type="submit" class="btn btn-gradient-primary m-y-10 mr-10" value="create">Create</button>
              </form>
              <!-- / form-group -->
            </div>
            <!-- / col-md-6 -->
          </div>
        </div>
      </section>
    </div>

    <!-- <form v-on:submit.prevent="createProduct()">
      <h1>New Product</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="newProductParams.title" />
      </div>
      <div class="form-group">
        <label>Price:</label>
        <input type="text" class="form-control" v-model="newProductParams.price" />
      </div>
      <div class="form-group">
        <label>Description:</label>
        <input type="text" class="form-control" v-model="newProductParams.description" />
      </div>
      <div class="form-group">
        <label>Willing to trade?</label>
        <input type="checkbox" class="form-control" v-model="newProductParams.trade" />
      </div>
      <div class="form-group">
        <label>Category:</label>
        <select v-bind:value="newProductParams.category_id" name="category" v-model="newProductParams.category_id">
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
        <select v-bind:value="newProductParams.condition" name="condition" v-model="newProductParams.condition">
          <option value="New">New</option>
          <option value="Gently Used">Gently Used</option>
          <option value="Used">Used</option>
        </select>
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newProductParams: {},
      errors: [],
    };
  },
  methods: {
    createProduct: function () {
      axios
        .post("/products", this.newProductParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/products/${response.data.id}/edit`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
