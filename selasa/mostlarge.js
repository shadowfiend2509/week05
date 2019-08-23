/*

Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/


function sorting(arrNumber) {
  for(var i=0; i<arrNumber.length; i++){      //looping dr besar jadi terkecil 
    for(var j=0; j<arrNumber.length; j++){
        if(arrNumber[i]>arrNumber[j]){
            var tampung = arrNumber[j]
            arrNumber[j] = arrNumber[i]
            arrNumber[i] =tampung
        }
    }
  }
  return arrNumber
}

function getTotal(arrNumber) {
  var hasil=0
  var sort=sorting(arrNumber)[0]
  for(var i=0; i<arrNumber.length; i++){
    if(arrNumber[i]===sort){
      hasil++
    }
  }
  if(sort === undefined){
    return '\'\''
  }
  return 'angka paling besar adalah '+sort+' dan jumlah kemunculan sebanyak '+hasil+' kali'
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
  //''