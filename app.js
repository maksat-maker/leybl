  let addMeassage = document.querySelector('.message'),
addButtton = document.querySelector('.add'),
todo = document.querySelector('.todo');

let todoList = [];

addButtton.addEventListener('click', function(){

     let newTodo = {
         todo: addMeassage.value,
         cheked: false ,
         important: false
     };

     todoList.push(newTodo);
     displayMessages();
     localStorage.setItem('todo', JSON.stringify(todoList));
});
         
        //todoList.push(newTodo);
       // displayMessages();
       // localStorage.setItem('todo', JSON.stringify)



function displayMessages(){
     
    let displayMessages ='';
    todoList.forEach(function (item, i){
        displayMessages += `
        <li>
    <input type ='checkbox' id='item_${i})' ${item.checked ? 'checked' : ''}>
    <label for = 'item_${i}'> ${item.todo}</label>
        </li>
       `;
      todo.innerHTML = displayMessages;
    });
}
