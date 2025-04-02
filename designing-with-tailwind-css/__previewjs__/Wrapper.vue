<style>
body {
    @apply bg-gray-200 p-0 m-0
}

</style>
<script setup>
  import "../src/assets/tailwind.css";
//   import { getCurrentInstance } from "vue";

//   const { appContext } = getCurrentInstance();
//   appContext.app.use(mockRouter);
</script>
<template>
  <div class="wrapper">
    <slot />
  </div>
</template>
