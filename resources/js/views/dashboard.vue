<template>
  <div>
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <div class="card_d">
          <div class="card_top">
            <h4 class="top_text">100</h4>
          </div>
          <div class="card_bottom">
            <h4 class="bottom_text">{{ $t('BODY.LANGUAGE')}}</h4>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="card_d">
          <div class="card_top">
            <h4 class="top_text">100</h4>
          </div>
          <div class="card_bottom">
            <h4 class="bottom_text">Member Online</h4>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="card_d">
          <div class="card_top">
            <h4 class="top_text">100</h4>
          </div>
          <div class="card_bottom">
            <h4 class="bottom_text">Member Online</h4>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="card_d">
          <div class="card_top">
            <h4 class="top_text">100</h4>
          </div>
          <div class="card_bottom">
            <h4 class="bottom_text">Member Online</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.card_d {
  //background-color: #1f1498 !important;
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
}
.card_top {
  padding: 20px;
  background-color: #6040f3ba;
}
.card_bottom {
  padding: 10px;
  background-color: #6040f3ba;
}
.bottom_text,
.top_text {
  color: #ffffff;
  text-align: center;
}
</style>
