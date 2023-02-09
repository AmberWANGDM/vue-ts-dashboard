<template>
  <div class="home">
    <header :style="{ 'background-image': `url(${headerBg})` }"></header>
    <main>
      <section class=" section1">
        <Chart1 />
      </section>
      <section className="bordered section2"></section>
      <section className="bordered section3"></section>
      <section className="bordered section4"></section>
      <section className="bordered section5"></section>
    </main>
  </div>

</template>

<script setup lang="ts">
import Chart1 from '../components/Chart1.vue'
import headerBg from '../assets/img/header.png'

</script>

<style lang="scss" scoped>
@import '../assets/css/home.scss'
</style>