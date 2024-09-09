// פונקציה ליצירת ID
// רנדומלי עבור כל משימה
function generateRandomId() {
    return Math.random() * 1000000;
}
// הפונקציה טוענת כל המשימות ומציגה את זה כשהעמוד עולה
window.onload = function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        // מתבצעת קריאה לפונקציה שמייצרת שורה בטבלה
        const row = createRow(task.id, task.task, task.status);
        document.getElementById('taskTableBody').appendChild(row);
    });
};
// פונקציה ליצירת משימה עפ הקלט שהתקבל
document.getElementById('taskForm').addEventListener('submit', () => {


    const taskInput = document.getElementById('task');
    const task = taskInput.value;
    const tableBody = document.getElementById('taskTableBody');

    // ID מיוצר רנדומלית
    const id = generateRandomId();
    // שליחה של הפרמטרים ליצירת המשימה
    const row = createRow(id, task, 'Pending');
    tableBody.appendChild(row);

    saveTaskToLocalStorage(id, task, 'Pending');

    taskInput.value = '';
});

// פונקציה ליצירת שורה בטבלה עבור כל משימה חדשה
function createRow(id, task, status) {
    const row = document.createElement('tr');
    // יצירת תאים עבור המזהה, המשימה, והכפתורים
    const tdId = document.createElement('td');
    tdId.textContent = `${id.toString().slice(0, 3)}...`;

    const tdTask = document.createElement('td');
    tdTask.textContent = task;

    const tdStatus = document.createElement('td');
    tdStatus.textContent = status;

    const tdAction = document.createElement('td');
    // כפתור עריכה
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    // פונקציה שתופעל
    editButton.onclick = function() {
        const newTask = prompt('Edit task:', task);
        if (newTask !== null && newTask.trim() !== '') {
            tdTask.textContent = newTask;
            updateTaskInLocalStorage(id, newTask, tdStatus);
        }
    };
    // הןספה לתא של הפעולות
    tdAction.appendChild(editButton);


    // כפתור עדכון
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.onclick = function() {
        if (tdStatus.textContent === 'Pending') {
            tdStatus.textContent = 'Completed';
            updateTaskInLocalStorage(id, task, 'Completed');
        }
    };
    tdAction.appendChild(updateButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        row.remove();
        deleteTaskFromLocalStorage(id);
    };
    tdAction.appendChild(deleteButton);

    row.append(tdId, tdTask, tdStatus, tdAction);
    return row;
}


// שמירת משימה בזכרון
function saveTaskToLocalStorage(id, task, status) {
    //שליפת המשימות מהזיכרון 
    // הכנסת המשימה החדשה עם הפרמטרים שהתקבלו 
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ id, task, status });
    // שמירת המערך המעודכן בזכרון
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// עדכון משימה בזכרון
function updateTaskInLocalStorage(id, task, status) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // שליפת המשימה לפי הID
    const updatedTasks = tasks.map(t => t.id === id ? { id, task, status } : t);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

// מחיקת משימה
function deleteTaskFromLocalStorage(id) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // עדכון הרשימה החדשה בלי המשימה למחיקה
    const filteredTasks = tasks.filter(t => t.id !== id);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
}
