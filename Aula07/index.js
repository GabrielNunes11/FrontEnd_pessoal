const btnAdd = document.querySelector("#add");
const inputTarefa = document.querySelector("#nova-tarefa input");
const msgErro = document.querySelector("#msg-erro")
const listaTarefas = document.querySelector("#tarefas")

window.onload = function() {
    const tarefasStorage = JSON.parse(localStorage.getItem('tarefas'))
    if(!tarefasStorage) {
        console.log("OnLoad")
    }else{
        tarefasStorage.forEach( task =>{
            listaTarefas.innerHTML += `
        <div class="tarefa">
            <span>${tarefa}</span>
            <button id="excluir"">Excluir</button>
        </div>
    `
        })

        deletarTarefa()
    }
}

btnAdd.onclick = function(){
    if(inputTarefa.value.length == 0){
        msgErro.style.display = "block"
    }else{
        msgErro.style.display = "none"

        adicionarTarefa(inputTarefa.value)

        inputTarefa.value = ""
        inputTarefa.focus();
    }
}

function adicionarTarefa(tarefa) {
    // listaTarefas.innerHTML = listaTarefas.innerHTML + "novo innerhtml"
    listaTarefas.innerHTML += `
        <div class="tarefa">
            <span>${tarefa}</span>
            <button id="excluir"">Excluir</button>
        </div>
    `
    // localStorage.setItem("tarefas", tarefa)
    const tarefasStorage = JSON.parse(localStorage.getItem('tarefas')) || []
    localStorage.setItem("tarefas", JSON.stringify([...tarefasStorage, tarefa]))
    deletarTarefa()
}

function deletarTarefa() {
    const btnExcluir = document.querySelectorAll("#excluir")
    btnExcluir.forEach( btn => {
        btn.onclick = function(){
            this.parentNode.remove();
        }
    })
}

// btnAdd.addEventListener("focus", e =>{
//     msgErro.style.display = "none"
//     console.log("On focus");
// })