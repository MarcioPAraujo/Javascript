/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/

const ul = document.querySelector('ul')
const li = Array.from(ul.children)
li.forEach((currentElement)=>{
    currentElement.classList.add('video')
})

/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/
const h2 = document.querySelector('h2')
console.log(h2.parentElement)


/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

    const h1 = document.querySelector('h1')
    console.log(h1.nextElementSibling)

/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

console.log(ul.previousElementSibling)

/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/
    
    const list = document.querySelectorAll('li')
    const liConsole = (event) =>{
        console.log(event.target.innerText)
    }
    list.forEach((li)=>{
        //console.log(li.innerText)
        li.addEventListener('click',liConsole)
    })


/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [{
    name: 'Como o promise all funciona | JavaScript',
    length: '00:01:52'
  }, {
    name: 'Como refatorar um for loop | JavaScript',
    length: '00:04:18'
  }, {
    name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
    length: '00:02:55'
  }]
  const buttonAdd = document.querySelector('button')
  const addNewVideo = () => {
    
    videos.forEach((video)=>{
        
        let newLi = document.createElement('li')
        newLi.textContent = video.name
        ul.append(newLi)
        
    })
  }
buttonAdd.addEventListener('click',addNewVideo)

  /*
    07
  
    - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
      sejam removidos.
  */
    const deleteAll = () => {
        const body = document.querySelector('body')
        const bodyElements = Array.from(body.children)

        bodyElements.forEach((element)=>{
            element.remove()
        })
    }
      h1.addEventListener('click',deleteAll)