
let menu = document.getElementById('menu')
let ul   = document.createElement('ul')
menu.append(ul)
ul.classList = "box-container"

let cartUl = document.querySelector('.cart-section')



//loop do array de objetos

function listProducts (arr, section){

  section.innerHTML = ''

    for(let i =0; i < arr.length; i++){
        
        let products = arr[i]
        createCards(products, section)
    }
}
listProducts(data, ul)

function createCards(obj, section){
    let id          = obj.id
    let image       = obj.img
    let name        = obj.nameItem
    let discription = obj.description
    let price       = obj.value
    let addCart     = obj.addCart
    let tag         = obj.tag
    let splitName   = obj.splitName
    
    //criando tags
    const li      = document.createElement('li')
    const img     = document.createElement('img')
    const h3      = document.createElement('h3')
    const p       = document.createElement('p')
    const h4      = document.createElement('h4')
    const span    = document.createElement('span')
    const btnA    = document.createElement('button')
    const div     = document.createElement('div')

    

    if(section.classList == 'box-container'){
    
    //criando append
    li.append(img, h3, p, h4, span, btnA)

    section.append(li)

    //adicionando classes
    li.classList        = 'box'
    h4.classList        = 'price'
    btnA.classList   = 'btn'

    //adicionando atributos

    img.src         = image
    h3.innerHTML    = name
    p.innerHTML     = discription
    h4.innerHTML    = `R$${price.toString().replace(".", ",")}`
    span.innerHTML  = tag
    btnA.innerHTML  = addCart
    btnA.id         = id

}else if(section.classList == 'cart-section'){
    span.classList = 'fas fa-times'
    li.classList   = 'cart-item'
    div.classList  = 'content'
    h4.classList   = 'price'

    div.append(h3, h4)
    li.append(span, img, div)
    section.append(li)
    span.id         = name
    img.src         = image
    h3.innerHTML    = name
    h4.innerHTML    = `R$${price.toString().replace(".", ",")}`

    }
}

ul.addEventListener('click', inteceptClick)

let cardProducts = []

function inteceptClick(event){
    let buyBtn = event.target

    if(buyBtn.tagName == 'BUTTON' ){
        //id do produto
      let idProduct = buyBtn.id

      let products = data.find(function(products){

            if(products.id == idProduct ){
              
                return products
            }
        })
          addToCart(products) 
    }
   
}

function addToCart(products){
    if(products !== undefined){
        cardProducts.push(products)
        
    }
    listProducts(cardProducts,cartUl)
    sumTotal(cardProducts)
}
console.log(cardProducts)

let priceTotal = document.querySelector('.price > span')
let totalItens = document.querySelector('.quantidade > span')


function sumTotal (arr){
    let sumItens = 0
    let sumTotalItens = 0

    for(let i = 0; i < arr.length; i ++ ){
       let position = arr[i]
 

        sumTotalItens = i + 1
  
        sumItens += position.value
        
    }
    priceTotal.innerHTML = sumTotalItens
    totalItens.innerHTML = `R$${sumItens.toString().replace(".", ",")}`
}

cartUl.addEventListener('click', removeButton)

function removeButton (event){

    let spanButton = event.target

    console.log(spanButton)


    if(spanButton.tagName == 'SPAN'){

      let index = cardProducts.findIndex((element) => {
        return  element.name == spanButton.id
       })
  
       cardProducts.splice(index,1)

     
        
    listProducts(cardProducts,cartUl)
    sumTotal(cardProducts)
    
    }

    return cardProducts
}


//barra de pesquisa 

let input  = document.querySelector('#search-box')
let button = document.querySelector('.search-form > label')


button.addEventListener('click', (event) =>{
    //value => valor digitado pelo usuario
    let searchItens = input.value.trim()

    let resultSearch= search(searchItens)

    listProducts(resultSearch, ul)
} )

function search(value){
    let resultToSearch = []

    for(let i = 0; i<data.length; i ++){
       
        if(value == data[i].nameItem){

            resultToSearch.push(data[i])
        }else if(value == data[i].tag){
            resultToSearch.push(data[i])
        }else if(data[i].splitName.includes(value)){
            resultToSearch.push(data[i])
        }
    }

    return resultToSearch
}


let hq    = document.querySelector('.hq')

let mangas= document.querySelector('.mangas')

let allProducts = document.querySelector('.all')


mangas.addEventListener('click', () =>{
    //recebe um valor pré definido igual a tag dentro do nossa data
    let searchItens = 'Manga'

    let resultSearch= search(searchItens)

    listProducts(resultSearch, ul)
} )

//lista apenas os HQ´s
hq.addEventListener('click', () =>{
    
    let searchItens = 'Hq'

    let resultSearch= search(searchItens)

    listProducts(resultSearch, ul)
} )

allProducts.addEventListener('click', () =>{

    listProducts(data, ul)
} )

