var classAnimal = 'animal',
    classAnimalsWrapper = 'animals-wrapper',
    classRaft = 'raft',
    classRaftContent = 'raft-content',
    classRaftInSafeZone = 'in-safe-zone',
    classRaftInFireZone = 'in-fire-zone',
    classRaftRemoveAll = 'btn-remove-all',
    classRaftToSafeZone = 'btn-to-safe-zone',
    classRaftToFireZone = 'btn-to-fire-zone',
    classSafeZone = 'safe-zone',
    classFireZone = 'fire-zone',
    selRaftAnimalWrapper = '.' + classRaftContent + ' .' + classAnimalsWrapper,
    selSafeZoneAnimalWrapper = '.' + classSafeZone + ' .' + classAnimalsWrapper,
    selFireZoneAnimalWrapper = '.' + classFireZone + ' .' + classAnimalsWrapper,
    elSafeZoneAnimalWrapper,
    elFireZoneAnimalWrapper,
    raftMaxCapacity = 2;

var raft = {
  el,
  elAnimalsWrapper,
  elBtnRemoveAll,
  elBtnToSafeZone,
  elBtnToFireZone,

  setDOMElements: function () {
    this.el = document.querySelector('.' + classRaft);
    this.elAnimalsWrapper = document.querySelector(selRaftAnimalWrapper);
    this.elBtnRemoveAll = document.querySelector('.' + classRaftRemoveAll);
    this.elBtnToSafeZone = document.querySelector('.' + classRaftToSafeZone);
    this.elBtnToFireZone = document.querySelector('.' + classRaftToFireZone);
  },

  hasCapacity: function () {
    return this.elAnimalsWrapper.querySelectorAll('.' + classAnimal).length < raftMaxCapacity;
  },

  isInSafeZone: function () {
    return this.el.classList.contains(classRaftInSafeZone);
  },

  isInFireZone: function () {
    return this.el.classList.contains(classRaftInFireZone);
  }
};

function setAnimalEvents() {  
  var elAnimals = document.getElementsByClassName(classAnimal);

  Array.from(elAnimals).forEach(function (elAnimal) {
    elAnimal.addEventListener('click', function () {
      var elParentContainer = this.parentElement.parentElement,
          isAnimalInFireZone = elParentContainer.classList.contains(classFireZone),
          isAnimalInSafeZone = elParentContainer.classList.contains(classSafeZone),
          isAnimalInRaft = elParentContainer.classList.contains(classRaftContent);

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
  raft.elBtnToSafeZone.addEventListener('click', function () {
    raft.el.classList.remove(classRaftInFireZone);
    raft.el.classList.add(classRaftInSafeZone);
  });

  raft.elBtnToFireZone.addEventListener('click', function () {
    raft.el.classList.remove(classRaftInSafeZone);
    raft.el.classList.add(classRaftInFireZone);
  });

  raft.elBtnRemoveAll.addEventListener('click', function () {
    var elAnimalsInRaft = raft.elAnimalsWrapper.querySelectorAll('.' + classAnimal),
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
  elFireZoneAnimalWrapper = document.querySelector(selFireZoneAnimalWrapper);
  elSafeZoneAnimalWrapper = document.querySelector(selSafeZoneAnimalWrapper);
  raft.setDOMElements();

  setAnimalEvents();
  setRaftEvents();
}

(function () {
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', init, false);
  } else {
    window.addEventListener('load', init, false);
  }
})();
