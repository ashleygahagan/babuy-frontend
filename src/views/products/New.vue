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
