// const myName = "Chris";
// function sayHi(){
//     console.log("hi"+" "+myName);
// }

// sayHi();

// function sayUHi(userName , lastName){
//     console.log("hi"+" "+userName+" "+lastName);
// }

// sayUHi("Chris","couribary");
// sayUHi("couribary"," Sally");

// function VarsayUHi(userName , age){
//     console.log("hi"+" "+userName+" "+"you are "+" "+age+" "+" years  old");
// }

// const billy =" Billy";
// const chris ="Chris";
// const sally ="Sally";

// VarsayUHi(billy , 28);
// VarsayUHi(chris , 30);
// VarsayUHi(sally , 40);

// function numberDouble(num){
//     console.log(num * 2);
// }

// numberDouble(10);

// function returnNumberDouble(num){
//    return num * 2;
// }

// console.log(returnNumberDouble(40));

// // Function expretion
// var sayHi = function(myName){
//     if(!myName){
//         var myName = "Bob";
//     }
//     console.log("Hi "+"  "+myName);

// }
// sayHi();
// const squaredNumber = function(num){
//     return num * num;
// }

// console.log(squaredNumber(4));

// const myInfo = {name: "Chris", age:30};
// function changeAgeTo100(myObj) {
//     myObj.age = 100;
// }

// console.log(myInfo);
// changeAgeTo100(myInfo);
// console.log(myInfo);

// const myNumbers = [1,2,3,4,5];

// function addToArray(myArr){
//     myArr.push(6);
// }
// console.log(myNumbers);
// addToArray(myNumbers);
// console.log(myNumbers);

// // Nested Functions(Closures)

// function squareAndMultiply(num1,num2){

//     function squarer(x){
//         return x * x;
//     }
//     function multiplyBy10(y){
//         return y * 10;
//     }

//     return squarer(num1) * squarer(num2);
// }

// console.log(squareAndMultiply(10,60));
// console.log(squareAndMultiply(2,4));

// function squareAndMultiply1(num1,num2){

//     function squarer(x){
//         return x * x;
//     }
//     function multiplyBy10(y){
//         return y * 10;
//     }

//     return squarer(num1) * multiplyBy10(num2);
// }

// console.log(squareAndMultiply1(4,4));


// // function nameFormatter(firstName, lastName ,age){

// //     function formatNames(arg1,arg2){
// //         return arg1+" "+arg2;
// //     }

// //     const formattedName = formatNames(firstName,lastName);
// //     return formattedName;

// // }

// // console.log(nameFormatter("Chris","Jones",20));

// function nameFormatter1(firstName, lastName ,age){

//     function formatNames(arg1,arg2){
//         return arg1+" "+arg2;
//     }

//     // const formattedName = formatNames(firstName,lastName);
    
//     function dataFormatter(fullName , num){
//         const formattedData = {
//             name: fullName,
//             age:num
//         }
//         return formattedData;
//     }

//     const formattedName = formatNames(firstName,lastName);

//     return dataFormatter(formattedName,age);

// }

// console.log(nameFormatter1("Chris","Jones",20));
// Advanced  Function
 
var sayHi=()=> {
    console.log("Hi  I'm using an arrow function");
}
sayHi();

const multiplier = (num1,num2) => {
    return num1  * num2;
}

console.log(multiplier(4,2));

const users = [
{name:"Chris", age:60},
{name:"Jane", age:30},
{name:"Billy", age:45}
];

const userNameList = users.map(function(user) {

    return user.name;

});
console.log(userNameList);

function mapUserNameList(myArr) {

    const userNameList = myArr.map(function(user) {

    return user.name;

});
    return userNameList;
}
console.log(mapUserNameList(users));

const mapUserNameList1 = (myArr) => {

    const userNameList = myArr.map((user) => {

    return user.name;

});
    return userNameList;
}
console.log(mapUserNameList1(users)+"  With arrow function ");

const multiplier1 = (x,y) => x * y; // scape the return key word

console.log(multiplier1(2,10));

