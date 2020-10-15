<template>
  <div class="container">
    <BarChart :chartdata="chartdata" class="bar-chart" />
  </div>
</template>

<script>
import BarChart from '@/projects/03-charts/BarChart';
import { chartdata } from '@/projects/03-charts/data.js';

export default {
  components: {
    BarChart,
  },
  data() {
    return {
      chartdata: chartdata,
    };
  },
};
</script>

<style lang="scss">
.container {
  width: 375px;
  height: 500px;
  .bar-chart {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
