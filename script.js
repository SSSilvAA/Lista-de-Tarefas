const Listatarefas = document.getElementById("tarefas");
const tarefa = document.getElementById("tarefa");
const TarefaValor = document.getElementById("tarefa");
var array = Array();

tarefa.addEventListener("keypress", function (event) {

  if (event.key === "Enter") {

    let tarefa = {

      nome: TarefaValor.value,

    }
    localStorage.setItem(localStorage.length + 1, JSON.stringify(tarefa));

    /* Para resolver o problema de marca apenas o último depois de crar várias tarefas, irei colocar todas elas em um array depois recuperar todas especifamente no local storage passando o id. fazer isso para todas */
  }

})

function InserirNoArray() {

  let i = 0;

  for (i = 0; i < localStorage.length; i++) {

    array.push(JSON.parse(localStorage.getItem(localStorage.key(i.toLocaleString()))));

  }

  imprimiArray(localStorage.length);
  
}


function imprimiArray(length) {

  array.forEach(function (d) {

    
    const DIV = document.createElement("div");
    DIV.classList.add("tarefa");
    const INPUT = document.createElement("input");
    INPUT.setAttribute("type", "checkbox");
    const P = document.createElement("p");
    const P 

    DIV.appendChild(INPUT);
    DIV.appendChild(P);


    Listatarefas.appendChild(DIV);

  })

}

function tarefaFeita(div) {

  let input = div.querySelector('input');
  let p = div.querySelector('p');

  input.addEventListener("change", () => {

     div.classList.add("marcado");

     if(p.classList.contains('marcado'));{

        console.log("oi");

     }
  });
  

;
}









