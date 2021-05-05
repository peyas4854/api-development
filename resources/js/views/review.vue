<template>
  <div>
    <div class="main_wrapper">
      <div class="main_wrapper_top_header">
        <div class="header_content my-auto">
          <h4>Review</h4>
        </div>
        <div class="header_content_button">
          <button
            class="btn btn-primary app_primary_btn"
            data-toggle="modal"
            data-target="#add-edit-modal"
            @click="addEdit('')"
          >Add</button>
        </div>
      </div>

      <div class="main_wrapper_card_content">
        <div class="form-row p-3">
          <div class="col-md-6">
            <label for="search">Search</label>
            <input type="text" class="form-control" v-model="query" placeholder="Search" />
          </div>
        </div>
        <table class="table table- stripped">
          <thead>
            <th>Name</th>
            <th>Age</th>
            <th>Species</th>
            <th>Country</th>
            <th>Likes to Eat</th>
          </thead>
          <tbody>
            <tr v-for="result of options" :key="result.uuid">
              <td>{{result.name}}</td>
              <td>{{result.age}}</td>
              <td>{{result.species}}</td>
              <td>{{result.country}}</td>
              <td>{{result.eats}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from "../components/Data.json";
export default {
  data() {
    return {
      options: jsonData,
      query: ""
    };
  },
  created() {
    console.log("review");
    this.queryResults;
  },
  computed: {
    queryResults() {
      if (!this.query) {
        console.log("here");
      }
      console.log("empty");
    }
  }
};
</script>

<style>
</style>
