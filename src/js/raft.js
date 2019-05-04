var raft = {
  el: null,
  elAnimalsWrapper: null,
  elBtnRemoveAll: null,
  elBtnToSafeZone: null,
  elBtnToFireZone: null,

  setDOMElements: function () {
    this.el = document.querySelector('.' + elClass.raft);
    this.elAnimalsWrapper = document.querySelector(elSel.raftAnimalWrapper);
    this.elBtnRemoveAll = document.querySelector('.' + elClass.raftBtnRemoveAll);
    this.elBtnToSafeZone = document.querySelector('.' + elClass.raftBtnToSafeZone);
    this.elBtnToFireZone = document.querySelector('.' + elClass.raftBtnToFireZone);
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

  setEventListeners: function () {
    this.elBtnToSafeZone.addEventListener('click', (function () {
      this.crossToZone('safe');
    }).bind(this));
  
    this.elBtnToFireZone.addEventListener('click', (function () {
      this.crossToZone('fire');
    }).bind(this));
  },

  crossToZone: function (toZone) {
    this.el.classList.remove(elClass.raftInFireZone);
    this.el.classList.remove(elClass.raftInSafeZone);

    this.el.classList.add(elClass.raftCrossing);
    this.el.classList.add((toZone === 'safe') ? elClass.raftInSafeZone : elClass.raftInFireZone);

    setTimeout((function () {
      this.el.classList.remove(elClass.raftCrossing);
    }).bind(this), raftCrossingDuration);
  }
};