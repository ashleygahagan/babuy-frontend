<template>
  <div class="products-edit">
    <h3>Edit</h3>
    <p>Please add at least one image below or your listing will not get posted!</p>
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
      <!-- <input type="text" class="form-control" v-model="editProductParams.condition" /> -->
      <select v-bind:value="editProductParams.condition" name="condition" v-model="editProductParams.condition">
        <option value="New">New</option>
        <option value="Gently Used">Gently Used</option>
        <option value="Used">Used</option>
      </select>
    </div>
    <div class="form-group">
      <label>Willing to trade?</label>
      <input type="checkbox" class="form-control" v-model="editProductParams.trade" />
    </div>
    <div class="form-group">
      <label>Sold?</label>
      <input type="checkbox" class="form-control" v-model="editProductParams.sold" />
    </div>
    <button v-on:click="editProduct">Save Changes</button>
    <button v-on:click="destroyProduct">Delete Product</button>
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
      });
    },
    editProduct: function () {
      axios
        .patch(`/products/${this.$route.params.id}`, this.editProductParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push({
            name: "products-show",
            params: { id: `${response.data.id}` },
          });
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
  },
};
</script>
