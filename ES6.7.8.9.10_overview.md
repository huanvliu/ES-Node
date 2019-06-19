## ES7,ES2016

 1. Array.prototype.includes(value, index)
  - 数组中是否包含value，从index位置起，index默认为0，return boolean

 2. a**b
  - 求幂运算，同Math.pow(a,b)
  - 支持 a **=b
## ES8,ES2017

 1. 异步函数Async Function
 2. 共享内存和Atomics
 3. Object.values/Object.entries 
 4. string的padstart，endstart
 5. Object.getOwnPropertyDescriptors()
 6. 参数列表和函数调用中的尾逗号

## ES9，ES2018
  1. 异步迭代
  2. rest/spread
  3. 新正则表达式功能
    - u，y，s
    - new Reg(res,flag)
    - 后行断言 ?<=
  4. promise.prototype.finally()
  5. 模板字符串修改
  
## ES10，ES2019
  1. BigInt（第7种原始数据类型，表示任意精度整数）
  - const a = 1111111111111111n; //末尾追加n
  2. string.prototype.matchAll()
  - 返回一个迭代器，使用for of 遍历获取结果
  3. 动态导入
  - 导入分配给变量
  ```element.addEventListener('click', async() => {
  const module = await import(`./api-scripts/button-click.js`);
  module.clickEvent();
})
 ```
 4. 新增Array方法
 - Array.flat()
 - Array.flatMap()
 - 稳定的Array.prototype.sort(),以前使用快排，个数大于10时，排序时间不稳定
 
 5. Object.formEntries()
 - 与Map结合，将Map转换成Object
 6. string.trimStart() / string.trimEnd()
 - 去除空格
 7. function 的toString()
 8. try catch中catch的变量变为可选
 - try{ } catch { }
 9. 添加 globalThis 全局对象
 10. Symbol.description 
 - 返回Symbol的描述符
 11. Hashbang 语法
 - 执行服务端js 方式 ,以前：node test.js ;现在： ./test.js
 12. 类中的#语法
 - 定义private，static，公共变量
