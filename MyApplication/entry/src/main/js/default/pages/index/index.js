// @ts-nocheck
import router from '@system.router';//导入路由模块
import fetch from '@system.fetch';//导入fetch模块
import qs from 'querystring'

export default {
    data: {
        winfo:""//动态获取数据
    },
    goback(){
        router.back();//返回手机主页
    },

    //当按钮按下时触发
    onClick(){
        //发起网络请求
        fetch.fetch({
            url:`http://124.70.98.73:8000/api/appdataRequest/`, //资源地址

            //        headers: {
            //          'Content-Type': 'application/x-www-form-urlencoded',
            //          'Accept': 'application/json, text/plain, */*'
            //        },
            //设置data
            data:qs.stringify({'device_id':'612fdd7b2cce4f0286235cf8_1630526856686'}),
            responseType:"json", //请求的参数类型
            method: "POST",
            //如果获取数据成功的话执行以下函数
            success:(resp)=>
            {
                this.winfo = resp.data;  //令获取到的数据赋给winfo
                console.log("返回的数据："+this.winfo)//打印出数据
            },
            //如果获取数据失败则执行以下函数
            fail:(resp)=>
            {
                this.winfo = resp.data;
                console.log("获取数据失败："+this.winfo)
            }
        });
    },

    onInit() {
    }
}