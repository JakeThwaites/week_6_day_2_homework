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



module.exports = Park;
