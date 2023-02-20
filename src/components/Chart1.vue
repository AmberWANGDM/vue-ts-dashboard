<template>
  <div class="bordered 管辖统计">
    <h2>案发派出所管辖统计</h2>
    <div class="chart" ref="divRef"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { createEchartsOptions } from '../shared/create-echarts-options';
const divRef = ref(null)
onMounted(() => {
  if (!divRef.value) return
  var myChart = echarts.init(divRef.value);
  const data = [
    { name: '兰州新区', num: 20 },
    { name: '兰州新区', num: 14 },
    { name: '兰州新区', num: 41 },
    { name: '兰州新区', num: 30 },
    { name: '兰州新区', num: 25 },
    { name: '兰州新区', num: 19 },
    { name: '兰州新区', num: 46 },
    { name: '兰州新区', num: 24 },
    { name: '兰州新区', num: 30 },
  ]
  setInterval(() => {
    const newData = [
      { name: '兰州新区', num: Math.floor(Math.random() * (50 - 10 + 1) + 10) },
      { name: '兰州新区', num: Math.floor(Math.random() * (50 - 10 + 1) + 10) },
      { name: '兰州新区', num: Math.floor(Math.random() * (50 - 10 + 1) + 10) },
      { name: '兰州新区', num: Math.floor(Math.random() * (50 - 10 + 1) + 10) },
      { name: '兰州新区', num: Math.floor(Math.random() * (50 - 10 + 1) + 10) },
      { name: '兰州新区', num: Math.floor(Math.random() * (50 - 10 + 1) + 10) },
      { name: '兰州新区', num: Math.floor(Math.random() * (50 - 10 + 1) + 10) },
      { name: '兰州新区', num: Math.floor(Math.random() * (50 - 10 + 1) + 10) },
      { name: '兰州新区', num: Math.floor(Math.random() * (50 - 10 + 1) + 10) },
    ]
    x(newData)
  }, 1500)
  const x = (data) => {
    myChart.setOption(createEchartsOptions({
      xAxis: {
        data: data.map(i => i.name),
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
        data: data.map(i => i.num)
      }]
    }));
  }
  x(data)

})
</script>

<style lang="scss" scoped>
@import '../assets/css/home.scss'
</style>