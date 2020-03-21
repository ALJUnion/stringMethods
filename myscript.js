// Question 1
let coffee = "french";
let flavor = "vanilla";
let order = french + "" + flavor;
console.log(order);

//Question 2

let coffee = 3;
let chai = 10;
console.log(coffee + chai);
console.log(`${coffee} + ${chai}`);
console.log (`coffee add chai is ${coffee + chai}`);

//Question 3
//
 function myFunction(){
     let str = "Can you guess what is the index of 42 is? I am sure you will be surprised!";
     let answer = "I am sure you will be surprised!";
     console.log(answer);
 }

 //length method

 let str = "Can you guess how long this string is? I am sure you will be surprised!";
 let answer = (str + ' ' + str.length);
 console.log(answer);

 //Question 4

 //replacing values in a string


 let str1 = "How you doin?";
 let str2 = str1.replace("doin", "doing Champ")
 function thisfunction(){
     prompt(str1);
     prompt(str2);
 }
 thisfunction();

 //question 5

 function myfunction(){
     let str = "       SOCIAL DISTANCING!!!";
     alert(str.trim());
 }
 myFunction();

 //Question 6

 //upperCase
 function myFunction(){
     let str = "social distancing!!";
     let res = str.toUppercase();
 }
 console.log(res)


 //lowerCase
 function myFunction(){
    let str = "QuiEt VoICeS...PLEASE";
    let res = str.toLowercase();
}
console.log(res)