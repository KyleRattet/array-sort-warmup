var expect = chai.expect;
// var should = chai.should();

// sample!
describe('Compare Numbers', function() {
  it('1 should equal 1', function() {
    expect(1).to.equal(1);
  });
});

describe('Missing Integer', function() {


  it('should equal the missing', function() {
    var incomplete = [1,2,3,4,5,7,8,9,10];
    var incomplete2 = [1,3,4,5,6,7,8,10,2];
    var incomplete3 = [8,1,2,3,4,5,6,7,10];
    expect(missingInteger(incomplete)).to.equal(6);
    expect(missingInteger(incomplete2)).to.equal(9);
    expect(missingInteger(incomplete3)).to.equal(9);
  });
});
