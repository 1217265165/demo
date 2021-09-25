import router from '@system.router';
export default {
    data:{
        title:"",
        num:0,
        date:'2021- 8- 8'
    },

    jump(index)
    {
        switch (index) {
            case 0:
                router.push({
                    uri: "pages/dangqian/index",
                    params: {
                        info: "这是路由传递的参数"
                    }
                });
                break;
            case 1:
                router.push({
                    uri: "pages/jinri/index",
                    params: {
                        info: "这是路由传递的参数"
                    }
                });
                break;

        }
    },
    changeNum(){
        this.num++;
    },
    swipeTo() {
        this.$element('swiper').swipeTo({index: 2});
    },
    showNext() {
        this.$element('swiper').showNext();
    },
    showPrevious() {
        this.$element('swiper').showPrevious();
    },

    dateChange(e){
    console.log(JSON.stringify(e))
    this.date = e.year + "年" + e.month + "月" + e.day + "日"
}
}

