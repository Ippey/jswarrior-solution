ijsWarrior.turn = function(warrior) {
  if (warrior.check() == "wall") {
    warrior.pivot();
  }
  else if (warrior.getHealth() < 10 || warrior.resting == "1") {
      warrior.resting = "1";
    if (warrior.getHealth() < warrior.health) {
      warrior.walk("backward");
    } else {
      warrior.rest();
      if (warrior.getHealth() == 20) {
        warrior.resting = "";
      }
    }
  }
  else if(warrior.check() == "enemy") {
    warrior.attack();
  }
  else if (warrior.check() == "diamond") {
    warrior.collect();
  }
  else {
    warrior.walk()
  }
  warrior.health = warrior.getHealth();

}

