<template>
  <div class="users-edit">
    <h2>Edit Profile</h2>

    <ul>
      <li class="text-danger" v-for="error in errors" v-bind:key="error">
        {{ error }}
      </li>
    </ul>

    <div class="form-group">
      <label>First Name:</label>
      <input type="text" class="form-control" v-model="editUserParams.first_name" />
    </div>
    <div class="form-group">
      <label>Last Name:</label>
      <input type="text" class="form-control" v-model="editUserParams.last_name" />
    </div>
    <div class="form-group">
      <label>Username:</label>
      <input type="text" class="form-control" v-model="editUserParams.username" />
    </div>
    <div class="form-group">
      <label>Email:</label>
      <input type="email" class="form-control" v-model="editUserParams.email" />
    </div>
    <div class="form-group">
      <label>Zipcode:</label>
      <input type="text" class="form-control" v-model="editUserParams.zip_code" />
    </div>
    <div class="form-group">
      <label>Password:</label>
      <input type="password" class="form-control" v-model="editUserParams.password" />
    </div>
    <div class="form-group">
      <label>Password confirmation:</label>
      <input type="password" class="form-control" v-model="editUserParams.password_confirmation" />
    </div>
    <div class="form-group">
      <label>Profile Picture:</label>
      <input type="text" class="form-control" v-model="editUserParams.profile_picture" />
    </div>
    <button v-on:click="editUser">Save Changes</button>
    <button v-on:click="destroyUser">Delete Profile</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      editUserParams: {},
      errors: [],
    };
  },
  created: function () {
    this.showUser();
  },
  methods: {
    showUser: function () {
      axios.get(`/users/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.editUserParams = response.data;
      });
    },
    editUser: function () {
      axios
        .patch(`/users/${this.$route.params.id}`, this.editUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push({
            name: "users-show",
            params: { id: `${response.data.id}` },
          });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyUser: function () {
      if (confirm("Are you sure you want to delete your profile? This action cannot be reversed.")) {
        axios
          .delete(`/users/${this.$route.params.id}`)
          .then(() => {
            this.$parent.flashMessage = "Your account has been deleted.";
            this.$router.push("/logout");
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },
  },
};
</script>
