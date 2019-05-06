var raft = {
  el: null,
  elAnimalsWrapper: null,
  elBtnRemoveAll: null,
  elBtnToSafeZone: null,
  elBtnToFireZone: null,

  init: function () {
    this.el = document.querySelector('.' + elClass.raft);
    this.elAnimalsWrapper = document.querySelector(elSel.raftAnimalWrapper);
    this.elBtnRemoveAll = document.querySelector('.' + elClass.raftBtnRemoveAll);
    this.elBtnToSafeZone = document.querySelector('.' + elClass.raftBtnToSafeZone);
    this.elBtnToFireZone = document.querySelector('.' + elClass.raftBtnToFireZone);

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
    return this.elAnimalsWrapper.querySelectorAll('.' + elClass.animal).length < raftMaxCapacity;
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

  setInZone: function (inZone) {
    this.el.classList.remove(elClass.raftInFireZone);
    this.el.classList.remove(elClass.raftInSafeZone);
    this.el.classList.add((inZone === 'safe') ? elClass.raftInSafeZone : elClass.raftInFireZone);
  },

  crossToZone: function (toZone) {
    this.el.classList.add(elClass.raftCrossing);
    this.setInZone(toZone);

    setTimeout((function () {
      this.el.classList.remove(elClass.raftCrossing);
      zone.setZoneHasRaft(toZone);
    }).bind(this), raftCrossingDuration);
  },

  moveAnimalsToZone: function () {
    var elAnimalsInRaft = this.elAnimalsWrapper.querySelectorAll('.' + elClass.animal),
        moveAnimalToZone = this.isInSafeZone() ? 'safe' : 'fire';
  
    Array.from(elAnimalsInRaft).forEach(function (elAnimal) {
      zone.addAnimal(moveAnimalToZone, elAnimal);
    });
  }
};
