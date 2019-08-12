//在对应的console.log中填入数字，按从小到大输出
setImmediate(function(){
    console.log();
});

setTimeout(function(){
    console.log();
},100);

setTimeout(function(){
    console.log();
},0);

process.nextTick(function(){
    console.log();
    process.nextTick(function(){
        console.log();
        process.nextTick(function(){
            console.log();
        });
    });
});

new Promise(function(resolve){
    console.log();
    process.nextTick(function(){
        console.log();
    })
    resolve();
}).then(function(){
    console.log()
}).then(function(){
    console.log()
});


new Promise(function(resolve){
    process.nextTick(function(){
        console.log();
    })
    resolve();
}).then(function(){
    console.log()
}).then(function(){
    console.log()
});

Promise.resolve().then(function(){
    console.log();
}).then(function(){
    console.log();
})

console.log();
