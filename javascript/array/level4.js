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
// let total = 0
//arr.forEach((item,id)=>{
    // // yedi item.length === 4, total ma add 1
// })
//console.log(output)

// high level
// Q3 
// expected output: 12
// count total characters in all the strings in the array
// let strCount = 0
//arr.forEach((item,id)=>{
    // // add item.length  to strCount
// })
//console.log(strCount)