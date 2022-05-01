import prompt from '@system.prompt'//提示框
import router from '@system.router';//跳转模块
import fetch from '@system.fetch';//数据请求
import qs from 'querystring'//npm install qs,解析和格式化URL查询字符串
export default {
    data: {
        result: '',//反馈结果
        username: '',//用户名
        passwd: '',//密码
    },
    // 账号输入框
    inputAccount(e) {
        this.username = e.value;//获取输入框中的值并赋值给username
    },
    // 密码输入框
    inputPwd(e) {
        this.passwd = e.value;//获取输入框中的值并赋值给passwd
    },
    // 登录
    login(){
        //发起网络请求
        fetch.fetch({
            url:`http://123.60.215.221:8000/api/login/`,  //地址
            //将json格式转为string，此处为向后端发送验证的一个信息
            data:qs.stringify({'username':'1','passwd':'1'}),//发送到后端验证的信息
            responseType:"json", //请求的参数类型
            method: "POST",//方式post ,get等
            //如果获取数据成功则执行以下函数
            success:(resp)=>
            {
                this.jump(0);// 跳转到首页
            },
            //如果获取数据失败则执行以下函数
            fail:(resp)=>
            {
                this.res = resp.data;//将反馈结果赋值给res
                console.log("获取数据失败："+this.res)//打印出反馈的数据
            }
        });
    },
    //跳转
    jump(index)
    {
        //判断传递的参数
        switch (index) {
            //如果是传递参数0，跳转到首页
            case 0:
                router.push({
                    uri: "pages/shouye/index",
                    params: {
                        info: "这是路由传递的参数"
                    }
                });
                break;
            //如果是传递参数1，跳转到注册
            case 1:
                router.push({
                    uri: "pages/register1/register1",
                    params: {
                        info: "这是路由传递的参数"
                    }
                });
                break;
        }
    }
}