const squarer = num => num*num;
console.log(squarer(100));

const sayHi2 = () =>{
    console.log("say hi");
}
 sayHi2();

 const mapUserNameList2 = (myArr) => myArr.map((user) => {

    return user.name;

});
    

console.log(mapUserNameList2(users));

const mapUserNameList3 = (myArr) => myArr.map((user) => user.age);
    

console.log(mapUserNameList3(users));

const numbers = [1,2,3,4,5,6,6,7,7,8,10,9];

const filteredNumbers = numbers.filter ( (num) => num === 5 );

console.log(filteredNumbers);

const filteredNumbers2 = numbers.filter ( (num) => num % 2 != 0 );

console.log(filteredNumbers2);
// 21min

const doubledNumbers = (num) => {
    const numberContainer = [];

    num.forEach( (n) =>{

        const doubled = n*2;
        numberContainer.push(doubled);
    } );

    return numberContainer;
}
 
console.log(doubledNumbers(numbers)); 

const numberMulptiplier = (x,y) => {
   x = x || 5;
   y = y || 10;
   return x * y
}

console.log(numberMulptiplier());

const stringSplitter = (str) => str.split(" ");

console.log(stringSplitter("Hi there"));

const bankAccount = {

    canSpendMoney: true,
    balance : 100
}

const purchaseItem = (price , acct=bankAccount) => {

    if(acct.canSpendMoney && acct.balance >= price)
    {
        acct.balance -= price;

        if(acct.balance <= 0) 
        {
            acct.canSpendMoney = false;
        }
        return true;
        
        
        }else{
            return false;
    }
}

// console.log(purchaseItem(1000));
// console.log(bankAccount);
// console.log(purchaseItem(10));
// console.log(bankAccount);
// console.log(purchaseItem(90));
// console.log(bankAccount);
// console.log(purchaseItem(90));
// console.log(bankAccount);
console.log(purchaseItem(400 ,{ canSpendMoney:true , balance :400}));
console.log(bankAccount);
console.log(purchaseItem(90));
console.log(bankAccount);

function logAllArgument(x,y,z){

    console.log(arguments);
}

logAllArgument(4, 5, 6, 8, 5);
//  WHEN YOU DON'T KNOW HOW MANY ENTRIES YOU MAY HAVE

function logAllArgument1(){

    const args = Array.prototype.slice.call(arguments , logAllArgument1.length);

    console.log(args.sort());
}

logAllArgument1(1, 2, 2, 8, 5);
logAllArgument1("HI","HELLO","HOW ARE YOU");

function logAllArgument2(...nums){


    console.log(nums.length);
}

logAllArgument2(1, 2, 2, 8, 5);

const multiply = (multiplier, ...nums) => nums.map( (n) => multiplier * n);

console.log(multiply(10,5,1,3,6));

// constructor 

function Dog(years, breed){

    this.age = years;
    this.type = breed;
}

// CREATING AN OBJECT 

const spike = new Dog(3 , " Golden Retriever");
const fido = new Dog( 5,"Poodle");
   
console.log(spike);
console.log(fido);

function Dog1(years, breed){

    this.age = years;
    this.type = breed;

    console.log(this);
}

// CREATING AN OBJECT 

const spike1 = new Dog1(3 , " Golden Retriever");
const fido1 = new Dog1( 5,"Poodle");

function Dog2(years, breed){

    const that = this;    
    that.age = years;
    that.type = breed;

    setInterval( function(){

        that.age +=1;
        // console.log(that);

    },1000);
}

// CREATING AN OBJECT 

const spike2 = new Dog2(3 , " Golden Retriever");
const fido2 = new Dog2( 5,"Poodle");

function Dog3(years, breed){

    this.age = years;
    this.type = breed;

    setInterval( () => {

        this.age +=1;
        // console.log(this);

    },3000);
}

// CREATING AN OBJECT 

const spike3 = new Dog3(3 , " Golden Retriever");
const fido3 = new Dog3( 5,"Poodle");