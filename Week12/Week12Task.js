var button = document.getElementById('remove').addEventListener
('click', buttonClick);

var itemList = document.querySelector('#items');

    function buttonClick(){

       console.log(itemList.firstElementChild);
       itemList.firstElementChild.textContent = ' ';

}


