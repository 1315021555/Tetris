//手写深拷贝函数
function deepClone(obj){
    if (typeof obj != 'object' || obj == null){
        return obj;
    }

    let result;
    if (obj instanceof Array){  //如果是数组
        result = [];
    }
    else{                       //如果是对象
        result = {};
    }

    for (let key in obj){
        //console.log(key);
       // result[key] = obj[key]; //深拷贝了最外层

       //要实现嵌套对象的深拷贝，需要递归调用deepClone;
       result[key] = deepClone(obj[key]);
    }
    return result;
}