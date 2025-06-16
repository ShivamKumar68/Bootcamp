function addTodo() {
  const input = document.getElementById('todo-input');
  const deadlineInput = document.getElementById('deadline-input');
  const task = input.value.trim();
  const deadline = deadlineInput.value;

  if (task === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${task}</span>
    <div class="deadline">Deadline: ${deadline || 'No deadline'}</div>
    <button class="delete-btn" onclick="deleteTodo(this)">&times;</button>
  `;

  document.getElementById('todo-list').appendChild(li);
  input.value = '';
  deadlineInput.value = '';
}

function deleteTodo(button) {
  button.parentElement.remove();
}

function toggleComplete(span) {
  span.parentElement.classList.toggle('completed');
}
