var myList = ['swimming','splunking','jogging'];

// display the todos array
function displayList(){
    console.log('My List: ',myList);
}

// add a new element to the list array
function addItems(item){
    myList.push(item);
    displayList();
}

// change an existing element in the list array
function changeItems(position, newValue){
    myList[position] = newValue;
    displayList();
}

// remove an element from the list array
function deleteItems(position){
    myList.splice(position,1);
    displayList();
}