//逻辑
import lineData from "../../datas/lineData.js"
export default {
    data: {
        lineData,
            lineOps: {
      xAxis: {
        min: 0,
        max: 20,
        display: false,
      },
      yAxis: {
        min: 0,
        max: 1000,
        display: false,
      },
      series: {
        lineStyle: {
          width: "5px",
          smooth: true,
        },
        headPoint: {
          shape: "circle",
          size: 20,
          strokeWidth: 5,
          fillColor: '#ffffff',
          strokeColor: '#007aff',
          display: true,
        },
        loop: {
          margin: 2,
        }
      }
    },
  },

            addData() {
                this.$refs.linechart.append({
                    serial: 0,
                    data: [Math.floor(Math.random() * 400) + 400]
                })
            }
        }
