# Desafios práticos: Arrays, DOM e Eventos

Projeto com os exercícios da aula de JavaScript, executado no navegador. Abra o `index.html` e o Console (F12) para ver os resultados.

## Arquivos

- `index.html`: estrutura da página (título, parágrafos, botão, campo de nome, lista e formulário).
- `app.js`: toda a lógica, dividida em 3 blocos.

## Bloco 1 – Métodos de array

- **`forEach`**: percorre o array e executa uma função para cada item, sem devolver nada. Usado para imprimir saudações e os produtos.
- **`map`**: cria um **novo array** com o resultado de uma função aplicada a cada item (ex.: nomes em maiúsculas, lista de nomes dos produtos).
- **`filter`**: cria um **novo array** só com os itens que passam em uma condição (ex.: preços acima de 20, produtos abaixo de R$ 50).
- **`reduce`**: reduz o array a **um único valor** acumulando o resultado a cada passo (ex.: soma dos preços).

## Bloco 2 – Manipulação do DOM

- `querySelector` / `querySelectorAll` selecionam um ou vários elementos usando seletores CSS.
- `textContent` e `innerHTML` alteram o conteúdo dos elementos.
- `createElement` cria um elemento na memória e `append` o insere na página.
- `classList.add`, `classList.contains` e `classList.toggle` adicionam, verificam e alternam classes CSS (`destaque`, `feito`) sem mexer no HTML diretamente.

## Bloco 3 – Eventos e Event Delegation

- `addEventListener` registra funções que reagem a eventos (`click`, `mouseover`, `keyup`, `submit`).
- No formulário, `e.preventDefault()` impede o recarregamento da página e `.trim()` ignora campos só com espaços.

### Por que Event Delegation é importante?

Em vez de colocar um listener em cada `<li>`, colocamos **um único listener na `#lista`**. Como os eventos "borbulham" (bubbling) dos filhos para os pais, o listener da lista recebe o clique e usa `e.target` para descobrir qual item foi clicado.

- **Performance**: um listener só, em vez de dezenas ou centenas, gasta menos memória.
- **Elementos dinâmicos**: itens criados depois via JavaScript (como as tarefas do formulário) já funcionam, pois o listener está no pai, que existe desde o início.

## Como executar

1. Baixe/clone o repositório.
2. Abra o `index.html` no navegador.
3. Aperte F12 e vá na aba **Console**.
