1. 要事第一，小细节，但很重要
&nbsp;&nbsp;&nbsp;&nbsp;不要使用否定表达式，使用条件简写来表示boolean，否定表达式不符合人的思维，看代码难受。

```
  const isEmailChecked = (email) => {
      somecode;
  }
  
  if(isEmailChecked(email)){
      somecode;
  }
  
  ```

2. 对于多个条件使用 Array.includes
  不是很好的：if( somevar === 'b' || a === 'c' || .....),多了以后很难理解，且难看
  好一点的：if(['b','c'].includes(somevar)) ，数组可能会很长
  提取数组：const checkVar = ['b','c']; if(checkVar).includes(somevar)
  
3. 匹配所以条件，使用Array.every 或者 Array.find

``` const cars = [
        {model:'bmw',year:'1'},
        {model:'jili',year:'2'},
        {model:'aodi',year:'3'}
 ]
 
 不使用循环加if，代码比较臃肿，如果是函循环if数式编程不会被允许。
 
const checkEveryModel = (model) => {
    return cars.every(car =>{
        car.model === model;
    })
}
```

4. 匹配部分条件，使用Array.some
   
   同上，碰到只要有一个满足就会返回true
   
5. 提前返回，而不是使用if...else 分支
  
   当分支结构过重，可以使用三元操作符，&& || 逻辑操作符重构。
  
6. 使用ES6的Map 索引或映射，替代switch case 语句。或者专门新建一个类来保存case的所有值

7. 使用自判断链接和空合并
   
   ``` 
   我们常常会写，判断对象是否存在，对象的某个值是否存在(也是个对象),去这个值的某个值
   const xxx = car || car.model || car.model.xxx || default
   
   使用新语法自判断链接
   
   const xxx =  car?.model?.xxx
   
   ```
  
