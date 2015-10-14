// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

// One Missing: Write a function that takes an array of integers between 1 and 10, with one missing integer, as an argument and returns the missing integer. Test this with Mocha and Chai.

var incomplete = [1,2,3,4,5,7,8,9,10];

function missingInteger (incomplete) {

  var complete = [1,2,3,4,5,6,7,8,9,10];
  var missing = [];
  var incompleteSorted = incomplete.sort(function(a, b){return a-b});

  for (var i = 0; i < complete.length; i++) {
    if (complete[i] != incompleteSorted[i]) {
       missing.push(complete[i]);
    }
  }

  return missing[0];

}

// function missingInteger (incomplete) {

//   var complete = [1,2,3,4,5,6,7,8,9,10];
//   var missing = [];
//   var incompleteSorted = incomplete.sort(function(a, b){return a-b});

//   incompleteSorted.filter(function(num,i) {
//     return incompleteSorted[i+1] - incompleteSorted[i] > 1;
//   })

//   return missing[0];

// }
