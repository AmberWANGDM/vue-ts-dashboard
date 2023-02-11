<template>
  <div class="bordered 籍贯">
    <h2>全市犯罪人员籍贯分布地</h2>
    <div class="wrapper">
      <div class="chart" ref="divRef"></div>
      <div class="legend bordered">
        <span class="icon" :style="{ background: colors['青海省'] }" />甘岭籍
        <span class="icon" :style="{ background: colors['浙江省'] }" />边城籍
        <span class="icon" :style="{ background: colors['四川省'] }" />寒国籍
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/create-echarts-options';
import china from '../geo/china.json'

const colors = { '青海省': '#BB31F7', '浙江省': '#15B8FD', '四川省': '#06E1EE' };
const divRef = ref<HTMLDivElement>()
onMounted(() => {
  if (!divRef.value) return
  var myChart = echarts.init(divRef.value);
  echarts.registerMap('CN', china) // https://echarts.apache.org/zh/option.html#geo.map
  myChart.setOption(createEchartsOptions({
    xAxis: { show: false },
    yAxis: { show: false },
    geo: {
      tooltip: {
        show: true
      },
      map: 'CN', // registerMap对应值
      itemStyle: {
        areaColor: 'transparent',
        borderColor: '#2b63b6'
      },
      // 高亮颜色
      emphasis: {
        itemStyle: {
          color: '#2b63b6'
        }
      },
    },
    series: {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: [{ name: '浙江', value: [120.153576, 30.287459, 20] },
      { name: '四川', value: [104.065735, 30.659462, 30] },
      { name: '甘肃', value: [103.823557, 36.058039, 1] }],
      symbolSize: function (params: number[]) {
        return (params[2] / 100) * 15 + 5;
      },
      itemStyle: {
        shadowBlur: 10,
        shadowColor: '#333'
      },
      emphasis: {
        scale: true
      },
      zlevel: 1
    }
  }));
})
</script>

<style lang="scss" scoped>
@import '../assets/css/home.scss';
</style>