
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  }
  
 
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }
  
 
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  
  function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    }
  }
  
 
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers function
  function selectDifferentDrivers(drivers, selectFunction) {
    return selectFunction(drivers);
  }
  
 
  