// Code goes here

var myObject = {

    myList : [],
    // displayList method should show the description of each item
    displayList : function(){
      
      // check if list is empty
      if(this.myList.length === 0){
        console.log("Your list is still empty!")
      } else{
        console.log("Description:");
        for (var i=0; i<this.myList.length; i++){
          
          // display completed
            if(this.myList[i].completed === true){
            console.log('(x)',this.myList[i].description)
            } else {
            console.log('( )',this.myList[i].description)
            }
      }
    }},

    // displayList method should tell you if myList is empty

    addItem : function(item){
        this.myList.push(
            { description : item,
              completed : false  
            });
        this.displayList();
    },
    
    deleteItem : function(position){
      this.myList.splice(position,1);
      this.displayList();
    },
    
    toggleCompleted : function(position){
      var item = this.myList[position];
      item.completed = !item.completed;
      this.displayList();
    }
}
