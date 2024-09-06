# neurotransmissores
Este projeto foi desenvolvido graças a Imersão Dev_ Alura & Google

## Sumário

> [Introdução](https://github.com/marioluciofjr/neurotransmissores/tree/main#introdu%C3%A7%C3%A3o)\
> [Como utilizar](https://github.com/marioluciofjr/neurotransmissores/tree/main#como-utilizar)\
> [Estrutura do projeto](https://github.com/marioluciofjr/neurotransmissores/tree/main#estrutura-do-projeto)\
> [Links úteis](https://github.com/marioluciofjr/neurotransmissores/tree/main#links-%C3%BAteis)\
> [Contribuições](https://github.com/marioluciofjr/neurotransmissores/tree/main#contribui%C3%A7%C3%B5es)\
> [Licença](https://github.com/marioluciofjr/neurotransmissores/tree/main#licen%C3%A7a)\
> [Contato](https://github.com/marioluciofjr/neurotransmissores/tree/main#contato)

## Introdução

É uma plataforma de busca simples sobre neurotransmissores, mostrando efeitos na vida e quais seriam as práticas diárias. Toda a construção do projeto ocorreu por meio dos ensinamentos das 5 aulas da Imersão Dev_ Alura & Google.

## Como Utilizar

1. Entra no site [Neurotransmissores](https://neurotransmissores.vercel.app/);
2. Digite o nome de um neurotransmissor ou palavra-chave relacionada no campo de pesquisa;
3. Clique no botão "Pesquisar" para ver os resultados relacionados;
4. Explore os links e informações exibidos para aprender mais sobre neurotransmissores.

<div>
  <br><br>
  <img align="center" src= "https://github.com/marioluciofjr/neurotransmissores/blob/main/neurotransmissores.gif" />
</div>

## Estrutura do projeto
<div>
  <img align="center" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
  index.html<br><br>
</div>

1. **Estruturação da página**: Define a estrutura básica da aplicação com cabeçalho, campo de pesquisa e área de resultados.
2. **Campo de pesquisa**: Um input onde o usuário pode digitar o nome de neurotransmissores ou sentimentos.
3. **Botão de pesquisa**: Botão que dispara a função de pesquisa em JavaScript ao ser clicado.
4. **Exibição de resultados**: Um espaço (`<section>`) reservado para a exibição dos resultados da busca de neurotransmissores.
5. **Rodapé com links sociais**: Inclui links para perfis do LinkedIn e GitHub com ícones correspondentes.

<div>
  <br><br><img align="center" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" /> 
  styles.css<br><br>
</div>

1. **Design responsivo**: Adapta a interface para diferentes dispositivos e tamanhos de tela, de desktop a smartphones.
2. **Estilização da página**: Aplica cores, fontes e espaçamento em todos os elementos da página, garantindo uma aparência consistente.
3. **Efeitos de hover**: Adiciona interatividade aos botões e links, como mudanças de cor e sombreamento ao passar o mouse.
4. **Layout com Flexbox**: Usa Flexbox para centralizar e alinhar os elementos da página de forma responsiva e flexível.
5. **Estilização de seções de resultados**: Personaliza a exibição dos itens de resultados, criando cartões visualmente agradáveis para cada neurotransmissor.

<div>
  <br><br><img align="center" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
  app.js<br><br>
</div>

1. **Função de pesquisa**: A função `pesquisar()` busca neurotransmissores com base na entrada do usuário (campo de pesquisa).
2. **Filtro por título, descrição e tags**: Permite encontrar neurotransmissores ao comparar o termo buscado com os títulos, descrições e tags.
3. **Exibição dinâmica de resultados**: Gera dinamicamente o HTML dos resultados da busca e os insere na página.
4. **Validação de entrada**: Verifica se o campo de pesquisa está vazio e exibe uma mensagem apropriada.
5. **Fallback para sem resultados**: Exibe uma mensagem quando não há correspondência para a pesquisa do usuário.

<div>
  <br><br><img align="center" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
  dados.js<br><br>
</div>

1. **Armazenamento de dados**: Contém um array de objetos com informações detalhadas sobre neurotransmissores (título, descrição, tags e link).
2. **Tags descritivas**: Cada neurotransmissor tem uma lista de palavras-chave (tags) para facilitar a busca por termos relacionados.
3. **Links para mais informações**: Cada neurotransmissor tem um link que leva a páginas externas para obter mais detalhes.
4. **Descrições dinâmicas**: As descrições são fornecidas em HTML formatado para exibição direta no resultado.
5. **Estrutura modular**: Os dados são armazenados de forma que possam ser facilmente expandidos ou alterados.

## Links Úteis
Durante o projeto utilizei várias ferramentas muito úteis e deixo aqui os links e alguns comentários de como foram importantes para mim neste projeto, até mesmo para quem deseja saber melhor ou mesmo compor seus próprios trabalhos:

+ [Gemini](https://gemini.google.com/app) - explicação de funcionalidades no código, construção de trechos e comentários no código (dica importante da Aula 4 da Imersão Dev_ Alura & Google);
+ [OneCompiler](https://onecompiler.com/html) - testar os códigos html, css e javascript e verificar se estava responsivo;
+ [ScreenToGif](https://www.screentogif.com/) - serviu para fazer o gif do tutorial de como mexer no site;
+ [VS Code](https://code.visualstudio.com/download) - para estruturar o código em si e fazer mais testes;
+ [Badges Generator](https://badgesgenerator.com/) - para criar as badges presentes neste README;
+ [Devicon](https://devicon.dev/) - utilizar os ícones das linguagens html, css e javascript;
+ [Imersão Dev com Gemini [Guia de Mergulho]](https://grupoalura.notion.site/Imers-o-Dev-com-Gemini-Guia-de-Mergulho-7742af09c51649348a91f67157df8a41#4b72e0a2a43445abb490e252b8d5faed) - guia excelente para compreender cada detalhe da Imersão Dev_;
+ [Guia básico de Markdown](https://docs.pipz.com/central-de-ajuda/learning-center/guia-basico-de-markdown#open) - a fim de construir um README coeso, organizado e didático;
+ [Sintaxe básica de gravação e formatação no GitHub](https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) - documentação oficial do GitHub sobre o README e vários outros detalhes importantíssimos na construção de um repositório de qualidade;
+ [Vercel](https://vercel.com/) - plataforma para fazer o deploy da aplicação de maneira simples e rápida.

## Contribuições
Contribuições são bem-vindas! Se você tem sugestões para melhorar este projeto, sinta-se à vontade para criar um fork do repositório, fazer suas alterações e enviar um pull request.

## Licença
Este projeto está sob a licença MIT. Veja o arquivo [![LICENSE](https://img.shields.io/badge/LICENSE-42ffff?style=plastic&link=https://github.com/marioluciofjr/neurotransmissores/blob/main/LICENSE)](https://github.com/marioluciofjr/neurotransmissores/blob/main/LICENSE) para mais detalhes.

## Contato
Mário Lúcio - Prazo Certo®
<div>  	
  <a href="https://www.linkedin.com/in/marioluciofjr" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> 
  <a href = "mailto:marioluciofjr@gmail.com" target="_blank"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white"></a>
  <a href="https://prazocerto.me/contato" target="_blank"><img src="https://img.shields.io/badge/prazocerto.me/contato-230023?style=for-the-badge&logo=wordpress&logoColor=white"></a>
  
</div>

