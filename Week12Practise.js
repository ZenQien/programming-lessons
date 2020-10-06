var Arr = [];

document.getElementById('submit').addEventListener('click', function addTask(){

    var taskName = document.getElementById('taskInput').value;

    //console.log(taskName)

    Arr.push(taskName);

    //console.log(Arr)

    displayTasks();
})

// document.getElementById('remove').addEventListener('click', function remove(){

//     Arr.pop([0]);

// })

function displayTasks(){ //how to display the task added

    var list = document.getElementById('items'); //interacting with the items id in li tag

    //list.innerHTML = ''; //deletes everything from the list in HTML

    var li = document.creatElement('li'); //creating a new li tag in the html

    var newTask = Arr[Arr.length - 1]; // gets last task that was added

    var node = document.createTextNode(newTask); //creating room for tsask to be displayed

    li.appendChild(node); //putting node/text content into the li

    list.appendChild(li); // li goes into list

}

//For the task list, you must be able to interact with the list tags.
//This is what you do
//

