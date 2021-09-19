
import router from '@system.router'
//导入路由模块
import fetch from '@system.fetch'
//导入fetch模块

export default{
    data:{
        num:1,
        num1:20 ,
        winfo:"",
    //动态获取数据
    },
    goback(){
        router.back();//返回手机主页
    },
    onClick(){
     //发起网络请求
        fetch.fetch({
            url:`https://ai.baidu.com/`, //资源地址
        //设置header伪装
            header:{'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.70'},
            responseType:"json", //请求的参数类型
        //如果获取数据成功的话执行以下函数
            success:(resp)=>
            {
                this.num++;
                this.num1+=20;
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
}