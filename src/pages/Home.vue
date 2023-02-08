<template>
  <div class="home">
    <header :style="{ 'background-image': `url(${headerBg})` }">home</header>
  </div>

</template>

<script setup lang="ts">
import { } from 'vue'
import headerBg from '../images/header.png'
// console.log(image); // /src/images/header.png
</script>

<style lang="scss" scoped>
@import './../shared/helper';

.home {
  &>header {
    height: rem(99);
    background-size: cover;
  }
}
</style>