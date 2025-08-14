const taskInput = document.querySelector('input[type="text"]');
const dateInput = document.querySelector('input[type="date"]');
const timeInput = document.querySelector('input[type="time"]');
const addBtn = document.getElementById('enter');
const pendingDiv = document.getElementById('pending');
const completedDiv = document.getElementById('completed');


const pendingList = document.createElement('ul');
const completedList = document.createElement('ul');
pendingDiv.appendChild(pendingList);
completedDiv.appendChild(completedList);


function createTaskElement(text, date, time) {
    const li = document.createElement('li');


    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';


    const label = document.createElement('span');
    label.textContent = `${text} (${date || 'No date'} ${time || ''})`;


    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.style.marginLeft = '10px';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '5px';


    editBtn.addEventListener('click', function () {
        const newText = prompt("Edit task:", text);
        const newDate = prompt("Edit date (YYYY-MM-DD):", date);
        const newTime = prompt("Edit time (HH:MM):", time);
        if (newText !== null && newText.trim() !== "") {
            label.textContent = `${newText} (${newDate || 'No date'} ${newTime || ''})`;
            text = newText;
            date = newDate;
            time = newTime;
        }
    });


    deleteBtn.addEventListener('click', function () {
        li.remove();
    });


    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            li.remove();

            const completedLi = document.createElement('li');
            completedLi.textContent = label.textContent;
            completedLi.style.textDecoration = "line-through";
            completedLi.style.color = "green";


            const completedDeleteBtn = document.createElement('button');
            completedDeleteBtn.textContent = 'Delete';
            completedDeleteBtn.style.marginLeft = '10px';
            completedDeleteBtn.addEventListener('click', function () {
                completedLi.remove();
            });

            completedLi.appendChild(completedDeleteBtn);
            completedList.appendChild(completedLi);
        }
    });


    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    return li;
}


function addTask() {
    const taskText = taskInput.value.trim();
    const taskDate = dateInput.value;
    const taskTime = timeInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskElement = createTaskElement(taskText, taskDate, taskTime);
    pendingList.appendChild(taskElement);

    taskInput.value = "";
    dateInput.value = "";
    timeInput.value = "";
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
