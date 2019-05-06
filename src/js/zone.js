var zone = {
  elFireZone: null,
  elSafeZone: null,
  elFireZoneAnimalWrapper: null,
  elSafeZoneAnimalWrapper: null,

  init: function () {
    this.elFireZone = document.querySelector('.' + elClass.fireZone);
    this.elSafeZone = document.querySelector('.' + elClass.safeZone);
    this.elFireZoneAnimalWrapper = document.querySelector(elSel.fireZoneAnimalWrapper);
    this.elSafeZoneAnimalWrapper = document.querySelector(elSel.safeZoneAnimalWrapper);

    this.setZoneHasRaft();
  },

  addAnimal: function (toZone, elAnimal) {
    if (toZone === 'safe') {
      this.elSafeZoneAnimalWrapper.append(elAnimal);
    } else {
      this.elFireZoneAnimalWrapper.append(elAnimal);
    }
  },

  setZoneHasRaft: function (raftInZone) {
    this.elSafeZone.classList.remove(elClass.zoneHasRaft);
    this.elFireZone.classList.remove(elClass.zoneHasRaft);

    if (raftInZone === 'safe') {
      this.elSafeZone.classList.add(elClass.zoneHasRaft);
    } else {
      this.elFireZone.classList.add(elClass.zoneHasRaft);
    }
  }
};
