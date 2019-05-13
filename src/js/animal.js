var animal = {
  elAnimals: null,

  init: function () {
    this.elAnimals = document.getElementsByClassName(elClass.animal);

    for (var i = 0; i < numOfAnimals; i++) {
      var animal = (i < numOfLions) ? 'lion' : 'wildebeest';
      zone.addAnimalToFireZone(this.template(animal));
    }
  },

  addRemoveEvent: function () {
    var elAnimal = this,
        elParentContainer = elAnimal.parentElement.parentElement,
        isAnimalInFireZone = elParentContainer.classList.contains(elClass.fireZone),
        isAnimalInSafeZone = elParentContainer.classList.contains(elClass.safeZone),
        isAnimalInRaft = elParentContainer.classList.contains(elClass.raftContent);

    if (raft.hasCapacity() && ((isAnimalInFireZone && raft.isInFireZone()) || (isAnimalInSafeZone && raft.isInSafeZone()))) {
      raft.addAnimal(elAnimal);
    } else if (isAnimalInRaft) {
      zone.addAnimal((raft.isInSafeZone() ? 'safe' : 'fire'), elAnimal);
    }
  },

  template: function (animal) {
    var elAddIcon = document.createElement('i'),
        elRemoveIcon = document.createElement('i'),
        elAddRemoveBtn = document.createElement('button'),
        elAnimal = document.createElement('li'),
        wrapperClass = elClass.wildebeest,
        text = 'Wildebeest';

    if (animal === 'lion') {
      wrapperClass = elClass.lion;
      text = 'Lion';
    }

    elAddIcon.classList.add('i-plus');
    elRemoveIcon.classList.add('i-minus');

    elAddRemoveBtn.classList.add('icon-btn', elClass.animalBtnAddRemove);
    elAddRemoveBtn.setAttribute('tooltip', 'Add to Raft');
    elAddRemoveBtn.setAttribute('tooltip-remove', 'Remove from Raft');
    elAddRemoveBtn.append(elAddIcon, elRemoveIcon);

    elAnimal.classList.add(elClass.animal, wrapperClass);
    elAnimal.append(document.createTextNode(text), elAddRemoveBtn);
    elAnimal.addEventListener('click', this.addRemoveEvent);

    return elAnimal;
  }
};
