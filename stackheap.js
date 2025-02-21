//how memory works so let.s understand
//TWo types of memory : stack used in primitive type  when stack used means actual copy is provided
// and heap used in nonprimitve type means only refrence is provided
let value1 = "suruchi" //suruchi prinited
let value2 = value1 //if value2 printed,print suruchi, value2 storing same value of value1 means stack is giving copy of value 1.
value2 = "Shivam" //on prinitng value2, shivam in value2, copy was given that'why value is updating
console.log(value1, value2)

let user1 = { name: "sk" }
let user2 = user1
user2.name = "st"
console.log(user1.name, user2.name) //In primitive type copy get pass while in this, no primitive heap  works, so user2 now pointing value of user1 hence any update in user2 will be for user1 too