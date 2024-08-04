const arr = ['ram','shyam','hari']

//Q1
//remove shyam
// expected output 
// ['ram', 'hari']
//syntax
const output = arr.filter((item)=>{
  if( item !== 'shyam') return item
})
console.log(output)



//Q2 count total strings which have length 4
//expected output : 1
let total = 0
arr.forEach((item,id)=>{
    // yedi item.length === 4, total ma add 1
    if(item.length ===4) {
        total= total + 1
    }
})
console.log(total)

// high level
// Q3 
// expected output: 12
// count total characters in all the strings in the array
let strCount = 0
arr.forEach((item,id)=>{
   strCount = strCount + item.length
})
console.log(strCount)


// Q4 using map, get the last characters
const lastOutput = arr.map((item)=>{
    return item[item.length -1]
  })
  console.log(lastOutput)
//['m','m','i']



const cartItems=[
    {id: 1, product:"hawkins", price:30, quantity:1},
    {id: 1, product:"baltra", price:10, quantity:3},
    ]
let totalPrice = 0
cartItems.forEach((item)=>{
    totalPrice= totalPrice + item.price * item.quantity
})
console.log(totalPrice)

    //60