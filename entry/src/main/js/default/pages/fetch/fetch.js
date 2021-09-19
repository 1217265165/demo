import fetch from '@system.fetch';
export default {
    data: {
        title: 'World'
    },
    onReady(){
        fetch.fetch({
            url:'https://api.seniverse.com/v3/weather/now.json?key=WNEUXAAE2G&location=南京&language=zh-Hans&unit=c',
            success(resp)
            {
                console.log("数据返回成功"+JSON.stringify(resp));
            }
        })

}
}
