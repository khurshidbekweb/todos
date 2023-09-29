"use strict"
let elForm = $("#formMain");
let elInput = $("#todosText");
let addElm = $("#add");
let elList = $("#list");
let modal = $("#modalWrp");
let modForm = $("#formMod");
let modInput = $("#textMod");
let modChange = $("#changeMOd");
let worning = $(".worning")
let overley = $(".overlay");
let headerTimes = $(".time");


let todoInpId

let todos = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : [];

// SetTodo
function setTodo(){
    localStorage.setItem('list', JSON.stringify(todos));    
}
if(todos.length) showTodo();

// ========================= Show ToDo ==================================
function showTodo(){
    elList.innerHTML = " ";
    todos.forEach((itm, i)=>{        
        elList.innerHTML += `
        <li ondblclick = (complate(${i})) class = "item w-100 p-2 px-5 d-flex justify-content-between align-items-center ${
            itm.complate == true ? "complate" : ""} ">
                    <h4 class="text user-select-none">${itm.text}</h4>
                    <div class="btnaaa d-flex justify-content-between align-items-center">
                        <p class="timeUZ mx-2" >${itm.time}</p>
                        <div>
                        <img onclick = (editTodo(${i})) class="text-info px-3 bg-info p-2 rounded-2" src="./img/pencil.svg" alt="pensel">
                        <img onclick = (delateTodo(${i})) class="px-3 bg-danger p-2 rounded-2" src="./img/delete.svg" alt="delete">
                        </div>
                    </div>
        </li>
        `        
    })
    elForm.reset();    
}
// ========================= Forma ======================================
elForm.addEventListener("submit", (e)=>{
    e.preventDefault();    
    let todoText = elInput.value.trim();
    if(todoText.length && todoText){
        todos.push({text: todoText, time: getTime(), complate: false})
        setTodo();        
        showTodo();       
    }else{  
        showMesseg(".worning", "Please, enter thr text")
    }        
})
// ========================= Edit todo ==================================
function editTodo(id){    
    return todoInpId = id,
    add()
}
modForm.addEventListener("submit", (e)=>{
    e.preventDefault();            
    let todoText = modInput.value.trim();        
    todos.splice(todoInpId, 1, {text: todoText, time: getTime(), complate: false})
    if(todoText.length){
        setTodo();        
        showTodo(); 
        cloce();
    }else{
        showMesseg(".worningMod", "Please, enter thr text")
    }
    modForm.reset();                    
});
// ========================= Close modal ==================================
modChange.addEventListener("click",cloce)
// ========================= complate event ===============================
function complate(id){
    let completedTodo = todos.map((itm,i)=>{
    if(i==id){
        console.log(1);
        return {...itm, complate: itm.complate == false ? true : false}
    }else{
        return{...itm}
        console.log(2);
    }
    })
    todos = completedTodo;
    setTodo()
    showTodo()
}


function onTime(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes() < 10 ? "0" + `${now.getMinutes()}` : now.getMinutes();
    let secund = now.getSeconds() < 10 ? "0" + `${now.getSeconds()}` : now.getSeconds();
    headerTimes.innerHTML = `
    <h3 class="text-center"><strong>Today</strong>: ${headerTime()}</h3>
    <h5 class="text-center">${hours}:${minutes}:${secund}</h5>
`
}
// onTime();
setInterval(onTime, 1000);





