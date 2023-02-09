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
  myChart.setOption(createEchartsOptions({
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
  }));
})
</script>

<style lang="scss" scoped>
@import '../assets/css/home.scss'
</style>