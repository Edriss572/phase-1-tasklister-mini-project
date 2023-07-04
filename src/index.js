const input = document.getElementById("new-task-description");
const task = document.getElementById("tasks");

function handleSubmit () {
  const li = document.createElement("li");
  li.innerHTML = input.value + " <button class='close'>X</button>";
  task.appendChild(li);
  const btn = document.getElementsByClassName("close");
  for(let i = 0;i<btn.length;i++) {
    console.log(btn[i]);
    btn[i].addEventListener("click",()=> {
      btn[i].parentElement.remove();
    })
  }
}

document.addEventListener("DOMContentLoaded", (Event) => {
  // your code here
  Event.preventDefault;
  console.log("everything works")
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit",(e)=> {
    e.preventDefault();
    handleSubmit();
  })
  
});
