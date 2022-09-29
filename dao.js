let lista_tarefas = [];

function carregaLista() {
    if(localStorage.getItem('tarefas')) {
        var listT = localStorage.getItem('tarefas');
    
        lista_tarefas = JSON.parse(listT);
    }
}
carregaLista();
function salvar (titulo, prioridade) {
    let dados = buscar();


    dados.push( {
        titulo: titulo,
        prioridade: prioridade,

    });

    localStorage.setItem('tarefas', JSON.stringify(dados) );
    

}

function buscar () {
    return JSON.parse (
        localStorage.getItem('tarefas') || '[]'
    );

}