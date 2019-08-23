/*
  ///////////
  diagonAlley
  ///////////
  Function diagonAlley adalah sebuah function yang membentuk tulisan dalam bentuk diagonal dan
  membentuk bingkai kotak seperti pada test cases. function ini akan menerima parameter string, dan
  function ini berfungsi hanya untuk menampilkan.

  [EXAMPLE]
  INPUT: non
  OUTPUT: 
    |-n
    |o|
    n-|

  NOTES:
    - word membentuk diagonal
    - tepi bingkai horizontal disambung dengan -
    - tepi bingkai vertical disambung dengan |
    - Ukuran bingkai sesuai dengan panjang karakter yang diberikan.
    - Minimal panjang karakter yang diinput adalah 3. Tampilkan 'Invalid input' jika kondisi ini tidak terpenuhi.
*/

function diagonAlley(word) {
  var hasil = ''

  for(var i=word.length-1; i>=0; i--){
    for(var j=0; j<word.length; j++){
      if(i===j){
        hasil+=word[i]
      }
    }
  }
  
  console.log(hasil)
  
  
  // for(var i=0; i<word.length; i++){
  //   for(var j=word.length-1; j>0; j--){
  //     if(j===i){
  //       hasil+=word[j]
  //     }
      
  //     hasil+='-'
  //   }
  //   if(i===0){
  //     hasil+=word[i]
  //   }
  //   hasil+='\n'

  // }
  // console.log(hasil)






  // // code here
  // hasil = ''
  // for(var i=0; i<word.length; i++){
  //   hasil+='|'
  //   for(var j=word.length-2; j>0; j--){
  //     hasil+='-'
  //   }
  //   // if()
  //   hasil+=word[i]
  //   hasil+='\n'
  // }
  // for(var i=0; i<word.length; i++){
  //   if(i===5){
  //     hasil=word[word.length -1 ]
  //   }
  //     hasil+='|'
  //   hasil +='|'
  //   for(var j=0; j<word.length; j++){
  //     if(i===j || j === (word[j]-1)-i){
  //       hasil+=word[j]
  //     }
  //     if(j<5)
  //     hasil+='-'
  //   }
  //   hasil+='|'
  //   hasil+='\n'
  // }
  // console.log(hasil)
}


// TEST CASES

diagonAlley('kuroko')
/*
  |----k
  |---u|
  |--r-|
  |-o--|
  |k---|
  o----|
*/
// console.log('')

// diagonAlley('non')
// /*
//   |-n
//   |o|
//   n-|
// */
// console.log('')

// diagonAlley('basuke')
// /*
//   |----b
//   |---a|
//   |--s-|
//   |-u--|
//   |k---|
//   e----|
// */
// console.log('')

// diagonAlley('no')
// Invalid input