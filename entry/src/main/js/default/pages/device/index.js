// @ts-nocheck
import qs from 'querystring'//npm install qs,解析和格式化URL查询字符串
import router from '@system.router'//导入路由模块
import fetch from '@system.fetch'//导入fetch模块
import prompt from '@system.prompt';//提示框
export default {
    data: {
        id:'',//id初始化为空
        wifi:'',//wifi名称初始化为空
        state:'尚未连接',//状态设为尚未链接，正在连接中
        wifiName:'',//用来获取输入的wifi名称
        password:''//用来获取输入的wifi密码
    },
    // wifi输入框
    inputWifi(e) {
        this.wifiName = e.value;//将输入框中的变量赋值给wifiName
    },
    // wifi密码输入框
    inputPwd(e){
        this.password = e.value;//将输入框中的变量赋值给password
    },
    //发起连接
    on(){
        //发起网络请求
        fetch.fetch({
            url:`http://124.70.98.73:8000/api/appdataRequest/`,//请求地址
            data:qs.stringify({'device_id':'618bbb6ed0a1830285d59e2c_pjs_xxp'}),//发送的验证信息
            responseType:"json", //请求的参数类型
            method: "POST",//方式为 post
        //如果获取数据成功的话执行以下函数
            success:(resp)=>
            {
                this.id = resp.data;  //令获取到的数据赋给id
                this.wifi='哈哈';//赋值wifi
                this.state='正在连接中';//状态改为正在连接中
                console.log("返回的数据："+this.id)//打印出反馈数据
                //提示框显示连接成功
                prompt.showToast({
                    message: 'success connect'
                })
            },
        //如果获取数据失败则执行以下函数
            fail:(resp)=>
            {
                this.id = resp.data;  //令获取到的数据赋给id
                console.log("获取数据失败："+this.id)//打印出反馈数据
                //提示框显示连接失败
                prompt.showToast({
                    message: 'connection failed'
                })
            }
        });
    },
    //断开练级
    off(){
        this.wifi='无';//wifi置为无
        this.id='无';//wifi置为无
        this.state='尚未连接';//状态改为尚未链接
        prompt.showToast({
            message: '连接已断开'
        })
},
}