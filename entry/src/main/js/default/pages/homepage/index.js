//逻辑
//引入震颤数据x轴的模型
import lineData from "../../datas/lineData.js"
//引入震颤数据y轴的模型
import lineDatay from "../../datas/lineDatay.js"
//引入震颤数据z轴的模型
import lineDataz from "../../datas/lineDataz.js"
//引入的弯曲信号模型
import lineData1 from "../../datas/lineData1.js"
//引入的肌电信号模型
import lineData2 from "../../datas/lineData2.js"
//引入的评分模型
import barData from "../../datas/barData.js"

export default {
    //初始化数据
    data: {
        state: '良好',
        level1: 1.5,
        //异常事件
        number1: 10,
        number2: 5,
        //平均值
        num1: "0.0" + 0, //震颤
        num2: "0.0" + 0, //弯曲
        num3: "0.0" + 0, //肌电
        num4: "0.0" + 0, //y
        num5: "0.0" + 0, //z
        //时间，显示格式为 00：00：00
        time: 0, //单位为s
        s: ("0" + 0),
        m: ("0" + 0),
        h: ("0" + 0),
        barData,
        lineData, //震颤
        lineData1, //弯曲
        lineData2, //肌电
        // YZ轴
        lineDatay, //y
        lineDataz, //z

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
        lineOps1: {
            xAxis: {
                min: 0,
                max: 20,
                axisTick: true,
                display: false,
            },
            yAxis: {
                min: 0,
                max: 180,
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
        lineOps2: {
            xAxis: {
                min: 0,
                max: 20,
                axisTick: true,
                display: false,
            },
            yAxis: {
                min: 0,
                max: 1000,
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
        }
    },
    addData() {
        //初始值
        let sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0;
        let len = this.lineData[0].data.length;
        for (let i = 0;i < len; i++) {
            sum1 += this.lineData[0].data[i];
            sum2 += this.lineData1[0].data[i];
            sum3 += this.lineData2[0].data[i];
            // 震颤频率YZ轴
            sum4 += this.lineDatay[0].data[i];
            sum5 += this.lineDataz[0].data[i];
        }
        this.num1 = fomatFloat(sum1 / len, 2);
        this.num2 = fomatFloat(sum2 / len, 2);
        this.num3 = Math.floor(sum3 / len);

        // 震颤频率YZ轴
        this.num4 = fomatFloat(sum4 / len, 2);
        this.num5 = fomatFloat(sum5 / len, 2);
        // 设置定时器,间隔为1s
        let dingshi = setInterval(() => {
            //计时器
            this.time++; //总秒数，每一秒加一
            if (Math.floor(this.time % 60) < 10) //如果秒数不足两位
            this.s = "0" + Math.floor(this.time % 60); //补0
            else {
                this.s = Math.floor(this.time % 60); //否则原样输出
            }
            if (Math.floor(this.time / 60 % 60) < 10) //取分钟,不足10的在前补0
            this.m = "0" + Math.floor(this.time / 60 % 60);
            else {
                this.m = Math.floor(this.time % 60); //否则原样输出
            }
            if (Math.floor(this.time / 3600) < 10)
            this.h = "0" + Math.floor(this.time / 3600); //取时，不足10的前方补0
            else {
                this.h = Math.floor(this.time / 3600); //否则原样输出
            }

            //随机生成的数据
            //以后换成请求的数据
            let data1 = Math.floor(Math.random() * 2) + 4;
            let data2 = Math.floor(Math.random() * 90) + 90;
            let data3 = Math.floor(Math.random() * 400) + 400;
            // 震颤频率YZ轴
            let data4 = Math.floor(Math.random() * 2) + 4;
            let data5 = Math.floor(Math.random() * 2) + 4;

            //累加
            //平均频率、伸展角度、频谱信号
            sum1 += data1;
            sum2 += data2;
            sum3 += data3;
            // 震颤频率YZ轴
            sum4 += data4;
            sum5 += data5;
            //长度加1
            len += 1;
            //计算平均值
            this.num1 = fomatFloat(sum1 / len, 2);
            this.num2 = fomatFloat(sum2 / len, 2);
            this.num3 = Math.floor(sum3 / len);
            this.num4 = fomatFloat(sum4 / len, 2);
            this.num5 = fomatFloat(sum5 / len, 2);
            //数据加到图形中
            this.$refs.linechart.append({
                serial: 0,
                data: [data1]
            }),
            this.$refs.linechart1.append({
                serial: 0,
                data: [data2]
            }),
            this.$refs.linechart2.append({
                serial: 0,
                data: [data3]
            });
            this.$refs.linecharty.append({
                serial: 0,
                data: [data4]
            });
            this.$refs.linechartz.append({
                serial: 0,
                data: [data5]
            });
        }, 1000);
    },
    //初始化
    onInit() {
        //初始化三轴加速度（3个）
        this.lineData[0].data = [7.63, 5.50, 5.51, 5.54, 7.31, 6.54, 5.25, 6.96, 5.95, 6.28, 7.91, 5.05, 6.13, 5.75, 4.75, 5.53, 4.91, 6.80, 6.57, 7.16];
        this.lineDatay[0].data = [7.63, 5.50, 5.51, 5.54, 7.31, 6.54, 5.25, 6.96, 5.95, 6.28, 7.91, 5.05, 6.13, 5.75, 4.75, 5.53, 4.91, 6.80, 6.57, 7.16];
        this.lineDataz[0].data = [7.63, 5.50, 5.51, 5.54, 7.31, 6.54, 5.25, 6.96, 5.95, 6.28, 7.91, 5.05, 6.13, 5.75, 4.75, 5.53, 4.91, 6.80, 6.57, 7.16];
        //始化弯曲角度（5个）
        this.lineData1[0].data = [135, 124, 101, 160, 159, 155, 169, 117, 169, 141, 154, 169, 153, 151, 95, 100, 169, 90, 112, 113];
        //初始化肌电信号
        this.lineData2[0].data = [595, 491, 680, 657, 763, 550, 551, 554, 696, 628, 791, 505, 731, 654, 525, 613, 575, 475, 553, 716];
    }
}
//自定义格式化输出； https://www.cnblogs.com/NazLee/p/11646023.html
var fomatFloat = function (value, n) {
    //保留n位小数
    var f = Math.round(value * Math.pow(10, n)) / Math.pow(10, n); //Math.round:四舍五入；Math.pow：幂
    var s = f.toString(); //以一个字符串表示的 Number对象值
    var rs = s.indexOf('.'); //indexOf()方法可返回某个指定的字符串值在字符串中首次出现的位置
    //若为整数
    if (rs < 0) {
        s += '.';
    }
    //小数点后面不足的位数会自动补 0
    for (var i = s.length - s.indexOf('.'); i <= n; i++) {
        s += "0";
    }
    return s;
}
