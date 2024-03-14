var x
let y
const z = 15;
x = 10;
y = 20;
console.log(x, "", y, "", z);

var name = "John";
var lastname ="sSon";
console.log(name);
console.log(name);

var a = "20";
var b = "10"
console.log(name + lastname);
console.log(name + x)
console.log(parseInt(a) + parseInt(b)) 
x++
console.log(x);

///// datatype//////
var xx = 123;
var tt = "hello";
var ar = ["red","blue",];
ar.push("black");

console.log(typeof(xx));
console.log(typeof(tt));
console.log(ar[1])
console.log(ar.length)
console.log(ar)

var obj = {
    Na: "ly",
    laNa: "sander"
};

console.log(obj.name);
console.log(obj.name);



function log(data){
    console.log(data);
    return;
}
log("test");

// function plus1(x, y){
//     return plus(x, y);
// }

// log(plus1(3, 4));

function area(w,h,t){
    if(t=="square")
    return w*h;
    else return Math.PI*x*x;
}
log(area(10,10,'square'));
log(area(10));

var myArr = ['string',123,{text:''}]
var myArr2 = new Array('string',123,{text:'test'});
console.log(myArr2);

for(let i=0;i < myArr.length; i++){
    console.log("index: " +i, myArr[i])
}

var myArr3 = [
    { name : "test1" },
    { name : "test2" },
    { name : "test3" },
    { name : "test4" }
];
var myNewarry3 = myArr3.map(function(val, ind){
    return val.name
});
console.log(myArr3);

var myObj = {};
var myObj2 = new Object();
console.log("type of myObj", typeof myObj);
console.log("type of myObj", typeof myObj2);

myObj.name = "GOOGLE";
myObj.lastname = ".com";
myObj.age = "30";
console.log(myObj);

//if else for//
var test1 =[
    { x: 13, y: 14},
    { x: 23, y: 9},
    { x: 87, y: 62},
    { x: 57, y: 27}
]

test1.forEach(val => {
    if(val.x > 50)console.log("x eqaul to", val.x);
    else  console.log("to", val.y);
})
/// Switch case ///

//For loop//
for(let x = 1;x<=20;x++){
    console.log("x - ", x);
}

let aaa = 20
while(aaa <= 20){
    console.log("A equal = ", aaa);
    aaa++;
}