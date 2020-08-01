<template>
  <div>
    <div class="main_wrapper">
      <div class="main_wrapper_top_header">
        <div class="header_content my-auto">
          <h4>Calendar</h4>
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
    </div>
    <div class="modal fade" id="add-edit-modal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <eventmodal class="modal-content" v-if="isActive" 
        :id="selectedItemId"
         :modalID="modalID"
         :dayClickDate="dayClickDate"
         
         ></eventmodal>
      </div>
    </div>

    <div class="main_wrapper_card_content">
      <preloader v-if="preLoader == true" />
      <div v-else>
        <FullCalendar :options="calendarOptions"></FullCalendar>
      </div>
    </div>
  </div>
</template>
<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import list from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import commonMethod from "../helper/commonMethods";
import preLoader from "../components/base/preloader";
import eventmodal from "../components/backend/calendar/CalendarModal";
export default {
  extends: commonMethod,
  components: {
    FullCalendar,
    eventmodal,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, list, interactionPlugin],
        weekends: true,
        initialView: "dayGridMonth",
        dateClick: this.handleDateClick,
        eventClick: this.eventClick,
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        selectable: true,
        events: [],
      },
      modalID: "#add-edit-modal",
      updateEvent: "",
      dayClickDate:'',
    };
  },
  mounted() {
    let instance = this;
    this.$hub.$on("addEdit", function (id) {
      instance.addEdit(id);
    });

    this.$hub.$on("reloadCalendar", function (value = true) {
      if (value) {
        instance.getevent("/event");
        console.log("reload ");
      }
    });
    this.modalCloseAction(this.modalID);
  },
  created() {
    this.getevent("/event");
  },
  methods: {
    getevent(route) {
      let instance = this;
      instance.axiosGet(
        route,
        function (response) {
          console.log("response", response.data.data);
          instance.calendarOptions.events = response.data.data;
          //preloader set globally in comoon axois
        },
        function (error) {
          console.log("user erro", error);
        }
      );
    },

    handleDateClick(arg) {
      console.log("event", arg.dateStr);
      this.dayClickDate=arg.dateStr;
     
      this.addEdit();
       $(this.modalID).modal("show");
    },
    eventClick(arg) {
      this.addEdit(arg.event.id);
      //this.updateEvent = arg;
      $(this.modalID).modal("show");
      console.log("title", arg.event.id);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
