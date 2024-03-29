/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/
function multiplication(number1=null,number2=null){
    return number1 * number2
}


console.log(multiplication(13,10))

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/

const division = function(number1=null,number2=null){
    return number1/number2
}

console.log(division(13,10))

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."

*/
const stringRepetition = function(phrase = ""){
    console.log(phrase)
}
let standardPhrase 
for(let i=0;i<7;i++){
    standardPhrase = `this is the ${i+1} time that the message is being showed`
    stringRepetition(standardPhrase)
}

/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/


const arrayToUppercase = function(arrayLowerCase=[]){
    //const arrayLowerCaseLenght = arrayLowerCase.lenght
    const arrayUpperCase = []
    for(let i=0;i<arrayLowerCase.length;i++){
       let upperCaseWord 
       upperCaseWord = arrayLowerCase[i].toUpperCase()
        arrayUpperCase.push(upperCaseWord)

    }
    return arrayUpperCase

}
const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']

console.log(arrayToUppercase(millennialWords))
/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const positiveNumber = function(randomNumber){
  return randomNumber>0
}

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]
let positive=0, negative=0, i=0
let arraySize = randomNumbers.length

while(arraySize>i){
  const itIsPositive = positiveNumber(randomNumbers[i])

  if(itIsPositive)
  {positive++}
  else
  {negative++}
  i++
}
console.log(randomNumbers)
console.log(`this array has ${positive} positive number and ${negative} negative numbers`)

/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/
function getOddNumbers(numbers){
  let oddNumbers = []
  arraySize = numbers.length

  for(let i =0;i<arraySize;i++){
    const oddNumber = numbers[i]%2 !== 0
    const currentNumber = numbers[i]

    if(oddNumber){
      oddNumbers.push(currentNumber)
    }
  }
  return oddNumbers
}
const listOfNumbers = getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])
console.log(listOfNumbers)

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]
let phrase =[]
let word 
for(let i = 0;i<functions.length;i++){
  
  word = functions[i]()
  phrase.push(word)

}
console.log(phrase.join(" "))