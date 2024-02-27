//Singleton:when object made from constructor.
//object literal
//declaring object
const sys = Symbol("sym")
let obj = {
        name: "sk",
        id: 133,
        sys: 12
    } //way to acces object  elmemnt
console.log(obj["id"])
console.log(obj.id) //also way but not appropriate becuause js treat element also as string
    //visit site mdn js daatatpe

console.log(obj["sys"])
    //console.log(typeof(obj[sys]))
    //use square bracket inside object for showing symbol as a symbol after priitng . otherwise it will be normal
    //use of start and end barcaket is must for function execution while calling, without bracket while calling it just display function anonymous

//................Singleton object creation
const singleton = new Object() //printing this, return empty curlybraces.
singleton.id = 123
singleton.name = "suruchi"
singleton.islogin = true
console.log(singleton)
    //complex object decleration
const details = {
    id: 12,
    fulname: {
        firstname: "suruchi",
        lastname: "thakur"
    }
}
console.log(details.fulname.lastname)
    // let's have two object declared then how add object2 into object1
    //......Object.assign()
const details2 = {
    roll: 345,
}
const details3 = Object.assign({}, details, details2)
console.log(details3)
console.log({...details, ...details2 })
console.log(Object.keys(details))
console.log(Object.values(details))