<template>
  <div class="home">
    <header :style="{ 'background-image': `url(${headerBg})` }"></header>
    <main>
      <section class=" section1">
        <Chart1 />
        <Chart2 />
      </section>
      <section class="bordered section2">
        <Chart3 />
        <Chart4 />
      </section>
      <section class="bordered section3">
        <Chart5 />
      </section>
      <section class="bordered section4">
        <Chart6 />
        <div class="bordered 年龄段">
          <h2>犯罪人员年龄段分布</h2>
          <div class="charts">
            <Chart7 />
            <Chart8 />
            <Chart9 />
          </div>
        </div>
      </section>
      <section class="bordered section5">
        <div class="bordered row1 案发类型">
          <h2>案发类型统计</h2>
          <div class="charts">
            <Chart10 />
            <Chart11 />
          </div>
        </div>
        <div class="bordered row2 案发街道">
          <h2>案发街道统计</h2>
          <div class="charts">
            <Chart12 />
            <Chart13 />
          </div>
        </div>
        <div class="bordered row3 作案手段">
          <h2>作案手段分析</h2>
          <Chart14 />
        </div>
      </section>
    </main>
    <footer>&copy; danmeng 2023-{{ year }}</footer>
  </div>
</template>

<script setup lang="ts">
import Chart1 from '../components/Chart1.vue'
import Chart2 from '../components/Chart2.vue'
import Chart3 from '../components/Chart3.vue'
import Chart4 from '../components/Chart4.vue'
import Chart5 from '../components/Chart5.vue'
import Chart6 from '../components/Chart6.vue'
import Chart7 from '../components/Chart7.vue'
import Chart8 from '../components/Chart8.vue'
import Chart9 from '../components/Chart9.vue'
import Chart10 from '../components/Chart10.vue'
import Chart11 from '../components/Chart11.vue'
import Chart12 from '../components/Chart12.vue'
import Chart13 from '../components/Chart13.vue'
import Chart14 from '../components/Chart14.vue'

import headerBg from '../assets/img/header.png'
const year = new Date().getFullYear();
</script>

<style lang="scss" scoped>
@import '../assets/css/home.scss'
</style>