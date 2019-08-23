/**
 * ///////////
 * User Weapon
 * ///////////
 * Function userWeapon adalah sebuah function yang berfungsi merubah senjata dari setiap karakter.
 * Function ini menerima parameter yaitu:
 *  - user = tipe data object, merupakan informasi dari user
 *  - weapon = tipe data string, merupakan senjata yang akan dipakai user
 * Function ini akan mengembalikan tipe data string yang berisi informasi perubahan senjata
 * 
 * [EXAMPLE]
 * Input:
 * - User: {
 *    name: 'yogs',
 *    weapon: 'redKnife',
 *    job: 'swordman',
 *    attack: 700
 *  }
 * - newWeapon: blackKnife
 * Proses:
 * - Apabila heroes tersebut dapat menggunakan weapon yang diminta maka akan diubah senjata
 *   dan menyesuaikan dengan output nilai yang baru. (700 - weaponLama(100) + weapon baru (300)) = 900
 * Output:
 * yogs menggunakan senjata blackKnife attack menjadi 900
 * 
 * [RULES]
 * 1. Dilarang menggunakan built in function kecuali .push() dan .unshift()
 * 2. Asumsi senjata awal pemain selalu ada dan sesuai
 * 3. Apabila ada karakter yang berusaha memakai senjata yang tidak bisa dipakai job tersebut
 *    maka kembalikan Invalid Weapon
 */

/**
 * DAFTAR WEAPONS
 * 
 * | Name           | Type    | Attack |
 * | -------------- | ------- | ------ |
 * | redKnife       | knife   | 100    |
 * | blackKnife     | knife   | 300    |
 * | crimsonSword   | katana  | 800    |
 * | moonLightSword | katana  | 400    |
 * | starKunai      | kunai   | 80     |
 * | huumaShuriken  | kunai   | 340    |
 * | emptyBracer    | knuckle | 20     |
 * | brokenArms     | knuckle | 40     |
 * 
 * 
 * DAFTAR HEROES
 * 
 * | Job      | Weapon Types         |
 * | -------- | -------------------- |
 * | swordman | knife, katana        |
 * | ninja    | knife, kunai, katana |
 * | samurai  | knife, katana        |
 * | monk     | knuckle              |
*/

function userWeapon(user, weapon) {
  // code here
  var senjata = {
    redKnife : ['knife',100],
    blackKnife : ['knife',300],
    crimsonSword : ['katana',800],
    moonLightSword : ['katana',400],
    starKunai : ['kunai',80],
    huumaShuriken : ['kunai',340],
    emptyBracer : ['knuckle',20],
    brokenArms : ['knuckle',40]
  }
  var hero = {
    swordmand : ['knife','katana'],
    ninja : ['knife','kunai','katana'],
    samurai : ['knife','katana'],
    monk : ['knuckle']
  }


// yogs menggunakan senjata blackKnife attack menjadi 900
// Invalid weapon
// yuss menggunakan senjata starKunai attack menjadi 640

  var damage = 0
  var reduc = 0
  if(senjata[weapon][0]===senjata[user.weapon][0]){
    reduc = user.attack -senjata[user.weapon][1]
    damage = reduc + senjata[weapon][1]
  }else{
    return 'invalid weapon'
  }
  // var totadamage = 
  // console.log(reduc)
  // console.log(damage)
  return user.name+' menggunakan senjata '+weapon+' attack menjadi '+damage
  // return senjata[weapon][1]-user.attack


  // var senjata = [
  //   ['redKnife','knife',100],
  //   ['blackKnife','knife',300],
  //   ['crimsonSword','katana',800],
  //   ['moonLightSword','katana',400],
  //   ['starKunai','kunai',80],
  //   ['huumaShuriken','kunai',340],
  //   ['emptyBracer','knuckle',20],
  //   ['brokenArms','knuckle',40]
  // ]
  // var hero = [
  //   ['swordman',['knife','katana']],
  //   ['ninja',['knife','kunai','katana']],
  //   ['samurai',['knife','katana']],
  //   ['monk','knuckle']
  // ]
  // var damage = 0
  // var reduc =0
  // for(var i=0; i<senjata.length; i++){
  //   for(var j=0; j<senjata[i].length; j++){
  //     if(user.weapon === senjata[i][j]){
  //       reduc = senjata[i][2]
  //     }
  //     else if(weapon===senjata[i][j]){
  //       damage = senjata[i][2]
  //     }
  //   }
  // }
  // for(var k=0; k<hero.length; k++){

  // }
  // var total = (user.attack - reduc) + damage
  // // console.log(damage)
  // // console.log(reduc)
  // // console.log(total)
  // return user.name + ' menggunakan senjata ' + weapon + ' attact menjadi '+total
}


var yogs = {
  name: 'yogs',
  job: 'swordman',
  weapon: 'redKnife',
  attack: 700
}
console.log(userWeapon(yogs, 'blackKnife'))
// yogs menggunakan senjata blackKnife attack menjadi 900


var arms = {
  name: 'arms',
  job: 'monk',
  weapon: 'emptyBracer',
  attack: 3000
}
console.log(userWeapon(arms, 'crimsonSword'))
// Invalid weapon    jika weapon type sama dengan user[weapon]type baru di proses jika tidak invalid weapon


console.log(userWeapon({
  name: 'yuss',
  job: 'ninja',
  weapon: 'huumaShuriken',
  attack: 900
}, 'starKunai'))
// yuss menggunakan senjata starKunai attack menjadi 640