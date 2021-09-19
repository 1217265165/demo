import todoList from "../../common/datas/todoList.js";
import storage from '@system.storage';

export default {
    data:{
    todoList
    },
    onReady(){
        //获取我们设置好的storage、
        storage.get({
            key: 'storage_key',
            success: function(data) {
                console.log('call storage.get success: ' + data);
            },
            fail: function(data, code) {
                console.log('call storage.get fail, code: ' + code + ', data: ' + data);
            },
            complete: function() {
                console.log('call complete');
            },
        });
    },
//数据发生变化同步存储到storage
    setStorage(){
        storage.set({
            key: 'todoinfo',
        //数组
            value: JSON.stringify(this.todoList),
            success: function() {
                console.log('call storage.set success.');
            },
            fail: function(data, code) {
                console.log('call storage.set fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    remove(index) {
        console.log(index)
        this.todoList.splice(index, 1);
        this.setStorage();

    },
    switchChange(index)
    {
        this.todoList[index].status = !this.todoList[index].status
        this.setStorage();
    },
    addTodo() {
        this.todoList.push({
            info: '键盘输入',
            status: false
        })
        this.setStorage();
    },
    computed: {
        todoCount(){
            let num = 0 ;
            this.todoList.forEach(element => {
                if(! element.status)
                num++;
            });
            return num
        }
    }
}