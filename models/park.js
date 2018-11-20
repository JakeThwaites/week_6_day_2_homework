const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  for (index of this.dinosaurs) {
    if (index === dinosaur) {
      this.dinosaurs.splice(index, 1);
      break;
    }
  }
};

Park.prototype.expectedVisitorsPerDay = function () {
  let totalVisitors = 0;

  for (dinosaur of this.dinosaurs) {
    totalVisitors += dinosaur.guestsAttractedPerDay;
  }
  return totalVisitors;
};

Park.prototype.expectedVisitorsPerYear = function () {
  let totalPerDay = this.expectedVisitorsPerDay();
  return (totalPerDay * 365);
};

Park.prototype.expectedYearlySales = function () {
  let totalYearlyVisitors = this.expectedVisitorsPerYear();

  let totalYearlyIncome = this.ticketPrice * totalYearlyVisitors;

  return totalYearlyIncome;

};

Park.prototype.dinosaursOfSpecies = function (species) {
  let dinosaursToReturn = [];
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.species === species) {
      dinosaursToReturn.push(dinosaur)
    }
  }
  return dinosaursToReturn;
};

Park.prototype.removeDinosaursOfSpecies = function (species) {
  let dinosaursToRemove = this.dinosaursOfSpecies(species);

  for (dinosaur of this.dinosaurs) {
    if (dinosaursToRemove.includes(dinosaur) ) {
      this.dinosaurs.splice(dinosaur, 1);
    }
  }
};


module.exports = Park;
