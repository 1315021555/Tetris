# JS实现俄罗斯方块

## 一、思路

### 1）界面

- 先用html+css创建一个n*m的矩形地图。
- 分数面板、开始游戏、暂停、重新开始等
- 下一个方块的提示（可选）



### 2）逻辑

先不实现方块的旋转，只有下落和左右。



- **控制左右移动：**
  - 小键盘左右控制方块


- **生成新方块:**
  - 碰到底部停止下落，在顶部生成新方块
- **消行：**
  -  当一行满了，消去该行，上方方块下落，分数+1
- **游戏结束：**
  - 当方块超出顶部，游戏结束




# 创新

- 方块的旋转（q）
- 加速下落
- 双人（道具）模式
  - 反向
  - 突变

## 

## 16宫格模拟Model

| row/col | 0    | 1    | 2    | 3    |
| ------- | ---- | ---- | ---- | ---- |
| 0       |      |      |      |      |
| 1       | Z    | z    |      |      |
| 2       |      | z    |      |      |
| 3       |      |      |      |      |



https://bytedance.feishu.cn/docx/doxcnECGEFkCKYqbxaDipK1qrVf



## 问题：

1. init()的位置导致报错----变量声明提升
2. setInterval 的累积问题


## 收获：

### 旋转算法

善于找规律

### parseInt

分析字符串，返回整数

第二个参数是进制数

### 手写实现对象的深拷贝

```html
<script>
    /*     //测试
        var oldObj = {
            name:"lzc",
            age:18,
            friend:{
                name:"lyy"
            }
        }

        var newObj = deepClone(oldObj); 
        newObj.name = 'lyy';
        newObj.friend.name='lzc';

        console.log(oldObj);
        console.log(newObj); */

        
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


    </script>
```



### 浏览器Debug

设置断点，逐步查看

### 处理大项目思路

一个功能对应一个方法



### 定时器

#### setInterval

- html5规定默认时间间隔为setTimeout 为4ms（最小值），setInterval 为10ms

  具体的最小值还要看浏览器的解析

- 传入函数参数时候发生隐式丢失





# To do

## 背景

## 模式选择

- 小黑子模式
- idol模式