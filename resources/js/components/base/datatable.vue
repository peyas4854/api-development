<template>
  <div>
    <preloader v-if="preLoader == true" />
    <div v-else>
      <div class="form-row p-3">
        <div class="col-md-6">
          <label for="search">Search</label>
          <input type="text" class="form-control" v-model="searchtable" placeholder="Search" />
        </div>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th v-for="(header,i) in dataset.colums" :key="i">{{ header.title}}</th>
          </tr>
        </thead>
        <tbody v-if="tableData.length > 0">
          <tr v-for="(data,i) in tableData" :key="i">
            <td v-for="(column,i) in dataset.colums" :key="i">
              <span v-if="column.type === 'text'">{{ data[column.key]}}</span>
              <span v-if="column.type === 'component' ">
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  data-toggle="modal"
                  data-target="#add-edit-modal"
                  @click="addEdit(data.id)"
                >Edit</button>
                <button
                  type="button"
                  class="btn btn-danger btn-sm"
                  @click="dataDelete(data.id)"
                >Delete</button>
              </span>
              <!-- <span v-else >none</span> -->
            </td>
          </tr>
        </tbody>
        <tbody v-else class="text-center">
          <h1>No data Found!</h1>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import commonMethod from "../../helper/commonMethods";
export default {
  extends: commonMethod,
  props: {
    dataset: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      tableData: {},
      searchtable: ""
    };
  },

  watch: {
    searchtable(newval, oldval) {
      // console.log("new", newval);
      this.searchMethod(newval);
    }
  },
  mounted() {
    let instance = this;
    this.$hub.$on("reloadDataTable", function(value = true) {
      if (value) {
        instance.reload();
      }
    });
  },
  created() {
    console.log("dataset", this.dataset);
    this.getData(this.dataset.source);
  },
  methods: {
    getData(route) {
      let instance = this;
      instance.axiosGet(
        route,
        function(response) {
          //console.log("datatable response ", response.data.data);
          instance.tableData = response.data.data;
        },
        function(response) {
          //console.log("datatable 2", response);
        }
      );
    },
    addEdit(id) {
      console.log("emit,id");
      this.$hub.$emit("addEdit", id);
    },
    reload() {
      this.getData(this.dataset.source);
    },
    searchMethod(val) {
      console.log("paici", val);
      //console.log("paici", this.tableData);
      const key = JSON.parse(JSON.stringify(this.dataset.colums));
      console.log("key", key);

      const data = JSON.parse(JSON.stringify(this.tableData));

      const result = data.filter(e => e.name === val);

      console.log("result", result);
    }
  }
};
</script>
