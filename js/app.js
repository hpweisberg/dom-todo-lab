const inputBox = document.getElementById('myInput')
const btn = document.getElementById('submit-button')
const myTodoList = document.getElementById('todo-list')
console.log(myInput)

btn.addEventListener('click', function(evt){
  const li = document.createElement('li')
  const inp = document.getElementById('myInput')
    if(myInput.value.trim()){
      li.textContent = inp.value
      document.getElementById('todo-list').appendChild(li)
      inp.value = ''
    } else {
      alert('Please enter a To-do item')
  }
})