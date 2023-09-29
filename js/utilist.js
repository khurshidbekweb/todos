// ======================== QuereSelector =================
function $(elm){
    return document.querySelector(elm)
}

// ======================== Show messege =================
function showMesseg(where, massege){
    let text = document.querySelector(`${where}`);
    text.textContent = massege;
    setTimeout(()=>{
        text.textContent = ""
    }, 2000)
}

// ========================= Delete todo ==================================
function delateTodo(id){
    let deletText = todos.filter((itm, i)=>{
        return i !== id;        
    })
    todos = deletText;
        setTodo();
        showTodo();
}
// ========================= Add function ==================================
function add(){
    overley.classList.remove("hiddin");
    modal.classList.remove("hiddin");
}
// ========================= close todo ==================================
function cloce(){
    overley.classList.add("hiddin");
    modal.classList.add("hiddin");
}
// =========================== Time menegmet ==============================
function getTime(){
    let now = new Date();
    let years = now.getFullYear();
    let months = now.getMonth() < 10 ? "0" + `${now.getMonth()+1}` : now.getMonth();
    let days = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes() < 10 ? "0" + `${now.getMinutes()}` : now.getMinutes(); 

    return `${hours}:${minutes} | ${days}.${months}.${years}`
}
getTime();

// ========================== Header time =================================
function headerTime(){
    let now = new Date();
    let years = now.getFullYear();
    let months = now.getMonth();
    let days = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes() < 10 ? "0" + `${now.getMinutes()}` : now.getMinutes();
    let monthAll = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "November", "Dec"];    

    return `${days}-${monthAll[months]}-${years}`
}
headerTime()


