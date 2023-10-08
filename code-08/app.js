/*
  01

  - Inverta o valor dos booleans do console.log() abaixo;
  - O resultado exibido no console deve ser: false true.
*/

console.log(!true, !false)

/*
  02

  - Abaixo do array "animals", verifique se o animal "leão" **não** existe no  
    array. Se não existir, exiba no console a mensagem "Leão não existe no array  
    animals.";
  - Se existir, exiba no console a mensagem "Existe um leão no array animals.".
*/

const animals = ['macaco', 'tucano','leão' ,'elefante', 'pavão', 'hipopótamo']
if(animals.includes('leão')){
    console.log('there is a lion')
}else{
    console.log('there is not a lion')
}
/*
  03

  - Some os números do array abaixo;
  - Se durante a soma, o resultado ultrapassar 400, pare a operação e exiba  
    a frase abaixo no console, substituindo "RESULTADO_DA_SOMA" pelo valor  
    correto.
  
  "A soma ultrapassou 400. Até aqui, o valor atual é RESULTADO_DA_SOMA."
*/

const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43]
const arraySize = randomNumbers.length
let randomNumbersSum = 0
let sumBiggerThan400

for(let i =0;i<arraySize;i++){

    randomNumbersSum+=randomNumbers[i]

    sumBiggerThan400 = randomNumbersSum > 400
    if(sumBiggerThan400){
        console.log(`sum overcome 400, its current value is ${randomNumbersSum}`)
        break
    }
}
/*
  04

  - Concatene as strings do array abaixo, formando uma frase;
  - Se durante a concatenação a palavra "certeza" existir, ela não deve ser  
    concatenada;
  - Exiba a frase no console.
*/

const sentence = ['A', 'certeza', 'dúvida', 'é', 'o', 'princípio', 'da', 'sabedoria.']
const certeza = 'certeza'
const sentenceLenght = sentence.length
let newSentece =[]
let itIsNotCerteza 
for(let i=0; i<sentenceLenght;i++ ){
    itIsNotCerteza = sentence[i]!='certeza'
    if(itIsNotCerteza)
    newSentece += ` ${sentence[i]}`
}

console.log(newSentece)
/*
  05

  - Itere sobre o array "randomValues" apenas até a 4ª string dele;
  - Exiba a string abaixo no console, mantendo a formatação de lista e inserindo  
    as informações corretas:

  "
    3 informações sobre o array randomValues:
      - As primeiras 4 strings são XX, XX, XX e XX;
      - Até que as primeiras 4 strings fossem iteradas, XX booleans foram iterados;
      - O array foi iterado por XX vezes.
  "
*/

const randomValues = [57, false, 'JS', [], true, 'HTML', 31, null, false, 'CSS', 97, true, 'Git', 11, 'sticker', false, 'GitHub', true, null]
const randomValuesLenght = randomValues.length
let stringCounter = 0
let stringsWithinRandomValues = []
let booleanCounter = 0
let currentItemIsAString
let currentItemIsBoolean
for(let i=0;i<randomValuesLenght;i++){
  
  if(stringCounter<4){
    
    currentItemIsAString= (typeof randomValues[i] === typeof "")
    if(currentItemIsAString){
      console.log('ok')
      stringsWithinRandomValues+=`${randomValues[i]}, `
      stringCounter++
      continue
    }
    currentItemIsBoolean = typeof randomValues[i]=== typeof true
    if(currentItemIsBoolean){
      booleanCounter++
      continue
    }
  }
  else{
    console.log(`the array was iterated ${i+1} times`)
    console.log(`${booleanCounter} booleans were counted`)
    console.log(`the four iterated strings were ${stringsWithinRandomValues}`)
    break
  }
}


/*
  06

  - Descomente a constante abaixo atribua a ela algum tipo de bebida. Exemplo:  
    água, refrigerante ou suco;
  - Utilize um switch statement com cases para essas 3 possibilidades de bebida;
  - Se o tipo da bebida é água, atribua à uma variável a mensagem "Substância 
    química cujas moléculas são formadas por dois átomos de hidrogênio e um de 
    oxigênio.";
  - Se o tipo da bebida é refrigerante, a mensagem "Bebida não alcoólica e não 
    fermentada, fabricada industrialmente, à base de água mineral e açúcar." 
    deve ser armazenada;
  - Se é suco, atribua a mensagem "Bebida produzida do líquido extraído de 
    frutos.";
  - Se nenhum desses 3 tipos de bebida der match, a variável deve armazenar 
    "Bebida desconhecida.";
  - Exiba a mensagem no console. Teste também as outras possibilidades de tipo  
    da bebida além da que você escolheu.
*/

const drinkType = 'juice'
let message
switch(drinkType){
  case 'water':
    message = `water is hydrogen plus oxigen`
    break
  case 'soft drink':
    message = `sweet poison`
    break
  case 'juice':
    message = `made of fruits`
    break
  default: 
    message = `invalid drink`
    break
}

console.log(message)

/*
  07

  - Reescreva o código comentado abaixo, utilizando um switch statement;
  - Depois de escrever o switch, modifique o valor da declaração da const "a"  
    para testar o switch que você escreveu.
*/

const a = 0

// if (a === 0) {
//   console.log(`O valor de "a" é ${a}`)
// } else if (a === 1) {
//   console.log(`O valor de "a" é ${a}`)
// } else {
//   console.log('O valor de "a" é qualquer número, exceto 0 e 1')
// }

switch(a){
  case 0:
    console.log(`o valor de a ${a}`)  
    break
  case 1:
    console.log(`o valor de a ${a}`)
    break
  default :
    console.log(`o valor de a é diferente de 0 e 1`)  
    break
}