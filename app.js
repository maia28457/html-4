console.log("===== BLOCO 1 =====");

const nomes = ["Ana", "Bruno", "Carla"];

nomes.forEach((nome) => {
  console.log(`Olá, ${nome}!`);
});

const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);

const precos = [10, 25, 40, 5, 60];

const precosAcima20 = precos.filter((preco) => preco > 20);
console.log("Preços acima de 20:", precosAcima20);

const somaPrecos = precos.reduce((total, preco) => total + preco, 0);
console.log("Soma dos preços:", somaPrecos);

const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caneta", preco: 3 },
  { nome: "Calculadora", preco: 45 },
];

const nomesProdutos = produtos.map((p) => p.nome);
console.log("Nomes dos produtos:", nomesProdutos);

const produtosBaratos = produtos.filter((p) => p.preco < 50);
console.log("Produtos com preço menor que 50:", produtosBaratos);

const totalProdutos = produtos.reduce((total, p) => total + p.preco, 0);
console.log("Soma dos preços dos produtos:", totalProdutos);

produtos.forEach((p) => {
  console.log(`${p.nome}: R$ ${p.preco}`);
});

console.log("===== BLOCO 2 =====");


const MEU_NOME = "Pedro Lucas de Albuquerque";

const titulo = document.querySelector("#titulo");
titulo.textContent = `Blog do ${MEU_NOME}`;

const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach((p) => console.log(p.textContent));

const lista = document.querySelector("#lista");

lista.innerHTML += `
  <li>Primeiro item</li>
  <li>Segundo item</li>
`;

const terceiro = document.createElement("li");
terceiro.textContent = "Terceiro item";
lista.append(terceiro);

terceiro.classList.add("destaque");
console.log('Tem a classe "destaque"?', terceiro.classList.contains("destaque"));

const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
const primeiraTarefaIndex = lista.querySelectorAll("li").length; // posição da 1ª tarefa

tarefas.forEach((tarefa) => {
  const li = document.createElement("li");
  li.textContent = tarefa;
  lista.append(li);
});

lista.querySelectorAll("li")[primeiraTarefaIndex].classList.add("feito");
console.log("Total de itens na lista:", document.querySelectorAll("li").length);

console.log("===== BLOCO 3 =====");

const botao = document.querySelector("#botao");
botao.addEventListener("click", () => {
  console.log("Clicou!");
});
botao.addEventListener("mouseover", () => {
  botao.textContent = "Pode clicar!";
});

const campoNome = document.querySelector("#nome");
campoNome.addEventListener("keyup", () => {
  console.log(campoNome.value);
});

lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("feito");
    console.log(e.target.textContent);
  }
});

const liDinamico = document.createElement("li");
liDinamico.textContent = "Item criado via JavaScript (clique em mim!)";
lista.append(liDinamico);


const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const texto = campoTarefa.value.trim();
  if (texto === "") return; // campo vazio: não adiciona nada

  const li = document.createElement("li");
  li.textContent = texto;
  lista.append(li);

  campoTarefa.value = "";
});
