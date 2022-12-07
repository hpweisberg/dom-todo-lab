// Cashed element references:
const inputBox = document.getElementById('myInput')
const btn = document.getElementById('submit-button')
const myTodoList = document.getElementById('todo-list')
const resetBtn = document.getElementById('reset-button')

// Add To-do button:
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

// Add Reset button:
resetBtn.addEventListener('click', function(){
  [...myTodoList.children].forEach(c => c.remove())
})

// Add remove indivual line items
myTodoList.addEventListener('click', function(evt){
  evt.target.remove()
  console.log(evt.target)
})
