function show(ele){
    ele.style.display = "block";
}


function hide(ele){
    ele.style.display = "none";
}


/**
 * 功能：根据屏幕的宽度改变body背景色
 * @returns {*}
 */
function changeBodyBackground() {
    //从小到大
    if(client().width <640){
        document.body.style.background = "yellow";
    }else if(client().width <960){
        document.body.style.background = "red";
    }else{
        document.body.style.background = "green";
    }
}


//封装浏览器可视区域的宽高


/**
 * 功能：。。。。
 * @returns {*}
 */
function client(){
    //1.区分是普通浏览还是ie678； ie678中的window.innerWidth属性值为undefined；
    if(window.innerWidth !== undefined){
        //普通浏览器；
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }else if(document.compatMode==="CSS1Compat"){//2.区分有没有dtd
        //CSS1Compat:有DTD约束
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        };
    }else{
        //没有DTD约束
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        };
    }
}




//2.用{}直接创建里面的方法；
//创建事件对象；
var Event2 = {
    addEvent: function (ele,eve,fn) {
        if(ele.addEventListener){
            ele.addEventListener(eve,fn);
        }else if(ele.attachEvent){
            ele.attachEvent("on"+eve,fn);
        }else{
            ele["on"+eve] = fn;
        }
    },
    removeEvent: function (ele,eve,fn) {
        if(ele.removeEventListener){
            ele.removeEventListener(eve,fn);
        }else if(ele.detachEvent){
            ele.detachEvent("on"+eve,fn);
        }else{
            ele["on"+eve] = null;
        }
    }
};



//思路：就是判断传递参数的第一个字母；
function $(str){
    //如果str是一个函数，那么就把他绑定到window.onload上；
    if(typeof str === "function"){
        window.onload = str;
    }else{
        //获取第一个字符
        var char = str.charAt(0);
        //判断：第一个字符是什么就调用什么方法
        if(char === "#"){
            return document.getElementById(str.slice(1));//去掉第一个字符
        }else if(char === "."){
            return document.getElementsByClassName(str.slice(1));//去掉第一个字符
        }else{
            return document.getElementsByTagName(str);//直接书写标签名，不需要去掉第一个字符了
        }
    }
}