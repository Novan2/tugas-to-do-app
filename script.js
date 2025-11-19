// inisialisasi
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const errorMessage = document.getElementById('error-message');

// Event: tambah tugas baru
todoForm.addEventListener('submit', function(e){
    e.preventDefault();

    let taskText = todoInput.value.trim();

    if(taskText === ''){
        errorMessage.textContent = 'Tugas tidak boleh kosong!';
        errorMessage.classList.add('show');
        return;
    }

    addTaskToList(taskText);
    taskText.value = '';
    errorMessage.classList.remove('show');

});

function addTaskToList (taskText){
    const li = document.createElement('li');
    li.classList.add('todo-item');

    li.innerHTML =`
        <span class="todo-text">${taskText}</span>
        <div class="todo-actions">
            <button class="btn-complete">Selesai</button>
            <button class="btn-delete">Hapus</button>
        </div>
    `;

    todoList.appendChild(li);

    li.querySelector('.btn-complete').addEventListener('click', function(){
        taskComplete(li);
    });

    li.querySelector('.btn-delete').addEventListener('click', function() {
        deleteTask(li);
    });

};

// Event: tugas selesai
function taskComplete(taskItem){
    const taskText = taskItem.querySelector('.todo-text');
    const completeButton = taskItem.querySelector('.btn-complete');

    if (completeButton.textContent === "Selesai") {
        taskText.style.textDecoration = "line-through";
        taskItem.style.backgroundColor = "rgba(183, 253, 212, 1)";
        completeButton.textContent = "Un-Selesai";  
    } else {
        taskText.style.textDecoration = "none";
        taskItem.style.backgroundColor = "rgb(255, 255, 255)";
        completeButton.textContent = "Selesai"; 
    }
}


// Event: tugas dihapus
function deleteTask(taskItem) {
    const todoList = document.getElementById('todo-list');
    const overlay = document.getElementById('overlay');
    
    const confirmDeleteButton = document.getElementById('confirm-delete');
    const cancelDeleteButton = document.getElementById('cancel-delete');
    let currentItemToDelete = null;

    todoList.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-delete')) {
        currentItemToDelete = event.target.closest('.todo-item');

        overlay.style.display = 'flex';
    }
    });

    confirmDeleteButton.addEventListener('click', function() {
    if (currentItemToDelete) {
        currentItemToDelete.remove();
    }

    overlay.style.display = 'none';
    currentItemToDelete = null;
    });

    cancelDeleteButton.addEventListener('click', function() {
    overlay.style.display = 'none';
    currentItemToDelete = null;
    });
}