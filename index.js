// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver() {
  drivers.push('Ralph');
}

function destructivelyPrependDriver() {
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  newDrivers = [...drivers, `${name}`];
  return newDrivers;
}

function prependDriver(name) {
  newDrivers = [`${name}`, ...drivers];
  return newDrivers;
}

function removeLastDriver() {
  newDrivers = drivers.slice(0, drivers.length - 1);
  return newDrivers;
}

function removeFirstDriver() {
  newDrivers = drivers.slice(1)
  return newDrivers;
}
