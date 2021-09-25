import tabbarItems from '../../common/datas/tabbarItem.js';
import router from '@system.router';
export default {
    data:{
        tabbarItems
    },
    //父组件传递props:["index"],
    props:{
           index:{
               type:Number
           },
        default(){
            return 0;
        }
    },
    jump(index)
    {
        switch (index) {
            case 0:
                router.push({
                    uri: "pages/shouye/index",
                    params: {
                        info: "这是路由传递的参数"
                    }
                });
                break;
            case 1:
                router.push({
                    uri: "pages/baogao/index",
                    params: {
                        info: "这是路由传递的参数"
                    }
                });
                break;
            case 2:
                router.push({
                    uri: "pages/shebei/index",
                    params: {
                        info: "这是路由传递的参数"
                    }
                });
                break;
            case 3:
            router.push({
                uri: "pages/wode/index",
                params: {
                    info: "这是路由传递的参数"
                }
            });
            break;
        }
    }
}