<template>
  <div class="bordered 破获排名">
    <h2>案件破获排名</h2>
    <div ref="divRef" class="chart">
    </div>
    <div class="legend">
      <span class="first" /> 破案排名1
      <span class="second" /> 破案排名1
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/create-echarts-options';
const divRef = ref(null)
onMounted(() => {
  if (!divRef.value) return
  var myChart = echarts.init(divRef.value);

  const data = [
    { name: '城关区公安局', 2011: Math.random() * 10, 2012: Math.random() * 10 },
    { name: '七里河区公安局', 2011: Math.random() * 10, 2012: Math.random() * 10 },
    { name: '西固区公安局', 2011: Math.random() * 10, 2012: Math.random() * 10 },
    { name: '安宁区公安局', 2011: Math.random() * 10, 2012: Math.random() * 10 },
    { name: '红古区公安局', 2011: Math.random() * 10, 2012: Math.random() * 10 },
    { name: '永登县公安局', 2011: Math.random() * 10, 2012: Math.random() * 10 },
    { name: '皋兰县公安局', 2011: Math.random() * 10, 2012: Math.random() * 10 },
    { name: '榆中县公安局', 2011: Math.random() * 10, 2012: Math.random() * 10 },
    { name: '新区公安局', 2011: Math.random() * 10, 2012: Math.random() * 10 },
  ];
  setInterval(() => {
    const newData = [
      { name: '城关区公安局', 2011: Math.random() * 10, 2012: Math.random() * 10 },
      { name: '七里河区公安局', 2011: Math.random() * 10, 2012: Math.random() * 10 },
      { name: '西固区公安局', 2011: Math.random() * 10, 2012: Math.random() * 10 },
      { name: '安宁区公安局', 2011: Math.random() * 10, 2012: Math.random() * 10 },
      { name: '红古区公安局', 2011: Math.random() * 10, 2012: Math.random() * 10 },
      { name: '永登县公安局', 2011: Math.random() * 10, 2012: Math.random() * 10 },
      { name: '皋兰县公安局', 2011: Math.random() * 10, 2012: Math.random() * 10 },
      { name: '榆中县公安局', 2011: Math.random() * 10, 2012: Math.random() * 10 },
      { name: '新区公安局', 2011: Math.random() * 10, 2012: Math.random() * 10 },
    ];
    x(newData);
  }, 3000)
  const x = (data) => {
    myChart.setOption(createEchartsOptions({
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: { show: false },
        axisLabel: { show: false }
      },
      yAxis: {
        type: 'category',
        axisTick: { show: false },
        data: data.map(i => i.name),
        axisLabel: {
          formatter(val: string) {
            return val.replace('公安局', '\n公安局');
          }
        }
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: data.map(i => i[2011]),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#2034f9'
              }, {
                offset: 1,
                color: '#04a1ff'
              }]),
            }
          }
        },
        {
          name: '2012年',
          type: 'bar',
          data: data.map(i => i[2012]),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#b92ae8'
              }, {
                offset: 1,
                color: '#6773e7'
              }]),
            }
          }
        }
      ]
    }));
  }
  x(data)
})
</script>

<style lang="scss" scoped>
@import '../assets/css/home.scss'
</style>