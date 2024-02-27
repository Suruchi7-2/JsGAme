console.log('Hii')
const accountNum = 1234
let accountName = "SBI"
var accountholder = "suruchi"
accountpass = "12sd3"
console.table([accountName, accountNum, accountholder, accountpass])
    //const never change. so don't reinitialise
    //don't use var as var has issue in block scope and function scope
    //use let it's good practice.
    //Datatype.
    // 1. number: for integer
    // 2. string: for string
    // 3. boolean:true/false
    // 4.undefined: like let passkey;
    // 4.bigInt: for bign values
    // 5.null: let temp=null
    // 6. symbol: use for uniqueness property . mostly used with ReadableByteStreamController.js while  on compopnent uniqueness
console.log(typeof null)

// Conversion of datatypes(each datatype into number).
// 1."55"=convert into Number value=55
// 2. "55abc": convert into number but value=NaN
// 3. undefined : value is NaN
// 4.boolean: Convert into number value is 0 or 1.

let value = "55"
console.log(value, typeof(value))
let changevalue = Number(value)
console.log(value, typeof(changevalue))

let value1 = "55abc"
console.log(typeof(Number(value)), Number(value1))

let num1 = undefined
console.log(typeof(Number(num1)), Number(num1))

let str1 = "suruchi"
let str2 = "kumari"
let result = str1 + str2
console.log(str1 + str2)
console.log("1" + 2)
console.log("1" + "1" + 2)
console.log(1 + 2 + "3")
console.log(3 + "4")
    //let check inceremnt postfix and prefix
    //let counter = 100
let counter1 = 50
    //let res = counter++
let res1 = counter1++
    //console.log(counter++)
    //console.log(res)
    //console.log(++counter1)
    console.log(res1)