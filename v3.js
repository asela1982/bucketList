
var myObject = {

    myList : ['splunking','swimming','traveling'],

    // display the list
    displaylist : function(){
        console.log(this.myList)
    },

    // add a new item
    addItem : function(newitem){
        this.myList.push(newitem);
        this.displaylist();
    },

    // change an existing item
    changeItem : function(position, newValue){
        this.myList[position] = newValue;
        this.displaylist();
    },

    // delete an existing item
    deleteItem  : function(position){
        this.myList.splice(position,1);
        this.displaylist();
    }
}