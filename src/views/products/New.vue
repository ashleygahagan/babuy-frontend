<template>
  <div class="products-new">
    <form v-on:submit.prevent="createProduct()">
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
        <label>Condition:</label>
        <input type="v-model-selec" class="form-control" v-model="newProductParams.condition" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
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
          this.$router.push(`/products/${this.product.id}/edit`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
