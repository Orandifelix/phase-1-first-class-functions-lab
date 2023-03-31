// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// should return a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers =function(drivers){
    return (drivers.slice(0,2));
}

// should return an array of the last two drivers
const returnLastTwoDrivers =function(drivers){
    return (drivers.slice(-2));
}
// has the `returnFirstTwoDrivers` function to as its first element
//  has the `returnLastTwoDrivers` function to as its last element
// allows us to invoke either function from the array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers ]
 

// multiply a given value using the created multiplier
function createFareMultiplier() {

    return function fareMultiplier(number){

        return (number * number)

    }
}
// fareDoubler()
function fareDoubler(number) {
    return (number * 2)
}
//  fareTripler()
function fareTripler(number) {
    return ( number * 3)
}

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
  }