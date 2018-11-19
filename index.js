const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(driver){
  drivers.push(driver);
}

function destructivelyPrependDriver(driver){
  drivers.unshift(driver);
}

function destructivelyRemoveLastDriver(driver){
  drivers.pop(driver);
}

function destructivelyRemoveFirstDriver(driver){
  drivers.shift(driver);
}

function appendDriver(driver){
  const newDrivers = [...drivers, driver];
  return newDrivers;
}

function prependDriver(driver){
  const newDrivers = [driver, ...drivers];
  return newDrivers;
}

function removeLastDriver(driver){
  const firedLastDriver = drivers.slice(0, drivers.length-1); //slicing off the portion from 0 index to the length minus 1
  return firedLastDriver;
}

function removeFirstDriver(driver){
  const firedFirstDriver = drivers.slice(1); //slicing from the 2nd element to the end
  return firedFirstDriver;
}
