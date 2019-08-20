/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)
Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord
Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya
Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
NOTE:

Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/

function changeVocals (str) {
    var str1=str
    var hasil =''
    for(var i=0; i<str1.length; i++){
        if(str1[i] === 'a' || str[i] === 'A'){
            if (str1[i] === str[i].toUpperCase()) {
                hasil+='B'
            } else {
                hasil+='b'
            }
        }else if(str1[i] === 'i' || str[i] === 'I'){
            if (str1[i] === str[i].toUpperCase()) {
                hasil += 'J'
            }else {
                hasil += 'j'
            }
        }else if(str[i] === 'u' || str[i] === 'U'){
            if (str1[i] === str[i].toUpperCase()) {
                hasil += 'V'
            }else {
                hasil += 'v'
            }
        }else if(str1[i] === 'e'|| str[i] === 'E'){
            if (str1[i] === str[i].toUpperCase()) {
                hasil += 'F'
            }else {
                hasil += 'f'
            }
        }else if(str1[i] === 'o'|| str[i] === 'O'){
            if (str1[i] === str[i].toUpperCase()) {
                hasil += 'P'
            }else {
                hasil += 'p'
            }
        }else {
            hasil +=str[i]
        }
    }
    return hasil
}
// console.log(changeVocals('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'

// console.log(setLowerUpperCase('vPnVgBrD JFgrFS')); // 'VPNVGBRdJFGRFs'

function reverseWord (str) {
    //code di sini
    var gabung = ''
    for(var i=str.length-1; i>=0; i--){
        gabung += str[i]
    }
    return gabung

}

// console.log(reverseWord('halloeric'))

function setLowerUpperCase (str) {
    //code di sini
    var hasil =''
    for(var i=0; i<str.length; i++){
            if(str[i]===str[i].toLowerCase()){
                hasil += str[i].toUpperCase()
            }else if(str[i] === str[i].toUpperCase()){
                hasil += str[i].toLowerCase()
            }
    }
    return hasil
}
// console.log(setLowerUpperCase('tesST '))
function removeSpaces (str) {
    //code di sini
    var hasil = ''
    var tampung = ''
    for(var i=0; i<str.length; i++){
        if(str[i]===' '){
            hasil += tampung
            tampung = ''
        }else{
            tampung+=str[i]
        }
    }
    hasil+=tampung
    return hasil
}
// console.log(removeSpaces('testsatu dua tiga'))

function passwordGenerator (name) {
    //code di sini
    if(name.length<5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }

    return changeVocals(setLowerUpperCase(reverseWord(removeSpaces(name))))
}

  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'