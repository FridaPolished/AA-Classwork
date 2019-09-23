
const todos = [];
const ul = document.querySelector(".todos")
const form = document.querySelector(".add-todo-form")
//debugger 
function addTodo(params) {
  form.addEventListener("submit", e => {
    e.preventDefault()
    //debugger 
    const todoInputNodeList = document.getElementsByName("add-todo"); 
    const todoInput = todoInputNodeList[0];
    const todoValue = todoInput.value;
    const newTodo = document.createElement("li");
    newTodo.innerText =todoValue;
    newTodo.setAttribute("done", false);
    const JSONobj = { "done": false, innerText: newTodo.innerText} // this should have been an object not an li
    todos.push(JSONobj);
    todoInput.value = "";
    debugger
    window.localStorage.setItem("todoitems", JSON.stringify(todos)) 
    populateList(todos);
  })
}


function populateList(todos) {
  ul.innerHTML = ""; // kind of hacky but works to stop propagation 
  todos.forEach((todo) => { // passes in objects not lis 
    //debugger
    let newLabel = document.createElement("label");
    let newLi = document.createElement("li");
    let checkbox = document.createElement("input"); // half refactored to use obj not li 
    checkbox.type = "checkbox";
    
    const newTodo = document.createElement("li");
    newTodo.innerText = todo.innerText;

    let todoLi = document.createElement("li");
    newLabel.appendChild(todo);
    newLabel.appendChild(checkbox);
    newLi.appendChild(newLabel);
    ul.appendChild(newLi);
  })
}

addTodo();


// todo(li)
//   label(innertext)
//   checkbox
// todo(li)




// localStorage.setItem('myCat', 'Tom');
// The syntax for reading the localStorage item is as follows:

// var cat = localStorage.getItem('myCat');
// The syntax for removing the localStorage item is as follows:

// localStorage.removeItem('myCat');
// The syntax for removing all the localStorage items is as follows:

// // Clear all items
// localStorage.clear();