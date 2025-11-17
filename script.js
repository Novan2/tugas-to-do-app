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

    // li.querySelector('.btn-complete').addEventListener('click', function(){
    //     taskComplete(li);
    // });

    // li.querySelector('.btn-delete').addEventListener('click', function() {
    //     deleteTask(li);
    // });

};

// Event: tugas selesai
function taskComplete(taskItem){
    let taskText = taskItem.querySelector('.todo-text');
    taskText.classList.toggle('completed');
}


// Event: tugas dihapus
function deleteTask(taskItem) {
    taskItem.remove(); 
}