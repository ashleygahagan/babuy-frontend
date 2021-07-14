<template>
  <div class="users-edit">
    <header class="page-header bg-img" style="background-image: url(/assets/images/page-light.jpg)">
      <div class="overlay-light"></div>
      <div class="container">
        <h4 class="page-title mb-15" data-aos="fade-down">Edit Profile</h4>
        <nav class="breadcrumb p-y-0 p-x-0" data-aos="fade-right">
          <router-link class="breadcrumb-item" to="/home">Home</router-link>
          <span class="breadcrumb-item active">Edit Profile</span>
        </nav>
      </div>
    </header>

    <div class="container p-y-60">
      <div class="m-x-auto" style="max-width: 800px">
        <div class="card mb-15" data-aos="fade-up" data-aos-delay="200">
          <div class="card-body p-x-25">
            <div class="form-group">
              <input
                input
                type="text"
                class="form-control"
                v-model="editUserParams.first_name"
                placeholder="first_name"
              />
            </div>
            <!-- / form-group -->
            <div class="form-group">
              <input type="text" class="form-control" v-model="editUserParams.last_name" placeholder="last_name" />
            </div>
            <!-- / form-group -->
            <div class="form-group">
              <input type="text" class="form-control" v-model="editUserParams.username" placeholder="username" />
            </div>
            <!-- / form-group -->
            <div class="form-group">
              <input type="email" class="form-control" v-model="editUserParams.email" placeholder="email" />
            </div>
            <!-- / form-group -->
            <div class="form-group">
              <input type="text" class="form-control" v-model="editUserParams.zip_code" placeholder="zip_code" />
            </div>
            <!-- / form-group -->
            <div class="form-group">
              <input type="password" class="form-control" v-model="editUserParams.password" placeholder="Password" />
            </div>
            <!-- / form-group -->
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                v-model="editUserParams.password_confirmation"
                placeholder="Password Confirmation"
              />
            </div>
            <p class="text-primary">Please add the URL for your profile photo here:</p>
            <!-- / form-group -->
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                v-model="editUserParams.profile_picture"
                placeholder="Profile Picture URL"
              />
            </div>
            <button class="btn btn-primary m-y-10 mr-10" v-on:click="editUser">Save Changes</button>
            <button class="btn btn-danger-light m-y-10 mr-10" v-on:click="destroyUser">Delete Profile</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- / column -->
  <!-- <h2>Edit Profile</h2>

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
  </div> -->
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
