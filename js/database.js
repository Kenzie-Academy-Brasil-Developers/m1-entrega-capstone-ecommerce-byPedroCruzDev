// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "img/01.jpg",
    nameItem: "one piece 3 em 1",
    splitName:['O', 'n', 'e', ' ', 'P', 'i', 'e', 'c', 'e', ' ', '3', ' ', 'e', 'm', ' ', '1', 'one', 'piece'],
    description:
      "Luffy deseja tornar-se um pirata por conta da admiração que sente por Shanks. O garoto acaba consumindo a Gomugomu-no-mimais e mais tarde se envolve em uma briga com...",
    value: 49.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Manga"],
  },
  {
    id: 2,
    img: "img/02.jpg",
    nameItem: "chainsaw man Vol.1",
    splitName: ['chainsaw', 'Man', 'vol.1'],
    description:
      "Denji é um jovem extremamente pobre que junto de Pochita, seu demônio de estimação, trabalha feito um condenado como Caçador de Demônios para pagar a imensa dívida...",
    value: 59.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Manga"],
  },
  {
    id: 3,
    img: "img/03.jpg",
    nameItem: "jujutsu kaisen: Vol.1",
    splitName:['J', 'u', 'j', 'u', 't', 's', 'u', ' ', 'K', 'a', 'i', 's', 'e', 'n', ':', ' ', 'V', 'o', 'l', '.', '1', 'vol.1', 'jujutsu', 'kaisen'],
    description:
      "Apesar do estudante colegial Yuuji Itadori ter grande força física, ele se inscreve no Clube de Ocultismo. Certo dia, eles encontram um objeto amaldiçoado e...",
    value: 39.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Manga"],
  },
  {
    id: 4,
    img: "img/04.jpg",
    nameItem: "kimetsu no yaiba Vol.1",
    splitName:['K', 'i', 'm', 'e', 't', 's', 'u', ' ', 'N', 'o', ' ', 'Y', 'a', 'i', 'b', 'a', ' ', 'V', 'o', 'l', '.', '1', 'vol.1', 'kimetsu', 'yaiba'],
    description:
      "Produto em pré-venda, tendo início de postagem a partir da 2º quinzena do mês de Março/20! Estamos na Era Taishou. O dia-a-dia pacato de Tanjiro, um gentil...",
    value: 69.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Manga"],
  },
  {
    id: 5,
    img: "img/05.jpg",
    nameItem: "boku no hero - vol.2",
    splitName:['B', 'o', 'k', 'u', ' ', 'n', 'o', ' ', 'H', 'e', 'r', 'o', ' ', '-', ' ', 'V', 'o', 'l', '.', '2', "vol.2", 'boku', 'no', 'hero'],
    description:
      "Vai começar a simulação de combate real! Deku precisa reunir toda a sua coragem para enfrentar os desafios que virão pela frente. E o primeiro adversário...",
    value: 59.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Manga"],
  },
  {
    id: 6,
    img: "img/06.jpg",
    nameItem: "soul eater vol.1",
    splitName:['S', 'o', 'u', 'l', ' ', 'E', 'a', 't', 'e', 'r', ' ', 'V', 'o', 'l', '.', ' ', '1',"vol.1", 'soul', 'eater',],
    description:
      "Na escola Shibusen, localizada no estado americano de Nevada, munidos de suas respectivas armas, as artesãs e os artesãos Maka Albarn e Soul Eater Evans; Black Star e...",
    value: 39.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Manga"],
  },
  {
    id: 7,
    img: "img/07.jpg",
    nameItem: "Inuyasha Vol. 01",
    splitName:['I', 'n', 'u', 'y', 'a', 's', 'h', 'a', ' ', 'V', 'o', 'l', '.', ' ', '0', '1', 'vol.1', 'inuyasha'],
    description:
      "A jovem Kagome encontra em um antigo poço uma passagem que a leva para um Japão Medieval habitado por criaturas místicas conhecidas como youkais. É nesse passado...",
    value: 39.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Manga"],
  },
  {
    id: 8,
    img: "img/08.jpg",
    nameItem: "Hunter X Hunter Vol.26",
    splitName:['H', 'u', 'n', 't', 'e', 'r', ' ', 'X', ' ', 'H', 'u', 'n', 't', 'e', 'r', ' ', 'V', 'o', 'l', '.', '2', '6', 'hunter', 'x','vol.26'],
    description:
      "Finalmente o Presidente Netero está frente a frente com o Rei das Chimera Ant e o mesmo vale para Gon e Pitou. Porém, tanto o jovem herói quanto o líder dos Hunters...",
    value: 49.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Manga"],
  },
  {
    id: 9,
    img: "img/09.webp",
    nameItem: "Inumanos - capa dura",
    splitName:['I', 'n', 'u', 'm', 'a', 'n', 'o', 's', ' ', '-', ' ', 'c', 'a', 'p', 'a', ' ', 'd', 'u', 'r', 'a', 'inumanos'],
    description:
      "OS INUMANOS COMO VOCÊ NUNCA VIU! Os Inumanos são uma das esquisitices mais duradouras da Marvel. Uma raça de anomalias genéticas isolada na ilha de Attilan, suas...",
    value: 43.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Hq"],
  },
  {
    id: 10,
    img: "img/10.webp",
    nameItem: "Miles Morales vol 1",
    splitName: ['M', 'i', 'l', 'e', 's', ' ', 'M', 'o', 'r', 'a', 'l', 'e', 's', ' ', 'v', 'o', 'l', ' ', '1', 'miles', 'morales', 'vol.1'],
    description:
      "Quando o enfurecido Rino e um grupo de criminosos misteriosos começam a atormentar o Brooklyn, as coisas ficam feias para o jovem Homem-Aranha! Que mistérios...",
    value: 25.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Hq"],
  },
  {
    id: 11,
    img: "img/11.webp",
    nameItem: "A Ordem Mágica",
    splitName:['A', ' ', 'O', 'r', 'd', 'e', 'm', ' ', 'M', 'á', 'g', 'i', 'c', 'a', 'orden', 'magica'],
    description:
      "Há um motivo pelo qual você nunca viu um fantasma.De dia, os membros da Ordem Mágica vivem entre nós como amigos, vizinhos e colegas de trabalho...",
    value: 64.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Hq"],
  },
  {
    id: 12,
    img: "img/12.webp",
    nameItem: "Deadpool - Antologia",
    splitName:['D', 'e', 'a', 'd', 'p', 'o', 'o', 'l', ' ', '-', ' ', 'A', 'n', 't', 'o', 'l', 'o', 'g', 'i', 'a', 'dead', 'pool'],
    description:
      "O programa Arma X atribui a Wade Wilson um fator de regeneração que lhe permite curar-se de um câncer, mas o deixa desfigurado...",
    value: 126.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Hq"],
  },
  
  
];

//interação da barra de pesquisa e do carrinho
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
//container de pesquisa
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

