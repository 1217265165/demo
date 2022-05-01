import prompt from '@system.prompt';
import fetch from '@system.fetch';
import router from '@system.router';
export default {
    showDialog(e) {
        this.$element('simpledialog').show()
    },
    cancelDialog(e) {
        prompt.showToast({
            message: 'Dialog cancelled'
        })
    },
    cancelSchedule(e) {
        this.$element('simpledialog').close()
        prompt.showToast({
            message: 'Successfully cancelled'
        })
    },
    setSchedule(e) {
        this.$element('simpledialog').close()
        prompt.showToast({
            message: 'Successfully confirmed'
        })
    },
    two(){
        router.push ({
//            uri:'pages/denglu/index',
            uri:'pages/register3/register3', // 指定要跳转的页面
        })
    }
}