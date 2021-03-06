import barData from "../../datas/barData.js"
import todolist from"../../datas/todoList.js"
import router from '@system.router'
//导入路由模块
import fetch from '@system.fetch'
//导入fetch模块
export default {
    data: {
        todolist,
        num:2,
        num1:20 ,
        time:'8:00',
        state:'良好',
        tence:['良好','恶化','不变'],
        level:'1.5',
        winfo:"",
        barData,
        barOps: {
        xAxis: {
            min: 0,
            max: 30,
            display: true,
            axisTick: 10,
        },
        yAxis: {
            min: 0,
            max: 700,
            display: true,
        },
        loop: {
            margin: 2,
        }
    },
        addData() {
            this.$refs.barchart.append({
                serial: 0,
                data: [Math.floor(Math.random() * 400) + 400]
            })
        },
        goback(){
            router.back();//返回手机主页
        },
        onClick(){
            //发起网络请求
            fetch.fetch({
                url:`http://124.70.98.73:8000/api/appdataRequest/`, //资源地址
//          //设置header伪装
//          header:{'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.70'},
                responseType:"json", //请求的参数类型
            //如果获取数据成功的话执行以下函数
                success:(resp)=>
                {
                    this.num++;
                    this.num1+=20;
                    this.$refs.linechart.append({
                        serial: 0,
                        data: [Math.floor(Math.random() * 400) + 400]
                    })

//                    this.winfo = resp.data;  //令获取到的数据赋给winfo
//                    console.log("返回的数据："+this.winfo)//打印出数据

                },
            //如果获取数据失败则执行以下函数
                fail:(resp)=>
                {this.winfo = resp.data;
                    console.log("获取数据失败："+this.winfo)
                }
            });
        },
        change: function(e) {
            console.log("Tab index: " + e.index);
        },
    }}