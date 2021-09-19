//xxx.js
import frames from "../../common/datas/frames.js"

export default {
    data: {
        frames,
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
        }
    }
};