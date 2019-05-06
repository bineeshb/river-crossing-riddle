var elSafeZoneAnimalWrapper,
    elFireZoneAnimalWrapper,
    raftMaxCapacity = 2,
    raftCrossingDuration = 5000;

var elClass = {
  animal: 'animal',
  animalsWrapper: 'animals-wrapper',
  animalBtnAddRemove: 'btn-add-remove',
  raft: 'raft',
  raftContent: 'raft-content',
  raftCrossing: 'crossing',
  raftInSafeZone: 'in-safe-zone',
  raftInFireZone: 'in-fire-zone',
  raftBtnRemoveAll: 'btn-remove-all',
  raftBtnToSafeZone: 'btn-to-safe-zone',
  raftBtnToFireZone: 'btn-to-fire-zone',
  safeZone: 'safe-zone',
  fireZone: 'fire-zone',
  zoneHasRaft: 'has-raft'
};

var elSel = {
  raftAnimalWrapper: '.' + elClass.raftContent + ' .' + elClass.animalsWrapper,
  safeZoneAnimalWrapper: '.' + elClass.safeZone + ' .' + elClass.animalsWrapper,
  fireZoneAnimalWrapper: '.' + elClass.fireZone + ' .' + elClass.animalsWrapper
};
