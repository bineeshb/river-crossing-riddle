function setAnimalEvents() {
  var elAnimals = document.getElementsByClassName(elClass.animal);

  Array.from(elAnimals).forEach(function (elAnimal) {
    elAnimal.querySelector(elSel.animalBtnAddRemove).addEventListener('click', function () {
      var elParentContainer = elAnimal.parentElement.parentElement,
          isAnimalInFireZone = elParentContainer.classList.contains(elClass.fireZone),
          isAnimalInSafeZone = elParentContainer.classList.contains(elClass.safeZone),
          isAnimalInRaft = elParentContainer.classList.contains(elClass.raftContent);

      if (raft.hasCapacity() && ((isAnimalInFireZone && raft.isInFireZone()) || (isAnimalInSafeZone && raft.isInSafeZone()))) {
        raft.addAnimal(elAnimal);
      } else if (isAnimalInRaft) {
        zone.addAnimal((raft.isInSafeZone() ? 'safe' : 'fire'), elAnimal);
      }
    });
  });
}

function restartGame() {
  var elWildebeests = document.getElementsByClassName(elClass.wildebeest),
      elLions = document.getElementsByClassName(elClass.lion),
      elAnimals = Array.from(elLions).concat(Array.from(elWildebeests));

  elAnimals.forEach(function (elAnimal) {
    elAnimal.classList.remove(elClass.animalDead);
    zone.elFireZoneAnimalWrapper.append(elAnimal);
  });

  document.querySelector('body').classList.remove(elClass.gameover, elClass.gameoverFailure, elClass.gameoverSuccess);
  raft.setInZone('fire');
  zone.setHasRaft('fire');
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
  setAnimalEvents();

  document.querySelector(elSel.btnRestart).addEventListener('click', function () {
    restartGame();
  });
}

(function () {
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', init, false);
  } else {
    window.addEventListener('load', init, false);
  }
})();
