document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click', function() {
            li.classList.toggle('selected');
        });
        document.getElementById('taskList').appendChild(li);
        taskInput.value = ''; // Clear the input
    } else {
        alert('You forgot to add something');
    }
});

document.getElementById('removeTaskButton').addEventListener('click', function() {
    const tasks = document.querySelectorAll('#taskList li.selected');
    tasks.forEach(task => task.remove());
});