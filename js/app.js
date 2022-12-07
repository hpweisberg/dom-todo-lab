const inputBox = document.getElementById('myInput')
const btn = document.getElementById('submit-button')
const myTodoList = document.getElementById('todo-list')
console.log(inputBox)

btn.addEventListener('click', function(evt){
  const li = document.createElement('li')
  const inp = document.querySelector('input')
  li.textContent = inp.value
  document.getElementById('todo-list').appendChild(li)
  inp.value = ''
})