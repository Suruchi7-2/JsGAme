//for of loop
const num = [2, 3, 4]
    //study for of loop
for (const i of num) {
    console.log(i)
}

const name1 = "suruchi"
for (const i of name1) {
    console.log(i)
}
//MAP
const ex = new Map()
ex.set('india', 'Delhi')
ex.set('pakistan', "isalamabad")
ex.set('india', 'Delhi')
console.log(ex) //map remove duplicate entry also it is in ordered way.

for (const i of ex) {
    console.log(i)
}
for (const [key, value] of ex) {
    console.log(key)
}
//for of loop is not iterable for object
//use for in