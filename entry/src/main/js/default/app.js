export default {
    // 应用创建的时候触发的生命周期钩子函数
    onCreate() {
        console.info('AceApplication onCreate');
    },
    // 销毁应用的时候触发
    onDestroy() {
        console.info('AceApplication onDestroy');
    }
};
