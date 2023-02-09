<template>
  <div class="home">
    <header :style="{ 'background-image': `url(${headerBg})` }"></header>
    <main>
      <section class=" section1">
        <div class="bordered 管辖统计">
          <h2>案发派出所管辖统计</h2>
          <div class="chart" ref="divRef"></div>
        </div>
      </section>
      <section className="bordered section2"></section>
      <section className="bordered section3"></section>
      <section className="bordered section4"></section>
      <section className="bordered section5"></section>
    </main>
  </div>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts';
import headerBg from '../images/header.png'
const divRef = ref(null)
const px = (n: number) => n / 2420 * (window as any).pageWidth;
onMounted(() => {
  if (!divRef.value) return
  var myChart = echarts.init(divRef.value);
  myChart.setOption({
    textStyle: {
      fontSize: px(12),
      color: '#79839E'
    },
    title: { show: false },
    legend: { show: false },
    xAxis: {
      data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
      axisTick: { show: false },
      axisLine: {
        lineStyle: { color: '#083B70' }
      },
      axisLabel: {
        fontSize: px(12),
        formatter(val: string) {
          if (val.length > 2) {
            const array = val.split('');
            array.splice(2, 0, '\n');
            return array.join('');
          } else {
            return val;
          }
        }
      },
    },
    grid: {
      x: px(40),
      y: px(40),
      x2: px(40),
      y2: px(40),
    },
    yAxis: {
      splitLine: { show: false },
      axisLine: {
        show: true,
        lineStyle: { color: '#083B70' }
      },
      axisLabel: {
        fontSize: px(12)
      }
    },
    series: [{
      type: 'bar',
      data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
    }]
  });
})
</script>

<style lang="scss" scoped>
@import './../shared/_helper.scss';

.home {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #010310;
  color: white;

  header {
    height: px(99);
    background-size: cover;
  }

  main {
    flex: 1;
    display: grid;
    grid-template:
      "box1 box2 box4 box5" 755fr
      "box3 box3 box4 box5" 363fr / 366fr 361fr 811fr 747fr;
    grid-column-gap: px(28);
    grid-row-gap: px(28);

    >section {
      text-align: center;
    }

    .bordered {
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

    .管辖统计 {
      height: px(315);
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        flex-shrink: 0;
        border: 1px solid #0a5299;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        font-size: px(22);
        line-height: px(24);
        padding: px(10) px(28);
        text-shadow: 0 0 px(3) white;
      }

      .chart {
        flex: 1;
        width: 100%;
      }
    }
  }
}
</style>