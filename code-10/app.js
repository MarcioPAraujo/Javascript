/*
  Dica:

  - Alguns exercícios utilizarão métodos, propriedades e funcionalidades vistos  
    no começo do curso. Se for necessário, reveja partes das aulas anteriores  
    para relembrar.
*/

/*
  01

  - Converta a função abaixo em uma arrow function e utilize-a para exibir um  
    valor no console.
*/

const convertToString = value => console.log(value)

convertToString('dear')
  
  /*
    02
  
    - Crie uma função que retorne a quantidade de caracteres que uma string  
      recebida por parâmetro possui.
  */
 const countCharacterFromString = unknowString => unknowString.length

 console.log(countCharacterFromString('leroy'))
  
  /*
    03
  
    - Crie uma função que retorne todos os caracteres de uma string em letras  
      minúsculas;  
    - Utilize a função para exibir a string abaixo no console.
  
    "CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO"
  */
 const convertToLowerCase = phrase => phrase.toLowerCase()

 let anyPhrase = convertToLowerCase('HELLO AND WELCOME')

 console.log(anyPhrase)
  
  /*
    04
  
    - Crie uma função que recebe 2 parâmetros: um caractere e uma string;
    - Ao ser invocada, a função deve retornar o index do caractere na string.
  */
 const findTheCharacterIndex = (character,word) => word.indexOf(character) 

 let myWord = findTheCharacterIndex('a','liza')
 console.log(myWord)
  
  /*
    05
  
    - Crie uma função que, ao ser invocada, retorna um boolean indicando se o item  
      passado por argumento existe no array (também passado por argumento).
  */const thereIs = (iten,list) => list.includes(iten)
    let n = [81,0,9]
    console.log(thereIs(1,n))
  
  /*
    06
  
    - Crie uma função que retorna a concatenação de 2 arrays, passados como  
      argumentos em sua invocação;
  */const concatArrays = (array1,array2) => array1.concat(array2)
    let newArray = concatArrays('jeg bor i Norge ','hvor bor du?')
    console.log(newArray)
  /*
    07
  
    - Crie uma função que retorna o array passado como argumento em sua invocação,  
      mas com o último item removido.
  */const removeLastItem = list => list.pop()
  let randomArray = [1,2,3,4,5,6,7,8,9,0]
  let removedItem = removeLastItem(randomArray)
  console.log(removedItem)
  
  /*
    08
  
    - Crie uma função que retorna se o valor passado como argumento em sua  
      invocação é null.
  */const isNull = parameter => {
    return !parameter
  }

  console.log(isNull())
  
  /*
    09
  
    - Crie uma função que apenas invoca uma função de callback recebida por  
      parâmetro;
    - Crie outra função que apenas exibe seu nome no console;
    - Invoque a função que recebe um callback por parâmetro, passando como  
      argumento a função que exibe seu nome no console e veja se o nome realmente  
      foi exibido.
  */const onlyUsecallbackFunction = callBackFunction => callBackFunction

  const printMyName = () => {console.log('hallo god morgen Johann')}
