function setAnimalEvents() {  
  var elAnimals = document.getElementsByClassName(elClass.animal);

  Array.from(elAnimals).forEach(function (elAnimal) {
    elAnimal.querySelector('.' + elClass.animalBtnAddRemove).addEventListener('click', function () {
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

function init() {
  zone.init();
  raft.init();
  setAnimalEvents();
}

(function () {
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', init, false);
  } else {
    window.addEventListener('load', init, false);
  }
})();
