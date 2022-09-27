function atualizarQuantidade(){

    document.getElementById('numeros').innerHTML =  buscar().length  ;

    

}


function listarTarefas() {
    let conteudo = buscar().sort().map(function(tar){
        return `<div> <input type="checkbox"> 
        ${tar.titulo}
        <span class="badge ${tar.prioridade === 'Baixa' && 'bg-primary'} ${tar.prioridade === 'Media' && 'bg-warning'} ${tar.prioridade === 'Alta' && 'bg-danger'}"> 
        ${tar.prioridade}
        </span>
       
        </div>`;
    })
    document.getElementById('tarefas').innerHTML = conteudo.sort().join('');

   
}

function addTarefa () {
    event.preventDefault();

    let tarefa = document.getElementById('input_nova_tarefa').value;

    if (tarefa.trim() === "") {
    alert('Tarefa invalida');
    }

    if (lista_tarefas.includes(tarefas) === true) {
        alert('Tarefa já existe');

        return;
    }

    salvar(tarefa,input_prioridade.value)

    document.getElementById('input_nova_tarefa').value = '';

    atualizarQuantidade();                                            

    listarTarefas();
}

listarTarefas();
