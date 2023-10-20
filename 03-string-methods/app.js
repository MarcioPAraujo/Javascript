const byte = 'byte'
const giga = 'giga'
const mega = 'mega'
const tera = 'tera'

const size = mega+byte
console.log(size)

const javascript = 'javascript'
const js = javascript[javascript.indexOf('j')]+javascript[javascript.indexOf('s')]

console.log(js)


const mozilla = 'Mozilla Developer Network'
const mdn = mozilla[mozilla.indexOf('M')]+mozilla[mozilla.indexOf('D')]+mozilla[mozilla.indexOf('N')]
console.log(mdn)

console.log(javascript.length)

let randomWord = 'bhsdyuoasvcasudvcyalu'
let lastLetter = randomWord[randomWord.length-1]
console.log(lastLetter)

const upperCase = 'ABDUWDHIHDCSODHCAHCOHADC DYWGCD9'
console.log(upperCase.toLowerCase())

const lowerCase = 'nowsiedfch adbiqad qiw3uegdqiubed'
console.log(lowerCase.toUpperCase())
console.log(upperCase.indexOf('A'))
console.log(upperCase.lastIndexOf('A'))

const auroraBoraelis = 'green red purple blue'
console.log(auroraBoraelis.slice(0,9))

const best ='he is the worse'
console.log(best.replace('worse','best'))

let num = 10%3
console.log(num)
num++
console.log(num)

num--
console.log(num)
num=10-num; console.log(num)

let all = 'there are xx eggs'
console.log(all.replace('xx', num))

const bookMessage = '\'O Conto da Aia\' é um dos livros mais vendidos da década.'
 console.log(bookMessage)

 const namel = 'walter white'
 let newFirstName = namel[0].toUpperCase()+namel.slice(1,6)
 let newMiddlename = namel[7].toUpperCase()+namel.slice(8,namel.length)
 console.log(newFirstName+" "+newMiddlename)