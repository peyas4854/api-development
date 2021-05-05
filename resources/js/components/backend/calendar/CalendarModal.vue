<template>
  <div class>
    <div class="modal-header">
      <h4 class="modal-title" v-if="id">Edit Event</h4>
      <h4 class="modal-title" v-else>Add Event</h4>
      <button type="button" class="close" data-dismiss="modal" @click.prevent>&times;</button>
    </div>
    <div class="modal-body">
      <div v-if="preLoader == true">
        <preloader />
      </div>
      <form v-else>
        <div class="row">
          <div class="col-md-12 from_group col-sm-12">
            <label for="name">Title</label>
            <input type="text" class="form-control" placeholder="Name" v-model="event.title" />
            <p class="errors" v-if="errors.title">{{ errors.title[0] }}</p>
          </div>
          <div class="col-md-6 from_group col-sm-12">
            <label for="name">Start date</label>
            <input type="date" class="form-control" placeholder="Name" v-model="event.start_date" />
            <p class="errors" v-if="errors.start_date">{{ errors.start_date[0] }}</p>
          </div>
          <div class="col-md-6 from_group col-sm-12">
            <label for="name">End date</label>
            <input type="date" class="form-control" placeholder="Name" v-model="event.end_date" />
            <p class="errors" v-if="errors.end_date">{{ errors.end_date[0] }}</p>
          </div>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary app_primary_btn" @click="save()">Save</button>
      <button class="btn btn-warning" v-if="id" @click="removeEvent(id)">Delete</button>
      <button type="button" class="btn btn-danger" data-dismiss="modal" @click.prevent>Close</button>
    </div>
  </div>
</template>
<script>
import commonMethods from "../../../helper/commonMethods";
export default {
  extends: commonMethods,
  props: ["id", "modalID",'dayClickDate'],
  data() {
    return {
      event: {},
      errors: [],
    };
  },
  created() {
    if (this.id) {
      this.getEvent("http://127.0.0.1:8000/event/" + this.id);
    }else if(this.dayClickDate){
console.log('day click');
this.event.start_date = this.dayClickDate;
this.event.end_date = this.dayClickDate;
    }
  },
  methods: {
    save() {
      let instance = this;
      instance.inputField = {
        title: this.event.title,
        start_date: this.event.start_date,
        end_date: this.event.end_date,
      };
      if (this.id) {
        instance.axoisUpdate(
          "http://127.0.0.1:8000/event/" + this.id,
          this.inputField
        );
      } else {
       
        instance.postDataMethod("event", this.inputField);
      }
    },
    postDataSuccess(response) {
      $(this.modalID).modal("hide");
      this.$hub.$emit("reloadCalendar");
    },
    postDataError(error) {
      this.errors = error.errors;
    },
    getEvent(route) {
      let instance = this;
      //instance.preLoader = true;
      instance.axiosGet(
        route,
        function (response) {
          instance.event.title = response.data.data.title;
          instance.event.start_date = response.data.data.start;
          instance.event.end_date = response.data.data.end;
          //instance.preLoader = false;
        },
        function (response) {
          console.log("paici 2", response);
          //instance.preLoader = true;
        }
      );
    },
    removeEvent(id) {
      
      this.axiosDelete("http://127.0.0.1:8000/event/" + id);
      this.postDataSuccess()
    },
  },
};
</script>

