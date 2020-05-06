<template>
  <div>
    <div class="card bg-light text-dark">
      <div class="card-body">
        <p class="flex1 p-0 my-auto">saffds</p>
        <p class="flex1 p-0 my-auto">asffdsfsd</p>

        <div class="flex1 my-auto image">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" class="avatar" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-light {
  background-color: #06d0f1f2 !important;
  position: fixed;
  width: 100%;
  border: 0px !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  z-index: 999;
}
.bg-light:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.card-body {
  border-bottom: 1px solid #d3d3daf3 !important;
  display: flex;
  padding: 0px 50px;
  height: 70px;
}
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.image {
  position: relative;
  left: 10em;
}
</style>
