<template>
  <div class="年龄段-图2">
    <div class="chart" ref="divRef"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/create-echarts-options';
import { onMounted, ref } from 'vue'
const divRef = ref<HTMLDivElement>()
onMounted(() => {
  if (!divRef.value) return
  var myChart = echarts.init(divRef.value)
  myChart.setOption(createEchartsOptions({}))
})
</script>

<style lang="scss" scoped>

</style>