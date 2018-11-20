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

Park.prototype.expectedVisitors = function () {
  let totalVisitors = 0;

  for (dinosaur of this.dinosaurs) {
    totalVisitors += dinosaur.guestsAttractedPerDay;
  }
  return totalVisitors;
};

module.exports = Park;
