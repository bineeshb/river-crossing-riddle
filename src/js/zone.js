var zone = {
  elFireZone: null,
  elSafeZone: null,
  elFireZoneAnimalWrapper: null,
  elSafeZoneAnimalWrapper: null,

  init: function () {
    this.elFireZone = document.querySelector(elSel.fireZone);
    this.elSafeZone = document.querySelector(elSel.safeZone);
    this.elFireZoneAnimalWrapper = document.querySelector(elSel.fireZoneAnimalWrapper);
    this.elSafeZoneAnimalWrapper = document.querySelector(elSel.safeZoneAnimalWrapper);

    this.setHasRaft('fire');
  },

  addAnimalToFireZone: function (elAnimal) {
    this.elFireZoneAnimalWrapper.append(elAnimal);
  },

  addAnimal: function (toZone, elAnimal) {
    if (toZone === 'safe') {
      this.elSafeZoneAnimalWrapper.append(elAnimal);
    } else {
      this.addAnimalToFireZone(elAnimal);
    }

    checkGameStatus();
  },

  removeHasRaft: function () {
    this.elSafeZone.classList.remove(elClass.zoneHasRaft);
    this.elFireZone.classList.remove(elClass.zoneHasRaft);
  },

  setHasRaft: function (raftInZone) {
    this.removeHasRaft();

    if (raftInZone === 'safe') {
      this.elSafeZone.classList.add(elClass.zoneHasRaft);
    } else {
      this.elFireZone.classList.add(elClass.zoneHasRaft);
    }
  },

  getAnimals: function (inZone) {
    var elAnimalsWrapper = (inZone === 'safe') ? this.elSafeZoneAnimalWrapper : this.elFireZoneAnimalWrapper;

    return {
      lion: elAnimalsWrapper.querySelectorAll(elSel.animalLion).length,
      wildebeest: elAnimalsWrapper.querySelectorAll(elSel.animalWildebeest).length
    };
  },

  setAnimalAsDead: function (inZone) {
    var elAnimalsWrapper = (inZone === 'safe') ? this.elSafeZoneAnimalWrapper : this.elFireZoneAnimalWrapper,
        elAnimalWildebeest = elAnimalsWrapper.querySelectorAll(elSel.animalWildebeest);

    Array.from(elAnimalWildebeest).forEach(function (elAnimal) {
      elAnimal.classList.add(elClass.animalDead);
    });
  },

  isAllAnimalsSafe: function () {
    return this.elSafeZoneAnimalWrapper.querySelectorAll(elSel.animal).length === numOfAnimals;
  },

  reset: function () {
    this.setHasRaft('fire');
  }
};
