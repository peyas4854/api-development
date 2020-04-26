<template>
  <div class="container-fluid">
    <h1 class="text-center">
      <router-link to="/">App home</router-link>
    </h1>

    <router-link to="/home2">home 2</router-link>
    <router-link to="/home3">home 3</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
