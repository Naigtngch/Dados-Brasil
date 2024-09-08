function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa=="") {
        section.innerHTML = `
        <p> Não foi encontrado nenhuma infomação. Tente novamente</p>
        `
        return
    }

    let resultados = ""
    
    for (let dado of dados) {
        if (dado.titulo.includes(campoPesquisa) || dado.tags.includes(campoPesquisa)) {
            resultados +=  `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">${dado.objetivo}</p>
                <p class="descricao-meta">${dado.maisInformacoes}</p>
                <p class="descricao-meta">${dado.observacaoPrimeiraImagem}</p>
                <div class="imagem-container">
                    <img class="imagem-censo" src="${dado.primeiraImagem}" alt="${dado.alt}">
                </div>
                <p>${dado.descricaoPrimeiraImagem}</p>
                <div class="imagem-container">
                    <img class="imagem-censo" src="${dado.segundaImagem}" alt="${dado.altDois}">
                </div>
                <div class="esquerda">
                    <p>${dado.descricaoSegundaImagem}</p>           
                    <p>${dado.conclusao}<p>
                    <a class="btn-informacoes" href=${dado.link}> Referências e Mais Informações </a>
                </div
        `
        }
    }

    if (resultados == ""){
        resultados = "<p> Não foi encontrado nenhuma infomação. Tente novamente</p>"
    }
    section.innerHTML = resultados
}


