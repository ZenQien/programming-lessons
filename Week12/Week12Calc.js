// Here's the javascript for the calculator task

// var plus = document.getElementById('plus').addEventListener
// ('click', buttonClick);
// var minus = document.getElementById('minus').addEventListener
// ('click', buttonClick);
// var times = document.getElementById('times').addEventListener
// ('click', buttonClick);
// var divide = document.getElementById('divide').addEventListener
// ('click', buttonClick);

// var but = document.getElementByClass("butts");
// var num1 = document.getElementById("num1");
// var num2 = document.getElementById("num2");
// var total = document.getElementsByTagName("h4")

// function buttonClick(){

//     if(plus){
//         console.log('hi'); //Trying to test this button
//     }
//     else if(minus){
//         total = eval(num1+num2);
//         return total;
//     }
//     else if(times){
//         total = eval(num1+num2);
//         return total;
//     }
//     else if(divide){
//         total = eval(num1+num2);
//         return total;
//     }
// }



function solve() {

var num1 = document.getElementsByClassName("inp")[0].value;
num2 = document.getElementsByClassName("inp1")[0].value;
op = document.getElementsByClassName("oper");
 ans = 0;

    // num1 = parseFloat(num1);
    // num2 = parseFloat(num2);

    console.log(num1);
    console.log(num2);


    switch(op) {

        case "plus":
            ans = eval(num1 + num2);
            break;

        case "minus":
            ans = eval(num1 - num2);
            break;
        
        case "times":
            ans = eval(num1 * num2);
            break;
        
        case "divide":
            ans = eval(num1 / num2);
            break;
    }

    console.log(ans);
}

// for (var i = 0, l = oper.length; i < 1; i++){
//     oper[i].onclick = shoans;
// }