<template>
  <div>
    <preloader v-if="preLoader == true" />
    <div v-else>
      <div class="form-row p-3">
        <div class="col-md-4 filter_feilds">
          <label for="search">Search</label>
          <input class="form-control" type="search" v-model="searchtable" placeholder="Search" />
        </div>
        <div class="col-md-4 filter_feilds">
          <label for="search">Search by</label>

          <select class="form-control" id="sel1" v-model="filterSelect">
            <option value>Please select one</option>
            <option v-for="(data,i) in dataset.headers" :key="i" :value="data">{{ data }}</option>
          </select>
          <p class="errors ml-1" v-if="searchtable !='' && filterSelect == ''">Please select one</p>
        </div>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th v-for="(header,i) in dataset.colums" :key="i">{{ header.title}}</th>
          </tr>
        </thead>
        <tbody v-if="tableData.length > 0">
          <tr v-for="(data,i) in filterData" :key="i">
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
      </table>
      <div class="text-center" v-if=" filterData.length == 0 ">
        <p>No data Found! Try again..</p>
      </div>
      <div class="text-center p-3" v-if="loadMore <= tableData.length && searchtable==''">
        <button @click="loadMore +=10" class="btn btn-outline-primary btn-lg">Load more</button>
      </div>
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
      searchtable: "",
      filterSelect: "",
      loadMore: 5,
      error: false
    };
  },
  watch: {
    searchtable(newval, oldval) {
      if (this.filterSelect != "") {
        this.searchtable = newval;
      } else {
        console.log("error");
        this.error = true;
        return this.showMoreMethods();
      }
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
  computed: {
    filterData() {
      if (this.searchtable != "" && this.filterSelect != "") {
        return this.searchMethods();
      } else {
        return this.showMoreMethods();
      }
    }
  },
  created() {
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
    searchMethods() {
      let query = this.filterSelect.toLowerCase();
      const result = this.tableData.filter(c =>
        c[query].includes(this.searchtable.toLowerCase())
      );
      console.log("search result", result);
      return result;
    },
    showMoreMethods() {
      let totalLength = this.tableData.slice(0, this.loadMore);
      return totalLength;
    }
  }
};
</script>

<style lang="scss" scoped>
.filter_feilds {
  height: 80px;
}
</style>
