
var myObject = {

bucketList : [],

displayList : function(){
    console.log('My bucket list : ',this.bucketList);
},

// add items as objects
addItem : function(item){
    this.bucketList.push(
        {description : item,
    completed : false});
    this.displayList();
},

// change the description of an item
changeItem : function(position, newValue){
    this.bucketList[position].description = newValue;
    this.displayList();
},

// delete an item
deleteItem : function(position){
    this.bucketList.splice(position,1);
    this.displayList();
},

// toggle completed an item
toggleCompleted : function(position){
    var item = this.bucketList[position];
    item.completed = !item.completed
    this.displayList();
}

}