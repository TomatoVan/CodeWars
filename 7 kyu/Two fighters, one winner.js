function declareWinner(fighter1, fighter2, firstAttacker) {
  let winner = '';
  if (firstAttacker == fighter1) {
    fighter2.health = fighter2.health - fighter1.damagePerAttack;
    while(1) {
      fighter1.health = fighter1.health - fighter2.damagePerAttack;
      if (fighter1.health <= 0){
        winner = fighter2.name;
        return winner;
        }
      fighter2.health = fighter2.health - fighter1.damagePerAttack;
      if (fighter2.health <= 0){
        winner = fighter1.name;
        return winner;
        
      }
    }
  }
  else {
    fighter1.health = fighter1.health - fighter2.damagePerAttack;
    while(1) {
      fighter2.health = fighter2.health - fighter1.damagePerAttack;
      if (fighter2.health <= 0){
        winner = fighter1.name;
        return winner;
      }
      fighter1.health = fighter1.health - fighter2.damagePerAttack;
      if (fighter1.health <= 0){
        winner = fighter2.name;
        return winner;
      }
    }
  }
};