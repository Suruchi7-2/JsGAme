//Array can have mixed data type in javscript
//It is resizable
//it isn't like associative array that can be accesed like ["name"].index used to access
//while copying array values to other, array makes a shallow copy.
//shallow copy pass refrences updation in one reflect to others.
//while deep copy pass exactly copy , not oriigna thing.
const myarr = [1, "suruchi", 2]
const arr = new Array(1, 2, 3, 4)
console.log(myarr[1])
myarr.push(8)
console.log(myarr)
myarr.pop()
console.log(myarr)
myarr.unshift(9)
console.log(myarr) //it just add 9 at beginning by shifting each element 
myarr.shift()
console.log(myarr) //shift just remove 1st elemnt
let newarr = myarr.join()
console.log(newarr)
    //NOte: slice and splice both is much differnt
    //in result it seems like, slice exclude end,but splice include end too
    //but in actual in array operation, splice just modify content of original array. while slice doesn't
    //WHile merging two Array, when push is used like arr1.push(arr2), then arr1 will take arr2 data as its datatype elemnt not as Array
const arr3 = [1, 2, 3]
const arr4 = [5, 6, ]
    //push doesn't return new array, it push at back of previous array itself.
const arr6 = arr3.concat(arr4)
console.log(arr6) //concat return new array and concat properly add elemnt of array2 into array1 and return in other array.
    //New method to add arr2 elemnt into arr1.
const marr = [1, 2]
const marr2 = [3, 4]
const newarr1 = [...marr, ...marr2]
console.log(newarr1)
const newr = [1, 2, [3, 4]]
const result = newr.flat(Infinity)
console.log(result) //flat just simplify each elememnt
    //use of Array.from() for converting one type into array type.
let str1 = "suruchi"
console.log(Array.from(str1))
    //Array.of for converting one rtype into array.