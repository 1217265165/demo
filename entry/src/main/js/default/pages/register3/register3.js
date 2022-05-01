import prompt from '@system.prompt';
import router from '@system.router';


export default {
    data: {
        frames: [
            {
                src: "common/image/数字-5.png",duration: "1000"
            },
            {
                src: "common/image/数字-4.png",duration: "1000"
            },
            {
                src: "common/image/数字-3.png",duration: "1000"
            },
            {
                src: "common/image/数字-2.png",duration: "1000"
            },
            {
                src: "common/image/数字-1.png",duration: "1000"
            },
        ],
    },

   onInit() {
    var timeoutID = setTimeout(function() {
        router.push ({
            uri:'pages/denglu/index',
        })
    }, 5000);
},

    handleStart() {
        this.$refs.animator.start();
    },
    handlePause() {
        this.$refs.animator.pause();
    },
    handleResume() {
        this.$refs.animator.resume();
    },
    handleStop() {
        this.$refs.animator.stop();
    },
};