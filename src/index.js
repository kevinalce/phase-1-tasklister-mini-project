

document.addEventListener("DOMContentLoaded", () => {

  const taskUL = document.querySelector('#tasks')
  //const deleteIt = document.getElementById('li-it')

  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.querySelector('#new-task').value)
    form.reset();
  })

  function buildToDo (toDo) {
    let li = document.createElement('li');
    li.id = 'li-it'
    taskUL.append(li);
    li.textContent = `${toDo}`;
    let btn = document.createElement('button');
    btn.id = 'click'
    btn.textContent = 'x'
    li.append(btn)
    btn.addEventListener('click', () => {
      btn.parentNode.remove();
    })
    

  }


  
}
 
  
  // your code here
)


