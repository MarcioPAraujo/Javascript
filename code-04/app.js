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

let DogsName = maleDogsName.concat(femaleDogsName)
console.log(DogsName)


DogsName.pop()
console.log(DogsName[DogsName.length-1])
