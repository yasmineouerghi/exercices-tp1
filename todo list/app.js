let savebutton= document.querySelector(".SaveButton");
let deletebutton = document.querySelector(".deletebutton");
let todotitle=document.querySelector(".todoTitle");
let todoDescription=document.querySelector(".todoDescription");
let todoitems=document.querySelector(".todoitems");
let form=document.querySelector(".form")
let todoitem=document.querySelector(".todoItem")

function createItem(title,description){
    let todoitem=document.createElement("div");
    todoitem.classList.add("todoItem");

     let titre= document.createElement("p");
     titre.textContent=title;

     let desc=document.createElement("p");
     desc.textContent=description;

     let deletebutton=document.createElement("button");
     deletebutton.classList.add("deletebutton");
     deletebutton.textContent="X";
     
     deletebutton.addEventListener('click',function(){
        todoitem.style.display='none';
         })
      

     todoitem.appendChild(titre);
     todoitem.appendChild(desc);
     todoitem.appendChild(deletebutton);

     return todoitem;



}

form.addEventListener('submit',function(event){
    
        event.preventDefault();
        let titre=todotitle.value;
      // console.log(titre);
        let description=todoDescription.value;
        //console.log(description);
     let todoItem=createItem(titre,description);
    //console.log(todoItem)
    todoitems.appendChild(todoItem);
   
    todotitle.value = "";
    todoDescription.value = "";
       

})
;



