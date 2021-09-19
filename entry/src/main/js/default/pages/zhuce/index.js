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
        router.push({
            uri: "pages/denglu/index",
            params: {
                info: "这是路由传递的参数"
            }
        });
}
}