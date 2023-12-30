
let todos;
//retrieve local storage
const savedTodo=JSON.parse(localStorage.getItem('todo'));
//check if it is an array
if (Array.isArray(savedTodo)){
todo=savedTodo;
}
else {
    todo= [{
    title:"hi to do one",
    dueDate:"2021-03-04",
    id:'id1'
},{
    title:'hi to do two fine',
    dueDate:'2021-90-99',
    id:'id2'
},{
title:'hi to do three',
dueDate:'2021-45-4',
id:'id3'
}];
}
//create to do
function createTodo(title,dueDate){ 
    const id=' ' + new Date().getTime();
    todo.push({ 
    title :title,
    dueDate: dueDate,
    id:id
}); 
saveTodo();
}
//delete to do  
function removeTodo(idToDelet) {
    todo=todo.filter(function(todo){
        //if the id of this todo matches idtodelete ,returns false
        //for everything else ,return true
if(todo.id===idToDelet){
    return false;
}
else {
    return true;
}
     }); 
     saveTodo();
}
// todo.push("hi this is another push code");
render(); 
function saveTodo(){
    localStorage.setItem('todo' ,JSON.stringify(todo));
}
//controler section 
function doto(){
    // todo.push("do to push function");      //instead we push the text box input
    let textbox=document.getElementById("pushnew");
const title=textbox.value;  
const datepicker = document.getElementById('date-picker');
const dueDate=datepicker.value; 

createTodo(title,dueDate); 

 render();
}  
function deletetodo (event) {
    // console.log('delet!');
    const deletbutton=event.target;
    const idToDelet=deletbutton.id; 
     
    removeTodo(idToDelet);
     render();
} 
//view section
function render(){
    document.getElementById("to-do-list").innerHTML='';
    todo.forEach(function(todo){
    let element=document.createElement('div');
    element.innerText = todo.title + ' '+ todo.dueDate; 

    const deletbutton= document.createElement('button');
    deletbutton.innerText= 'Delete';
    deletbutton.style ='margin-left:12:px; border-radius: 10px;background-color:red;width:60px ';
    deletbutton.onclick=deletetodo;
    deletbutton.id=todo.id;
    element.appendChild(deletbutton)
    let dolist=document.getElementById('to-do-list')
    dolist.appendChild(element);
});
}
