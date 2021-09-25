//逻辑
import lineData from "../../datas/lineData.js"
import lineData1 from "../../datas/lineData1.js"
import lineData2 from "../../datas/lineData2.js"
import barData from "../../datas/barData.js"

export default {
    data: {
        s:0,
        m:0,
        h:0,
        barData,
        lineData,
        lineData1,
        lineData2,
        lineOps: {
            xAxis: {
                type: 'time',
                display: true,
                min: 0,
                max: 20,
                data: ['0','1','2','3','4','5','6','7','8','9',
                '10','11','12','13','14','15','16','17','18','19','20'],
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 10,
                display: true,
            },
            series: {
                lineStyle: {
                    width: "3px",
                    smooth:false,
                },
                headPoint: {
                    shape: "circle",
                    size: 20,
                    strokeWidth: 5,
                    fillColor: '#fdfdfd',
                    strokeColor: '#007aff',
                    display:false,
                },
                loop: {
                    margin: 2,
                }
            },
        },
        lineOps1: {
            xAxis: {
                min: 0,
                max: 40,
                display: true,
            },
            yAxis: {
                min: 0,
                max: 360,
                display: true,
            },
            series: {
                lineStyle: {
                    width: "3px",
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
                max: 50,
                display: true,
            },
            yAxis: {
                min: 0,
                max: 100,
                display: true,
            },
            series: {
                lineStyle: {
                    width: "2px",
                    smooth:false,
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
