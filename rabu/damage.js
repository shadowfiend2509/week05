// Diberikan function attack(), damageCalculation().

// Function damageCalculation() akan menerima 2 parameter yaitu numberOfAttacks dan damagePerAttack
// Function attack() akan menerima 1 parameter yaitu damage
// [IMPLEMENTASI] Gunakan function damageCalculation() untuk menghitung damage yang diterima dan gunakan function attack() untuk mensimulasikan setiap attack dengan rumus damage - 2 disetiap attack.

// [CONTOH] damageCalculation(3, 10) akan mengembalikan nilai 24

// Karena attack akan dikurangi 2, maka setiap attack akan menghasilkan damage 8

    function attack (damage) {
    // Code disini
    if(damage ===0){
      return 0
    }else{
      var reduc = 2
      return reduc + attack(damage -1)
    }
  }
    // console.log(attack(10))
    
    function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    var hasil = numberOfAttacks * damagePerAttack
    if(numberOfAttacks === 0){
      return 0
    }
    else{
      return hasil - attack(numberOfAttacks)
    }
  }
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
    
  console.log(damageCalculation(10, 4)); // 20
    
  console.log(damageCalculation(5, 20)); // 90
  console.log(damageCalculation(10, 45)); // 450

