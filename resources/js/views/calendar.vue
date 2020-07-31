<template>
  <div>
    <div class="main_wrapper">
      <div class="main_wrapper_top_header">
        <div class="header_content my-auto">
          <h4>Calendar</h4>
        </div>
      </div>
    </div>
    <div class="main_wrapper_card_content">
      <FullCalendar
        :options="calendarOptions"
       
      ></FullCalendar>
    </div>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import list from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, list, interactionPlugin],
        weekends: true,

        initialView: "dayGridMonth",
        dateClick: this.handleDateClick,
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        selectable: true,
        events: [
          {
            title: "event 1",
            start: "2020-08-03",
            end: "2020-08-05",
            //display:'background',
            className: "bg-color",
            // backgroundColor: "blue",
            borderColor: "black",
            textColor: "red",
            editable: true,
          },
          {
            title: "event 2",
            textColor: "red",
            date: "2020-08-24",
          },
        ],
      },
    };
  },
  created() {
    $(".fc-event-title-container").css({ background: "red" });
  },
  methods: {
    handleDateClick: function (arg) {
      alert("date click! " + arg.dateStr);
    },
  },
};
</script>

<style scoped lang="scss">
.bg-color {
  background-color: red !important;
  padding: 40px!important;
}
.fc-event-title-container {
  background-color: green !important;
}
</style>
