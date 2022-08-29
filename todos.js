function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}

function displayTodos(todos){
    //get the element
    const todoContainer = document.getElementById('todo-container')
    for( const todo of todos){
        //create the child element
        const todoDiv = document.createElement('div');
        //set innerHTML or innerText
        todoDiv.innerHTML = `
        <h3>title: ${todo.title}</h3>
        <p>User: ${todo.userId}</p>
        <p>is completed: ${todo.completed === true ? 'completed' : 'not complered' }</p>
        `
        //appendChild
        todoContainer.appendChild(todoDiv)
    }
}

loadTodos();

