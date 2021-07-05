<template>
  <div class="products-edit">
    <h1>Edit Product</h1>

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
      <input type="text" class="form-control" v-model="editProductParams.category.name" />
    </div>
    <div class="form-group">
      <label>Condition:</label>
      <input type="text" class="form-control" v-model="editProductParams.condition" />
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
