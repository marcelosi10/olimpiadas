
function pesquisar() {

    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi Encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
//console.log(section);

let resultados = ""
let titulo = ""
let descricao = ""

//para cada dado dentro da lista de dados
for(let dado of dados) {
     titulo = dado.titulo.toLowerCase()
     descricao = dado.descricao.toLowerCase()
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        //cria um novo elemento
        resultados +=  `    
        <div class="item-resultado">
        
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <P class="descricao-meta">${dado.descricao}</P>
                <a href=${dado.Link} target="_blank">Mais Informações</a>    
        </div>
    
        `


    }
    // então, faça....
    //console.log(dado.titulo.includes(campoPesquisa))
   
}


if (!resultados) {

    resultados = "<p>Item não corresponde ao assunto da base de dados de Atletas!</p>"
}

section.innerHTML = resultados


}



