function setAnimalEvents() {  
  var elAnimals = document.getElementsByClassName(elClass.animal);

  Array.from(elAnimals).forEach(function (elAnimal) {
    elAnimal.addEventListener('click', function () {
      var elParentContainer = this.parentElement.parentElement,
          isAnimalInFireZone = elParentContainer.classList.contains(elClass.fireZone),
          isAnimalInSafeZone = elParentContainer.classList.contains(elClass.safeZone),
          isAnimalInRaft = elParentContainer.classList.contains(elClass.raftContent);

      if (raft.hasCapacity() && ((isAnimalInFireZone && raft.isInFireZone()) || (isAnimalInSafeZone && raft.isInSafeZone()))) {
        raft.elAnimalsWrapper.prepend(this);
      } else if (isAnimalInRaft && raft.isInFireZone()) {
        elFireZoneAnimalWrapper.append(this);
      } else if (isAnimalInRaft && raft.isInSafeZone()) {
        elSafeZoneAnimalWrapper.append(this);
      }
    });
  });
}

function setRaftEvents() {
  raft.elBtnRemoveAll.addEventListener('click', function () {
    var elAnimalsInRaft = raft.elAnimalsWrapper.querySelectorAll('.' + elClass.animal),
        elMoveAnimalToZone;
  
    if (raft.isInFireZone()) {
      elMoveAnimalToZone = elFireZoneAnimalWrapper;
    } else if (raft.isInSafeZone()) {
      elMoveAnimalToZone = elSafeZoneAnimalWrapper;
    }

    if (!!elMoveAnimalToZone) {
      Array.from(elAnimalsInRaft).forEach(function (elAnimal) {
        elMoveAnimalToZone.append(elAnimal);
      });
    }
  });
}

function init() {
  elFireZoneAnimalWrapper = document.querySelector(elSel.fireZoneAnimalWrapper);
  elSafeZoneAnimalWrapper = document.querySelector(elSel.safeZoneAnimalWrapper);
  raft.setDOMElements();

  setAnimalEvents();
  raft.setEventListeners();
  setRaftEvents();
}

(function () {
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', init, false);
  } else {
    window.addEventListener('load', init, false);
  }
})();
