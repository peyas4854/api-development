<template>
  <div>
    <div v-if="preLoader == true">
      <preloader />
    </div>
    <table class="table" v-else>
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
       <h1> No data Found! </h1>
      </tbody>
    </table>
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
      tableData: {}
    };
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
          console.log("datatable response ", response.data.data);
          instance.tableData = response.data.data;
        },
        function(response) {
          console.log("datatable 2", response);
        }
      );
    },
    addEdit(id) {
      console.log("emit,id");
    },
    reload() {
      this.getData(this.dataset.source);
    }
  }
};
</script>
