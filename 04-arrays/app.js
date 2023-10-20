let braziliansFoods=[]
braziliansFoods.push("coxinha",null,"brigadeiro")
console.log(braziliansFoods)

braziliansFoods[1] = "pão de queijo"
console.log(braziliansFoods)

const info = `número de itens: ${braziliansFoods.length}\nitens:\n${braziliansFoods.join('\n')}`

console.log(info)
//

const maleDogsName = ['bambo','dorô']
const femaleDogsName = ['lora','gota']

let dogsName = maleDogsName.concat(femaleDogsName)
console.log(dogsName)


dogsName.pop()
console.log(dogsName[dogsName.length-1])

dogsName.push('nina')

const initial = `${dogsName[0][0]}, ${dogsName[1][0]}, ${dogsName[2][0]}, ${dogsName[3][0]}`

console.log(initial)
console.log(initial.toUpperCase())

const candy = dogsName[0][0]+dogsName[0][1]+dogsName[1][0]+dogsName[1][1]+dogsName[2][0]+dogsName[2][1]
console.log(candy)

console.log(`${candy} é uma palavra inventada`)
const oddNumbers = [3,5,7]
oddNumbers[1] = oddNumbers[1]+4
console.log(oddNumbers[1]**3)