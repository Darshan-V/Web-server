import {
  taskList,
  fetchtask,
  listGenerator,
  clearDoneTasks,
  clearAll,
  deleteTask,
  addTask,
  setPriority,
  setDueDate,
  setNotes,
  //   updateTitle,
} from './src/DB.js'
import { renderItems, priorityBorder } from './view.js'

// dom something
const inputVal = document.querySelector('.inputVal')
const doneTasksDiv = document.querySelector('.DoneTasksdiv')

inputVal.addEventListener('change', () => {
  addTodo()
  inputVal.value = ''
})

function addTodo(data) {
  data = {
    id: '',
    title: '',
    notes: '',
    duedate: '',
    priority: '',
    done: false,
    show: false,
  }
  if (inputVal.value.trim() === '') return
  data.title = inputVal.value
  addTask(data)
  renderItems()
}

function deleteATask(event, data) {
  const id = event.target.getAttribute('id')
  deleteTask(id)
  renderItems()
}
const deleteTaskElement = document.querySelectorAll('.deleteTask')
deleteTaskElement.forEach((deleteEle) => {
  deleteEle.addEventListener('click', deleteATask)
})

function markAsDone(event, id) {
  id = event.target.getAttribute('id')
  const check = document.getElementById(`${id}`).querySelector('.cbx')
  const title = document.getElementById(`${id}`).querySelector('.title')
  task = fetchtask(id)
  if (check.checked) {
    title.style = 'text-decoration: line-through'
    task.done = true
    const done = task.done
    console.log(done)
    // updateDoneStatus(done, id)
    doneTasksDiv.style.display = 'flex'
  } else {
    title.style = 'text-decoration: none'
    task.done = false
    const notDone = task.done
    // updateDoneStatus(notDone, id)
    if (taskList.map((task) => task.done) === true) {
      doneTasksDiv.style.display = 'none'
    } else doneTasksDiv.style.display = 'flex'
  }
}
// event listner for checkbox
const cbkItems = document.querySelectorAll('.cbx')
cbkItems.forEach((cbx) => {
  cbx.addEventListener('click', markAsDone)
})

if (taskList.find((t) => t.done === true) === 0) {
  doneTasksDiv.style.display = 'none'
  tasks.innerHTML = ' '
} else doneTasksDiv.style.display = 'flex'

function editTitle(event) {
  console.log(event.target)

  const id = event.target.getAttribute('id')
  console.log(id)
  const title = document.getElementById(`${id}`).querySelector('.title')
  let titleValue = title.value
  console.log(titleValue)

  //   updateTitle(id, titleValue)

  for (const task of listGenerator()) {
    if (task.id === id) {
      task.title = title.value
    }
  }
  renderItems()
}
const titleElements = document.querySelectorAll('.title')
titleElements.forEach((rename) => {
  rename.addEventListener('change', editTitle)
})

function addPriority(event) {
  const id = event.target.getAttribute('id')
  const priority = document.getElementById(`${id}`).querySelector('.priority')
  const taskElement = document.querySelector('.task')
  let selectedPriority = priority.value
  setPriority(id, selectedPriority)
  for (const task of listGenerator()) {
    if (task.id === id) {
      taskElement.style.borderLeft = priorityBorder(task.priority)
    }
  }
  renderItems()
}

const priorItems = document.querySelectorAll('.priority')
priorItems.forEach((stat) => {
  stat.addEventListener('change', addPriority)
})

function addDueDate(event) {
  const id = event.target.getAttribute('id')
  const duedate = document.getElementById(`${id}`).querySelector('.duedate')
  const date = document.getElementById(`${id}`).querySelector('.date')
  date.innerText = new Date(duedate.value).toLocaleDateString()
  let selectedDuedate = duedate.value
  setDueDate(id, selectedDuedate)
  renderItems()
}
const dueDates = document.querySelectorAll('.duedate')
dueDates.forEach((dDate) => {
  dDate.addEventListener('change', addDueDate)
})

function addnotes(event) {
  const id = event.target.getAttribute('id')
  const notes = document.getElementById(`${id}`).querySelector('.notes')
  let notesValue = notes.value
  setNotes(notesValue, id)
  renderItems()
}
const descriptions = document.querySelectorAll('.notes')
descriptions.forEach((tDesc) => {
  tDesc.addEventListener('change', addnotes)
})

function showMoreDetails(event) {
  const id = event.target.getAttribute('id')
  const innerdetails = document
    .getElementById(`${id}`)
    .querySelectorAll('.innerContent')
  const details = document.getElementById(`${id}`).querySelector('.Details')
  for (const task of listGenerator()) {
    if (task.id === id) {
      if (!task.show) {
        innerdetails.forEach((inner) => {
          inner.style = 'display:flex' // add it to the css
        })
        details.innerText = '☶'
      } else {
        innerdetails.forEach((inner) => {
          inner.style = 'display:none'
        })
        details.innerText = '☶'
      }
      task.show = !task.show
    }
  }
}
const dropDownButtons = document.querySelectorAll('.Details')
dropDownButtons.forEach((button) => {
  button.addEventListener('click', showMoreDetails)
})

const clearAllTasks = document.querySelector('.clearTasks')
clearAllTasks.addEventListener('click', function () {
  clearAll()
  renderItems()
})

const clearDoneItems = document.querySelector('.clearDoneTasks')
clearDoneItems.addEventListener('click', function () {
  clearDoneTasks()
  renderItems()
})
