<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  props: {
    chartdata: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: true,
      tooltips: {
        enabled: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              padding: 5,
              stepSize: 5,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 10,
              padding: 5,
              stepSize: 5,
            },
            gridLines: {
              drawOnChartArea: false,
              drawTicks: false,
            },
          },
        ],
      },
    },
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
