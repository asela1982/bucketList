// Code goes here

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
    },
    
    toggleAll : function(){
      
      var mylistLength = this.myList.length;
      var mylistCompleted = 0;
      
      // get number of completed items
      for (i=0 ; i< mylistLength ; i++){
        if(this.myList[i].completed === true){
          mylistCompleted++;
        }
      }
      
      // case1: if every element in the list is true, make the all the elements false
      if(mylistLength === mylistCompleted){
        for(i=0; i < mylistLength ; i++){
          this.myList[i].completed = false;}
          // case2: otherwise make everything true
      } else{
        for(i=0; i < mylistLength ; i++){
         this.myList[i].completed = true;}
        }
        
      this.displayList();
    }
}

