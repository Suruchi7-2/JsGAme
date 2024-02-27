let name = "Suruchi"
console.log(`My name is ${name} Kumari`)
    //use of backash `` it does string interpolation in javascript.
    //2nd method to declare string
let string1 = new String('suruci') //it a object here. so for s->0index here, u->1index here bcuz, key value pair
console.log(string1[2])
console.log(string1.length)
console.log(string1.toUpperCase())
console.log(string1.charAt(2))
console.log(string1.indexOf('u'))
console.log(string1.substring(1, 2))
console.log(string1.slice(-1))
    //trim() eliminate space left and right
    //include() return true or false
    //Numbers
const num = Number(100)
console.log(toString(num))
console.log(num.toFixed(1))
const num1 = 23.889
console.log(num1.toPrecision(3))
const num2 = 113.567
console.log(num2.toPrecision(3))
const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'))
    //Maths..........................
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(5.893))
console.log(Math.ceil(4.2))
console.log(Math.ceil(4.7))
console.log(Math.floor(4.3))
console.log(Math.floor(4.8))
console.log(Math.max(12, 1, 34, 23))
console.log(Math.random()) //always gives random number between 0 to 1
console.log(Math.round() * 10 + 1)

//.................Dates
let todaydate = new Date()
console.log(todaydate) //not much readable , make readble
console.log(todaydate.toString())
console.log(todaydate.toDateString())
console.log(todaydate.toLocaleDateString()) //much good for date showing
let todaydate1 = new Date(2024, 0, 21)
console.log(todaydate.toLocaleString())
    //get time in seconds, using
console.log(Math.floor(Date.now() / 1000))
    //getDay,getMonth,getTime