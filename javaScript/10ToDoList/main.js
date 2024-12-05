document.addEventListener('DOMContentLoaded', function() {
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const todoList = document.getElementById('todo-list');

    // Function to add a new task
    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task');
            
            const taskContent = document.createElement('span');
            taskContent.textContent = taskText;
            taskItem.appendChild(taskContent);
            
            const deleteButton = document.createElement('span');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(taskItem);
            });
            taskItem.appendChild(deleteButton);
            
            todoList.appendChild(taskItem);
            newTaskInput.value = '';
        }
    }

    // Add task when button is clicked
    addTaskButton.addEventListener('click', addTask);

    // Add task when Enter key is pressed
    newTaskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
