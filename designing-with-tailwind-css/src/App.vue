<template>
  <NavBar />
  <div id="app" class="antialiased text-gray-900">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style src="./assets/tailwind.css"></style>
