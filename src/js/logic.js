function restartGame() {
  var elWildebeests = document.getElementsByClassName(elClass.wildebeest),
      elLions = document.getElementsByClassName(elClass.lion),
      elAnimals = Array.from(elLions).concat(Array.from(elWildebeests));

  elAnimals.forEach(function (elAnimal) {
    elAnimal.classList.remove(elClass.animalDead);
    zone.addAnimalToFireZone(elAnimal);
  });

  document.querySelector('body').classList.remove(elClass.gameover, elClass.gameoverFailure, elClass.gameoverSuccess);
  raft.reset();
  zone.reset();
}

function checkGameStatus() {
  var animalsInRaft = raft.getAnimals(),
      activeZone = raft.isInSafeZone() ? 'safe' : 'fire',
      otherZone = (activeZone === 'safe') ? 'fire' : 'safe',
      wildebeestsInActiveZone = animalsInRaft.wildebeest + zone.getAnimals(activeZone).wildebeest,
      wildebeestsInOtherZone = zone.getAnimals(otherZone).wildebeest,
      isDeadInActiveZone = (wildebeestsInActiveZone > 0) && ((animalsInRaft.lion + zone.getAnimals(activeZone).lion) > wildebeestsInActiveZone),
      isDeadInOtherZone = (wildebeestsInOtherZone > 0) && (zone.getAnimals(otherZone).lion > wildebeestsInOtherZone);

  if (isDeadInActiveZone) {
    raft.setAnimalAsDead();
    zone.setAnimalAsDead(activeZone);
  }

  if (isDeadInOtherZone) {
    zone.setAnimalAsDead(otherZone);
  }

  if (isDeadInActiveZone || isDeadInOtherZone) {
    document.querySelector('body').classList.add(elClass.gameover, elClass.gameoverFailure);
  } else if (zone.isAllAnimalsSafe()) {
    document.querySelector('body').classList.add(elClass.gameover, elClass.gameoverSuccess);
  }
}

function init() {
  zone.init();
  raft.init();
  animal.init();

  document.querySelector(elSel.btnRestart).addEventListener('click', restartGame);
}

(function () {
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', init, false);
  } else {
    window.addEventListener('load', init, false);
  }
})();
