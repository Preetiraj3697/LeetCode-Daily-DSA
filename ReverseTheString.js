function reverseString(str) {
    let revArray = [];
    let strlength = str.split(' ');
    // console.log(strlength);
    for (let i = 0; i < strlength.length; i++) {
      let a = strlength[i].split("").reverse().join("");
      revArray.push(a)
    }
    // console.log(revArray)
    return revArray.join(" ")
  }
  
//   console.log(reverseString("This is javascript code"))
  

// const string="This is Javascript code"
// let str1=string.split(""). reverse ().join("")
// let str2=str1.split(" "). reverse ().join(" ")
// console.log(str2)

// const str="This is Javascript code"
// let arr= str.split(' ')
// let out= new Array();
// for(let i=0;i<arr.length;i++){
//     out[i]=arr[i].split('').reverse().join('');
// }
// console.log(out.join(' '))
  
// let reverse=" "
// let text = "This Is Javascript Code";
// const arr = text.split(" ").map((item)=>{
//     for(let i=item.length-1;i>=0;i--){
//         reverse+=item[i]
//     }
//     reverse+=" "
//     return reverse
// })
// console.log(reverse)


const str = "This is JavaScript Code"

const stringReversalByWords = (str) => {
    const newStr = []
    str.split(" ").map((elem) =>{
    return newStr.push(elem.split("").reverse().join(""))
    })
    
    console.log(newStr.join(" "))
}

stringReversalByWords(str)








