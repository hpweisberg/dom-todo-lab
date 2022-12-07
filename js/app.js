// Cashed element references:
const inputBox = document.getElementById('myInput')
const btn = document.getElementById('submit-button')
const myTodoList = document.getElementById('todo-list')
const resetBtn = document.getElementById('reset-button')

const addToList = (evt) => {
  const li = document.createElement('li')
  const inp = document.getElementById('myInput')
    if(myInput.value.trim()){
      li.textContent = inp.value
      document.getElementById('todo-list').appendChild(li)
      inp.value = ''
    } else {
      alert('Please enter a To-do item')
  }
}


// Add To-do button:
btn.addEventListener('click', function(evt){
  addToList()
})

// Press Enter to click button
inputBox.addEventListener('keypress', function(evt){
  if (evt.key === 'Enter'){
  addToList()
  }
})

// Add Reset button:
resetBtn.addEventListener('click', function(){
  [...myTodoList.children].forEach(c => c.remove())
})

// Add remove individual line items
myTodoList.addEventListener('click', function(evt){
  evt.target.remove()
  console.log(evt.target)
})
