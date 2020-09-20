var listItems = document.getElementById('items').getElementsByTagName('li'),

    liarray = map(listItems, getText);

function map(arrayLike, fn){
    var ret = [], i = -1, len = arrayLike.length;
    while (++i < len) ret[i] = fn(arrayLike[i]);
    return ret;
}

function getText(node){
    if (node.nodeType === 3) return node.data;
    var txt = '';
    if (node = node.firstChild) do {
        txt += getText(node);
    } while (node = node.nextSibling);
    return txt; //Got this from the internet, sort of know what it does
}

var remove = document.getElementById('remove').addEventListener
('click', remove);

function remove(){
    ret.shift();
}


// var button = document.getElementById('remove').addEventListener
// ('click', buttonClick);

// var itemList = document.querySelector('#items');

//     function buttonClick(){

//        console.log(itemList.firstElementChild);
//        itemList.firstElementChild.textContent = ' ';

// }



