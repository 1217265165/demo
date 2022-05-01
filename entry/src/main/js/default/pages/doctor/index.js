import lineData from "../../datas/DClinedata.js"
import todolist from"../../datas/todoList.js"

import barData from "../../datas/DCbarData.js"
export default {
    data: {
        todolist,
        lineData, //震颤
        barData,
        lineOps: {
            xAxis: {
                min: 0,
                max: 20,
                axisTick: true,
                display: false,
            },
            yAxis: {
                min: 0,
                max: 10,
                display: false,
            },
            series: {
                lineStyle: {
                    width: "3px",
                    smooth: true,
                },
                headPoint: {
                    shape: "circle",
                    size: 10,
                    strokeWidth: 5,
                    fillColor: '#ffffff',
                    strokeColor: '#007aff',
                    display: true,
                },
                loop: {
                    margin: 4,
                    gradient: true,
                }
            }
        },
        barOps: {
            xAxis: {
                min: 0,
                max: 30,
                display: false,
                axisTick: 10,
            },
            yAxis: {
                min: 0,
                max: 900,
                display: false,
            },
            loop: {
                margin: 2,
            }
        }
    },
    onInit() {
        this.lineData[0].data = [7.63, 5.50, 5.51, 5.54, 7.31, 6.54, 5.25, 6.96, 5.95, 6.28, 7.91, 5.05, 6.13, 5.75, 4.75, 5.53, 4.91, 6.80, 6.57, 7.16];
        this.lineData[1].data = [ 3.75, 2.53, 4.91, 5.80, 2.57, 7.16,7.63, 5.50, 5.51, 5.54, 4.31, 6.54, 5.25, 3.96, 2.95, 5.28, 4.91, 5.05, 2.13, 3.75,];
    }
}