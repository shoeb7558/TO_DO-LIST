

// Get elements from the DOM
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new list item
        const li = document.createElement('li');
        
        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.style.borderRadius = '50%';
        checkbox.addEventListener('change', () => {
            // Cut or uncut the text based on the checkbox state
            
            li.style.backgroundColor = checkbox.checked ? 'green': 'transparent';
           
        });

        li.appendChild(checkbox); // Append checkbox to the list item

        li.innerHTML += `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">X</button>
        `;

        // Append the new item to the task list
        
        taskList.appendChild(li);

        // Clear the input field 
        
        taskInput.value = '';
    }
}

// Function to remove a task
function removeTask(button) {
    const li = button.parentNode;
    taskList.removeChild(li);

    
}




// Function to save the task list to localStorage
function saveTaskListToLocalStorage() {
    const taskListItems = Array.from(taskList.children).map(li => li.innerHTML);
    localStorage.setItem('taskList', JSON.stringify(taskListItems));
}

// Function to load the task list from localStorage
