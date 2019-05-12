var elSafeZoneAnimalWrapper,
    elFireZoneAnimalWrapper,
    raftMaxCapacity = 2,
    raftCrossingDuration = 5000;

var elClass = {
  animal: 'animal',
  animalsWrapper: 'animals-wrapper',
  animalBtnAddRemove: 'btn-add-remove',
  animalDead: 'dead',
  lion: 'lion',
  wildebeest: 'wildebeest',
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
  zoneHasRaft: 'has-raft',
  gameover: 'game-over',
  gameoverSuccess: 'success',
  gameoverFailure: 'failed',
  btnRestart: 'btn-restart'
};

var elSel = {
  animal: '.' + elClass.animal,
  animalLion: '.' + elClass.animal + '.' + elClass.lion,
  animalWildebeest: '.' + elClass.animal + '.' + elClass.wildebeest,
  animalBtnAddRemove: '.' + elClass.animalBtnAddRemove,
  btnRestart: '.' + elClass.btnRestart,
  numOfCrossings: '#crossings',
  raft: '.' + elClass.raft,
  raftAnimalWrapper: '.' + elClass.raftContent + ' .' + elClass.animalsWrapper,
  raftBtnRemoveAll: '.' + elClass.raftBtnRemoveAll,
  raftBtnToSafeZone: '.' + elClass.raftBtnToSafeZone,
  raftBtnToFireZone: '.' + elClass.raftBtnToFireZone,
  safeZone: '.' + elClass.safeZone,
  fireZone: '.' + elClass.fireZone,
  safeZoneAnimalWrapper: '.' + elClass.safeZone + ' .' + elClass.animalsWrapper,
  fireZoneAnimalWrapper: '.' + elClass.fireZone + ' .' + elClass.animalsWrapper
};
