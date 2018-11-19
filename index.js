// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}

function appendDriver(name) {
  copyOfDrivers = [...drivers, name];
  return copyOfDrivers;
}

function prependDriver(name) {
  copyOfDrivers = [name, ...drivers];
  return copyOfDrivers;
}

function removeLastDriver(name) {
  newer = drivers.slice(0,2);
  return newer;
}

function removeFirstDriver(name) {
  newer = drivers.slice(1,3);
  return newer;
}
