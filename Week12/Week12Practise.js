var Arr = []; //Define an array (does nothing for now)

document.getElementById('submit').addEventListener('click', submitTask);{//Grabs the button id, and responds to a click and runs submitTask function

function submitTask(){ // submit task function

    var taskName = document.getElementById('taskInput').value; //scan for input task
    
    console.log(taskName); // display inputTask on console

}
} // why

    /*
    Arr.push(taskName);

    console.log(Arr)

    //displayTasks();
*/

/*

}
document.getElementById('remove').addEventListener('click', removeTask);{

    // var task = document.querySelector('ul');
    // list.addEventListener('click', function(ev){
    //     if (ev.target.tagName === 'LI'){
    //         ev.target.classList.toggle('checked');
    //     }
    // }, false);

    function removeTask(){

    Arr.pop([0]);

}


function displayTasks(){ //how to display the task added

    var list = document.getElementById('items'); //interacting with the items id in li tag

    //list.innerHTML = ''; //deletes everything from the list in HTML

    var li = document.creatElement('LI'); //creating a new li tag in the html

    var newTask = Arr[Arr.length - 1]; // gets last task that was added

    var node = document.createTextNode(newTask); //creating room for task to be displayed

    li.appendChild(node); //putting node/text content into the li

    list.appendChild(li); // li goes into list

}

}
*/
