/**
 * js实现继承的方式，主要依靠原型链
 * 1. 原型链
 * 2. 借用构造函数
 * 3. 组合继承
 * 4. 原型式继承
 * 5. 寄生式继承
 * 6. 寄生组合式继承
 */

 //原型链，利用原型，让一个引用类型继承另一个引用类型的属性和方法
 //在子类中新增存在的方法，会覆盖父类中的方法，没有重载
 //缺点：1.子类实例共享父类引用类型数据; 2.不能给父类的构造函数传递参数
 function SuperType(){
     this.property = true;
 }

 SuperType.prototype.getSuperValue = function(){
     return this.property;
 }

 function SubType(){
    this.subProperty = false;
 }

 //继承SuperType，不能再构造函数中传递参数，否则所有子类实例共享
 SubType.prototype = new SuperType();
 SubType.prototype.getSubValue = function(){
     return this.subProperty;
 }

//借用构造函数，通过call或apply在子类的构造函数中执行父类的构造函数,最大的优势就是可以向构造函数中传递参数
//缺点：所有的属性都在构造函数中生成，没法共享
function SuperTypeA(){
    this.color = ["red", "blue", "green"];
}

function SubTypeA(){
    //继承父类，可以向构造函数中传递参数
    SuperType.call(this);
}


//组合继承，使用原型链和构造函数组合继承，也称伪经典继承
//缺点：两次调用父类的构造函数
function SuperTypeB(name){
    this.name = name;
    this.color = ["red", "green", "white"];
}

SuperTypeB.prototype.sayName = function(){
    console.log(this.name);
}
function SubTypeB(age){
    //继承属性
    SubTypeB.call(this, "Jack");
    this.age = age;
}

//继承方法
SubTypeB.prototype = new SuperTypeB();
SubTypeB.prototype.sayAge = function(){
    console.log(this.age);
}

//原型式继承，道格拉斯提出我们可以借助已有对象创建新对象，没必要自定义构造函数
//实现方式，创建一个临时的构造函数，通过原型链继承已有对象，返回新对象
function object(o){
    function F(){ };
    F.prototype = o;
    return new F();
}
//后来ES5规范化了原型式继承，提出一个公共的方法Object.create()实现原型式继承
//两个参数：一个是为新对象的原型，一个是为新对象增加额外属性的对象
var o = new Object();
o.name = "lj";
o.age = 22;
var new_o = Object.create(o);

//寄生式继承，这种继承与原型式继承的思路一致,
//缺点也是没有使用原型机制，贼没法共享函数
var o = new Object();
o.name = "lj";
o.age = 22;
function create(o){
    var clone = object(o); //通过调用函数来生成新对象
    clone.sayName = function(){  //使用某种方式来增强
        console.log(this.name);
    }
    return clone;
}

//寄生组合式继承，终极解决方案，比较完美的解决方案
function SuperType(){

}

function SubType(){

}
function inhert(SubType, SuperType){
    var prototype = object(SuperType.prototype); 
     prototype.constructor = SubType; //增强新对象
     SubType.prototype = prototype; //指定对象
}

inhert(SubType,SuperType);

