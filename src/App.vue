<script>
  import HeaderComp from "@/components/template/HeaderComp.vue";
  // import MainComp from "@/components/template/MainComp.vue";

  export default {
    name: "HomeView",
    components: { HeaderComp },
  };
</script>

<template>
  <header-comp />
  <RouterView />
  <!-- <MainComp />   -->
</template>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");

  main {
    font-family: "Poppins", sans-serif;
    height: 320px;
  }

  body {
    background-color: #bfc9db;
    margin: 0;
    color: #50545c;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .router-link-active {
    color: #50545c;
  }
</style>
