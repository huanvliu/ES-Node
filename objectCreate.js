/* javascript 总结创建对象的几种方式
    1.工厂模式
    2.构造器模式
    3.原型模式
    4.组合使用构造器和原型
    5.动态原型模式
    6.寄生构造函数模式
    7.稳妥构造函数模式
*/

//以前常用的对象创方式
var personA = new Object();
person.name = "Jack";
person.age = 18;
person.job = "IT";
person.sayAge = function(){
    console.log(this.age);
}

//推荐使用字面量方式
var personB = {
    name: "Jack",
    age: 18,
    job: "IT",
    sayAge: function(){
        console.log(this.age);
    }
}

//上述方式适合创建单个对象，当对象过多时，会出现大量重复的代码。
//工厂模式 :缺点,我们没法识别对象的类型，因为ES5没有类的概念
function createPerson(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayAge = function(){
        console.log(this.age);
    }
    return o;
}
var personC = createPerson("Jack", 26, "IT");

//构造器模式：缺点，每个对象中的函数都是独立的，这些功能函数应该可以共享的
//里面的sayAge是每个对象都会创建一个独立的内存空间
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayAge = function(){
        console.log(this.age);
    }
}

/**
 * new 所做的事
 * 1. 创建一个新对象
 * 2. 将构造函数的作用域赋值给新对象，也就是this指向新对象
 * 3. 执行构造函数中的代码
 * 4. 返回新对象
 */
var personD = new Person("Jack", 25, "IT");

//原型模式，解决数据和函数共享问题，缺点：引用类型的数据共享会造成多个实例互相影响
/**
 * 什么是原型？
 * 每个函数在创建时都会默认创建一个prototype属性，指向这个函数的原型对象
 * 而每个实例有一个__proto__属性，指向这个实例对应构造函数的原型对象
 * 每个原型对象有一个constructor属性，指向prototype属性所在的构造函数
 * 所有的原型属性都在实例之间共享
 */

function PersonA(){

}

PersonA.prototype.name = "Jack";
PersonA.prototype.age = 24;
PersonA.prototype.job = "IT";
PersonA.prototype.sayAge = function(){
    console.log(this.age);
};
var personE = new PersonA();

//当然也有简洁的方式，赋值给字面量
//同时会有一个注意点，这时会切断已有对象和原型的关系，同时，constructor对应的构造器不在是PersonA。
personA.prototype = {
    constructor: PersonA, //最好自己补上这个映射关系
    name: "Rose",
    age: 24,
    job: "singer",
    sayAge: function(){
        console.log(this.age);
    }
}

//组合使用构造器和原型模式，将需要私有的属性放在构造器中，需要共享的方法放在原型对象中
function PersonB(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
}
PersonB.prototype.sayAge = function(){
    console.log(this.age);
}

//动态原型模式，虽然组合使用构造函数和原型模式能很好的解决对象创建的问题，但是构造函数和原型是相互独立的，对于许多人会感到困惑
//所以动态原型模式就是为了解决这个问题.注意点：不要使用字面量给原型赋值，这样会切断已经创建的对象和原型的联系。

function PersonC(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    if(typeof this.sayAge != "function"){
        PersonC.prototype.sayAge = function(){
            console.log(this.age);
        }
    }
}

//寄生构造函数,在某些特殊情况下使用
//函数于工厂模式一样，只是使用了构造函数，加return会改变new 创建的对象，比如修改一些已经存在的对象，但构造函数又不能修改，
//例如给Array增加新方法
function PersonD(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayAge = function(){
        console.log(this.age);
    }
    return o;
}

var personF = new PersonD("Jack", 22, "IT");

//修改Array
function PipedArray(){
    var values = new Array();
    values.push.apply(values, arguments);
    values.toPipedString = function(){
        return this.join("|");
    }
    return values;
} 


//稳妥构造函数，什么是稳妥：没有公共函数或属性，也不使用this，在一些特殊的，安全的环境中使用（禁用this和公共属性）
//实现方式与寄生构造函数类似，有两点不同：一是新创建的对象方法不使用this，二是不使用new。
//如下，就只有通过sayAge函数访问age，即使别的方法可以传入和新增数据成员，但也不可能有别的办法访问数据成员。
function PersonE(name, age, job){
    var o = new Object();
    //可以添加私有属性
    o.sayAge = function(){
        console.log(age);
    }
    return o;
}


















