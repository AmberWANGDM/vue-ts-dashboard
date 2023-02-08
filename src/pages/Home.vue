<template>
  <div class="home">
    <header :style="{ 'background-image': `url(${headerBg})` }">home</header>
    <main>
      <section class="section1"></section>
      <section class="section2"></section>
      <section class="section3"></section>
      <section class="section4"></section>
      <section class="section5"></section>
    </main>
  </div>

</template>

<script setup lang="ts">
import { } from 'vue'
import headerBg from '../images/header.png'
</script>

<style lang="scss" scoped>
@import './../shared/helper';

.home {
  display: flex;
  flex-direction: column;
  flex: 1;

  header {
    height: rem(99);
    background-size: cover;
  }

  main {
    flex: 1;
    display: grid;
    grid-template:
      "box1 box2 box4 box5" 755fr
      "box3 box3 box4 box5" 363fr / 366fr 361fr 811fr 747fr;
    grid-column-gap: rem(28);
    grid-row-gap: rem(28);

    >.section1 {
      grid-area: box1;
      background-color: red;
    }

    >.section2 {
      grid-area: box2;
      background-color: lightyellow;
    }

    >.section3 {
      grid-area: box3;
      background-color: lightblue;
    }

    >.section4 {
      grid-area: box4;
      background-color: lightpink;
    }

    >.section5 {
      grid-area: box5;
      background-color: coral;
    }
  }
}
</style>