onlyUsecallbackFunction(printMyName())
  /*
    10
  
    - Crie uma função que invoca uma função de callback recebida por parâmetro.  
      A invocação da função recebida por parâmetro deve receber um valor como  
      argumento;
    - Crie uma função que retorna o triplo de um número recebido por parâmetro;
    - Faça com que a invocação da função descrita no 1º item deste exercício (10)  
      resulte no triplo de 33.
  */
 const triple = multiplyByThree => multiplyByThree

 const multiplyByThree = num => num*3

 console.log(triple(multiplyByThree(11)))
  
  /*
    11
  
    - Utilizando um forEach, baseado no array "numbers", a cada iteração, exiba a  
      mensagem abaixo no console, substituindo os "X" pelas informações corretas;
    
    "O Xº item do array [X, X, X] é X."
  */
  
  const numbers = [1, 2, 3]
  const arrayInformations = (number,index,array) => {
    let patternPhrase = `o ${index+1} item do array ${array} é ${number}`
    console.log(patternPhrase)
  }
  numbers.forEach(arrayInformations)
  /*
    12
  
    - Converta o for loop abaixo em um forEach;
    - Após a conversão, verifique se a cópia do array lettersCopy realmente foi  
      criada.
  */
  
  const letters = ['v', 'e', 'p']
  let lettersCopy = []
  const arrayCopy = letter => {lettersCopy.push(letter)}
  letters.forEach(arrayCopy)
  console.log(lettersCopy)
    
  
  
  /*
    13
  
    - Inclua o markup abaixo em seu index.html;
    - Gere um template HTML com parágrafos. Cada parágrafo deve conter um item do  
      array "review";
    - Ao gerar o template, verifique no browser se os parágrafos foram incluídos  
      dentro da section vazia do markup abaixo.
  
    <article>
      <header>
        <h1>Sobre "Jurassic Park"</h1>
      </header>
  
      <section data-js="section"></section>
    </article>
  */
  
  const section = document.querySelector('[data-js="section"]')
  
  const review = [
    'Eu sempre adorei o filme e quando descobri que tinha o livro também fiquei doido. Demorei um pouco mas acabei comprando e finalmente li \o/.',
    'O primeiro filme foi baseado nesse livro, porém o livro (como sempre) é muito mais completo, com mais personagens, mais acontecimentos e até mesmo mais dinossauros. Na verdade nesse livro tem coisas do segundo e terceiro filme também, eles mudaram bastante nos filmes, acho que pra ficar mais comercial, e se o filme é bom, o livro é 100 vezes melhor.',
    'Michael é um ótimo autor, esse sim pesquisa muito antes de escrever um livro, além da história que já prende sua atenção, ele fala bastante de genética (pra explicar como os dinossauros foram criados) e acaba falando um pouco de programação (informática), por causa dos programas avançados e modernos que o parque tinha. E isso foi uma das coisas que eu achei muito legal, ele explica as coisas com gráficos, tabelas, códigos ... enfim, o cara é foda hahaha.',
    'Recomendo esse livro pra quem curte uma boa história de ficção. Apesar de muita gente pensar que o livro não tem graça, porque o legal mesmo é ver o dinossauro no filme, com todos os efeitos especiais, eu digo pra deixar esse pensamento de lado, pois a história é tão bem contada e os detalhes são tão bem relatados, que você passa a fazer parte da história, e vive todas as emoções hahaha.'
  ]
  
  let paragraphs = review.join(' ')
  
  section.innerHTML = paragraphs
  
  /*
    14
  
    - Implemente uma função que retorna uma string com a quantidade de pessoas que  
      curtiram um post, conforme descrito a seguir;
    - A função deve receber por parâmetro um array com os nomes das pessoas que  
      curtiram o post/vídeo/foto;  
    - Se o array recebido estiver vazio, a mensagem que a função deve retornar é  
      "Ninguém curtiu isso";  
    - Se o array conter apenas um nome, como "Rafael", por exemplo, a mensagem  
      retornada deve ser "Rafael curtiu isso";  
    - Se o array conter 2 nomes, a mensagem retornada deve ser  
      "NOME_1 e NOME_2 curtiram isso";  
    - Se o array conter 3 nomes, a mensagem retornada deve ser  
      "NOME_1, NOME_2 e NOME_3 curtiram isso";  
    - Se o array conter 4 ou mais nomes, a mensagem retornada deve ser  
      "NOME_1, NOME_2 e mais X pessoas curtiram isso". O "X" deve ser substituído  
      pelo restante da quantidade de pessoas que curtiram o post (além das duas  
      pessoas já mencionadas no início da mensagem).
  */const countLikes = (profiles) => {
    let amountOfLikes
    switch (profiles.length){
      case 0:
        amountOfLikes = `no one liked it`;break
      case 1:
        amountOfLikes = `${profiles[0]} liked your video`;break
      case 2:
        amountOfLikes = `${profiles[0]} e ${profiles[1]} liked you` ;break
      case 3: 
        amountOfLikes = `${profiles[0]}, ${profiles[1]} e ${profiles[2]} liked you`;break
      default:
        amountOfLikes = `${profiles[0]}, ${profiles[1]} and more ${profiles.length-2} liked you`


    }
    return amountOfLikes
    
  }
  let peopleWhoLiked = ['john','monica','nina','eva','emilia','melina']
  let likes = countLikes(peopleWhoLiked)
  console.log(likes)