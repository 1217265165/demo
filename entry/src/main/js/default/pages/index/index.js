import users from "../../datas/userinfo.js"
import router from '@system.router';
export default {
    data: {
        title: "",
        users
    },
//页面初始化触发的应用周期钩子函数
    jump(index)
    {
        router.push({
            uri: "pages/shouye/index",
            params: {
                info: ""
            }
        });
    }
}
