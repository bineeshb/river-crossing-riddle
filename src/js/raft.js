var raft = {
  el: null,
  elAnimalsWrapper: null,
  elBtnRemoveAll: null,
  elBtnToSafeZone: null,
  elBtnToFireZone: null,
  numOfCrossings: 0,

  init: function () {
    this.el = document.querySelector(elSel.raft);
    this.elAnimalsWrapper = document.querySelector(elSel.raftAnimalWrapper);
    this.elBtnRemoveAll = document.querySelector(elSel.raftBtnRemoveAll);
    this.elBtnToSafeZone = document.querySelector(elSel.raftBtnToSafeZone);
    this.elBtnToFireZone = document.querySelector(elSel.raftBtnToFireZone);

    this.setEventListeners();
    this.setInZone('fire');
  },

  setEventListeners: function () {
    this.elBtnToSafeZone.addEventListener('click', (function () {
      this.crossToZone('safe');
    }).bind(this));
  
    this.elBtnToFireZone.addEventListener('click', (function () {
      this.crossToZone('fire');
    }).bind(this));

    this.elBtnRemoveAll.addEventListener('click', (function () {
      this.moveAnimalsToZone();
    }).bind(this));
  },

  hasCapacity: function () {
    return this.elAnimalsWrapper.querySelectorAll(elSel.animal).length < raftMaxCapacity;
  },

  isInSafeZone: function () {
    return this.el.classList.contains(elClass.raftInSafeZone);
  },

  isInFireZone: function () {
    return this.el.classList.contains(elClass.raftInFireZone);
  },

  addAnimal: function (elAnimal) {
    this.elAnimalsWrapper.prepend(elAnimal);
  },

  setNumOfCrossings: function (numOfCrossings) {
    if (numOfCrossings !== undefined) {
      this.numOfCrossings = numOfCrossings;
    } else {
      this.numOfCrossings++;
    }
    document.querySelector(elSel.numOfCrossings).innerText = this.numOfCrossings;
  },

  setInZone: function (inZone) {
    this.el.classList.remove(elClass.raftCrossing, elClass.raftInFireZone, elClass.raftInSafeZone);
    this.el.classList.add((inZone === 'safe') ? elClass.raftInSafeZone : elClass.raftInFireZone);
  },

  crossToZone: function (toZone) {
    this.setInZone(toZone);
    this.el.classList.add(elClass.raftCrossing);
    zone.removeHasRaft();

    setTimeout((function () {
      this.setNumOfCrossings();
      this.el.classList.remove(elClass.raftCrossing);
      zone.setHasRaft(toZone);
      checkGameStatus();
    }).bind(this), raftCrossingDuration);
  },

  moveAnimalsToZone: function () {
    var elAnimalsInRaft = this.elAnimalsWrapper.querySelectorAll(elSel.animal),
        moveAnimalToZone = this.isInSafeZone() ? 'safe' : 'fire';
  
    Array.from(elAnimalsInRaft).forEach(function (elAnimal) {
      zone.addAnimal(moveAnimalToZone, elAnimal);
    });
  },

  getAnimals: function () {
    return {
      lion: this.elAnimalsWrapper.querySelectorAll(elSel.animalLion).length,
      wildebeest: this.elAnimalsWrapper.querySelectorAll(elSel.animalWildebeest).length
    };
  },

  setAnimalAsDead: function () {
    var elAnimalWildebeest = this.elAnimalsWrapper.querySelectorAll(elSel.animalWildebeest);

    Array.from(elAnimalWildebeest).forEach(function (elAnimal) {
      elAnimal.classList.add(elClass.animalDead);
    });
  },

  reset: function () {
    this.setNumOfCrossings(0);
    this.setInZone('fire');
  }
};
