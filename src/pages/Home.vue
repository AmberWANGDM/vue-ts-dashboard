<template>
  <div class="home">
    <header :style="{ 'background-image': `url(${headerBg})` }"></header>
    <main>
      <section class=" section1">
        <Chart1 />
        <Chart2 />
      </section>
      <section className="bordered section2">
        <Chart3 />
        <Chart4 />
      </section>
      <section className="bordered section3"></section>
      <section className="bordered section4"></section>
      <section className="bordered section5"></section>
    </main>
    <footer>&copy; danmeng 2023-{{ year }}</footer>
  </div>

</template>

<script setup lang="ts">
import Chart1 from '../components/Chart1.vue'
import Chart2 from '../components/Chart2.vue'
import Chart3 from '../components/Chart3.vue'
import Chart4 from '../components/Chart4.vue'
import headerBg from '../assets/img/header.png'
const year = new Date().getFullYear();
</script>

<style lang="scss" scoped>
@import '../assets/css/home.scss'
</style>