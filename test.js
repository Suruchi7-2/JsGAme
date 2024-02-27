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
let res1 = counter1++ //res value still be 50 but in pre increemnt it get increased by1
    //console.log(counter++)// value will increase by 1
    //console.log(res)
    //console.log(++counter1) value will increase by 1
    console.log(res1)
    //typescript doesn't allow to compare two daraatype
console.log("1" > 2)
console.log("02" > 2)
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
    //Note: Comaprison ('>','<','<=','>=') and equality check bot fuction different 
    //while comparision, null contverted into number

//difference in '==' : equality check opeartor  and '===' strict equality
//while equality operator conversion also happens, 
console.log("2" == "2")
console.log("2" === 2)
    //1st show true becuase "2"-> string to number and then check 
    //2nd show false, "2" value as wel as type is also checked hence false
    //Datatype is categorised on basis of how it is store in memory and how to access. 
    //on above basis, two type: primitive and non primitive/reference
    //primitive data type is through just -call by value by this, copy is provided to you, no reference is given.
    //PRIMITIVE DATATYPE: 7 HAI, 1.NUMBER,2.STRING,3.BOLLEAN,4.BIGINT,5.UNDEFINED,6.NULL,7.SYMBOL
    //while in non primitive , reference is given.
    //NONPRIMITIVE DAYTYPE: ARRAY,OBJECT,FUNCTION

const arr = ["sh", "sk", "12"] //array
console.log(arr)
let check = { //object  daat type always occur in key value pair under curly braces
    name: "suruchi",
    email: "snjjm",
    pass: 123
}

const myfunction = function() {
    console.log("hii")
}

const add = function() {
    console.log(2 + 3)
}
console.log(check, add(), myfunction())
    //null ka type object hoga