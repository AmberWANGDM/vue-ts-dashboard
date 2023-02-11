<template>
  <div class="bordered 籍贯">
    <h2>全市犯罪人员籍贯分布地</h2>
    <div class="chart" ref="divRef"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { createEchartsOptions } from '../shared/create-echarts-options';
const divRef = ref<HTMLDivElement>()
onMounted(() => {
  if (!divRef.value) return
  var myChart = echarts.init(divRef.value);
  myChart.setOption(createEchartsOptions({
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
      splitLine: { show: true, lineStyle: { color: '#073E78' } },
      axisTick: { show: false },
      axisLine: { show: false },
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { color: '#073E78' } },
      axisLabel: {
        formatter(val: number) {
          return val * 100 + '%';
        }
      }
    },
    series: [{
      name: '故意伤人',
      type: 'line',
      data: [
        0.15, 0.13, 0.11,
        0.13, 0.14, 0.15,
        0.16, 0.18, 0.21,
        0.19, 0.17, 0.16,
        0.15
      ],
      symbol: 'circle',
      symbolSize: px(12),
      lineStyle: { width: px(2) },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#414a9f'
        }, {
          offset: 1,
          color: '#1b1d52'
        }]),
      }
    }]
  }));
})
</script>

<style lang="scss" scoped>
@import '../assets/css/home.scss';
</style>