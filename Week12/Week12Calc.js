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

// Below

function solve(operator) {

var num1 = document.getElementsByClassName("inp")[0].value;
num2 = document.getElementsByClassName("inp1")[0].value;

    // num1 = parseFloat(num1);
    // num2 = parseFloat(num2);

    switch(operator) {

        case "plus":
             console.log(parseInt(num1) + parseInt(num2));
            break;

        case "minus":
            console.log(parseInt(num1) - parseInt(num2));
            break;
        
        case "times":
            console.log(parseInt(num1) * parseInt(num2));
            break;
        
        case "divide":
            console.log(parseInt(num1) / parseInt(num2));
            break;
    }

}

// Above

// for (var i = 0, l = oper.length; i < 1; i++){
//     oper[i].onclick = shoans;
// }

// const calc = document.querySelector('.calculator')
// const keys = calculator.querySelector('.calculator_keys')

// keys.addEventListerner('click, e =>')