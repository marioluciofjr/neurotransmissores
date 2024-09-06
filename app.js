// Função chamada ao clicar no botão "Pesquisar"
function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Captura o valor digitado pelo usuário no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Se o campo de pesquisa estiver vazio, exibe uma mensagem de erro
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um neurotransmissor ou sentimento</p>"
        return
    }

    // Converte o valor do campo de pesquisa para minúsculas
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa variáveis para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre a lista de dados para encontrar correspondências
    for (let dado of dados) {
        // Converte título, descrição e tags para minúsculas para comparação
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // Verifica se o termo pesquisado está presente no título, descrição ou tags
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento com os resultados encontrados
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    // Se nenhum resultado for encontrado, exibe uma mensagem
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Insere os resultados na seção HTML
    section.innerHTML = resultados;
}
