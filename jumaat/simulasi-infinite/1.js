/* 
Buatlah sebuah function yang menerima parameter array of numbers.

Function tersebut akan mereturn numbers dengan kondisi:
  - terurut dari yang terbesar
  - terfilter hanya yang diatas atau sama dengan rata-rata


RULES:
  - dilarang menggunakan built-in function apapun selain .push


CONTOH:

INPUT:
  [2, 3, 5, 5, 6, 7]

PROCESS:
  - rata-ratanya adalah 4.67
  - yang diatas atau sama dengan rata-rata [5, 5, 6, 7]
  - lalu diurut dari yang terbesar

OUTPUT: 
  [7, 6, 5, 5]
*/


function sortAndFilterAboveMean(numbers) {
  var jumlah=0
  for(var i=0; i<numbers.length; i++){
    jumlah += numbers[i]
  }
  var ratarata = jumlah/numbers.length

  var atasrata=[]
  for(var j=0; j<numbers.length; j++){
    if(numbers[j] > ratarata){
      atasrata.push(numbers[j])
    }
  }
  for(var k=0; k<atasrata.length; k++){
    for(var l=0; l<atasrata.length; l++){
      if(atasrata[k]>atasrata[l]){
        var tampung = atasrata[l]
        atasrata[l]=atasrata[k]
        atasrata[k]=tampung
      }
    }
  }
  return atasrata

}

console.log(sortAndFilterAboveMean([2, 3, 5, 5, 6, 7])) // [ 7, 6, 5, 5 ]

console.log(sortAndFilterAboveMean([1, 10, 3, 9, 1, 4, 10])) // [ 10, 10, 9 ]

console.log(sortAndFilterAboveMean([45, 2, 8, 22, 3, 9])) // [ 45, 22 ]

console.log(sortAndFilterAboveMean([3, 5, 2, 6])) // [ 6, 5 ]