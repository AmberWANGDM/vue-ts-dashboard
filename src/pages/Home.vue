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
  background: #010310;

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

    >section {
      border: 1px solid #0764bc;
      position: relative;
      border-radius: 4px;
      box-shadow: 0 0 2px 0 #0e325f, inset 0 0 2px 0 #0e325f;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 4px;
        box-shadow: 17px 0 0 -16px #0e325f,
          -17px 0 0 -16px #0e325f,
          0 17px 0 -16px #0e325f,
          0 -17px 0 -16px #0e325f,
          9px 0 0 -8px #0d4483,
          -9px 0 0 -8px #0d4483,
          0 9px 0 -8px #0d4483,
          0 -9px 0 -8px #0d4483, ;
      }
    }

    >.section1 {
      grid-area: box1;
    }

    >.section2 {
      grid-area: box2;
    }

    >.section3 {
      grid-area: box3;
    }

    >.section4 {
      grid-area: box4;
    }

    >.section5 {
      grid-area: box5;
    }
  }
}
</style>