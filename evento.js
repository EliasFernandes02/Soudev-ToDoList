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
    carregaLista();
    event.preventDefault();
    
    let tarefa = document.getElementById('input_nova_tarefa').value;

    

    if (tarefa.trim() === "") {
        alert('Tarefa invalida');
        return false
    }

    var check = false;
    lista_tarefas.map( (item) => {
        if (item.titulo.includes(tarefa)) {
            check = true;
        }
    });

    
    if(check) {
        alert('Tarefa invalida')
        return;
    }
    
    
    salvar(tarefa,input_prioridade.value)

    document.getElementById('input_nova_tarefa').value = '';

    atualizarQuantidade();                                            

    listarTarefas();
}

// chamada do console ele nao passava pelo addTarefa, chamei a função ele roda porém apresenta o erro PreventDefault
addTarefa();

listarTarefas();
