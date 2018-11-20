const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park("Jake's Cool Dinosaur Park", 10, []);

    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);

    dinosaur2 = new Dinosaur('raptor', 'carnivore', 40);

    dinosaur3 = new Dinosaur('t-rex', 'carnivore', 50);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, "Jake's Cool Dinosaur Park");
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });


  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to find the total number of expected visitors per day', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.expectedVisitorsPerDay();
    assert.strictEqual(actual, 90);
  })

  it('should be able to find the total number of expected visitors per year', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.expectedVisitorsPerYear();
    assert.strictEqual(actual, (90 * 365) )
  });

  it('should be able to calculate the expected ticket sales per year', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.expectedYearlySales();
    assert.strictEqual(actual, 328500)
  })

// visitors * price


  it('should be able to find the dinosaur that attracts the most visitors', function() {

  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.dinosaursOfSpecies('t-rex').length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaursOfSpecies('t-rex');
    actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

});
