//逻辑
import lineData from "../../datas/lineData.js"
import lineData1 from "../../datas/lineData1.js"
import lineData2 from "../../datas/lineData2.js"
import barData from "../../datas/barData.js"

export default {
    data: {
        barData,
        lineData,
        lineData1,
        lineData2,
        lineOps: {
            xAxis: {
                min: 0,
                max: 20,
                display: true,
            },
            yAxis: {
                min: 0,
                max: 1000,
                display: true,
            },
            series: {
                lineStyle: {
                    width: "5px",
                    smooth:true,
                },
                headPoint: {
                    shape: "circle",
                    size: 20,
                    strokeWidth: 5,
                    fillColor: '#ffffff',
                    strokeColor: '#007aff',
                    display:false,
                },
                loop: {
                    margin: 2,
                }
            }
        },
        lineOps1: {
            xAxis: {
                min: 0,
                max: 20,
                display: true,
            },
            yAxis: {
                min: 0,
                max: 1000,
                display: true,
            },
            series: {
                lineStyle: {
                    width: "5px",
                    smooth:true,
                },
                headPoint: {
                    shape: "circle",
                    size: 20,
                    strokeWidth: 5,
                    fillColor: '#ffffff',
                    strokeColor: '#007aff',
                    display:false,
                },
                loop: {
                    margin: 2,
                }
            }
        },
        lineOps2: {
            xAxis: {
                min: 0,
                max: 20,
                display: true,
            },
            yAxis: {
                min: 0,
                max: 1000,
                display: true,
            },
            series: {
                lineStyle: {
                    width: "5px",
                    smooth:true,
                },
                headPoint: {
                    shape: "circle",
                    size: 20,
                    strokeWidth: 5,
                    fillColor: '#ffffff',
                    strokeColor: '#007aff',
                    display:false,
                },
                loop: {
                    margin: 2,
                }
            }
        },
        barOps: {
            xAxis: {
                min: 0,
                max: 20,
                display: true,
                axisTick: 10,
            },
            yAxis: {
                min: 0,
                max: 1000,
                display: true,
            },
            loop: {
                margin: 2,
            }
        },

    addData() {
        this.$refs.linechart.append({
            serial: 0,
            data: [Math.floor(Math.random() * 400) + 400]
        })
        this.$refs.barchart.append({
            serial: 0,
            data: [Math.floor(Math.random() * 400) + 400]
        })
        this.$refs.rainbowchart.append({
            serial: 0,
            data: [Math.floor(Math.random() * 400) + 400]
        })
    }
}}
