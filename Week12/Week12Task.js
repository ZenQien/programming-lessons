var button = document.getElementById('remove').addEventListener
('click', buttonClick);

var itemList = document.querySelector('#items');

    function buttonClick(){

       console.log(itemList.firstElementChild);
       itemList.firstElementChild.textContent = ' ';

}

// Here's the javascript for the calculator task

var but = document.getElementByClass("butts");
var num = document.getElementById("num1");
var num = document.getElementById("num2");
var total = document.getElementsByTagName("h4")

for (var thisbutt of but){
    thisbutt.addEventListener('click', function(){
        if(this.innerHTML == "=")
        total.value = eval(total.value);
        else 
        calc.value += this.innerHTML;
    })
}