import prompt from '@system.prompt';
import router from '@system.router';
export default {
    two(){
        router.push ({
            uri:'pages/register2/register2', // 指定要跳转的页面
        })
    },
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
    }

}