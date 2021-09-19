import prompt from '@system.prompt'
import router from '@system.router';
export default {
    change(e){
        prompt.showToast({
            message: "value: " + e.value,
            duration: 3000,
        });
    },
    enterkeyClick(e){
        prompt.showToast({
            message: "enterkey clicked",
            duration: 3000,
        });
    },
    buttonClick(e){
        this.$element("input").showError({
            error: 'error text'
        });
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
            case 3:
                router.push({
                    uri: "pages/zhuce/index",
                    params: {
                        info: "这是路由传递的参数"
                    }
                });
                break;

        }
    }
}
