<template>
  <div>
    <e-charts :options="options"> </e-charts>
  </div>
</template>
<script>
export default {
  name: "VueEchartsTest",

  data() {
    return {
      options: {
        xAxis: {
          type: "category",
          data: ["Mon"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [120],
            type: "bar"
          }
        ]
      }
    };
  }
};
</script>   