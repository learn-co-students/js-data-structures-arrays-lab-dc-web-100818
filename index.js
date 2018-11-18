const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  return drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  return drivers.shift(name);
}

function appendDriver(name) {
  let arr = [...drivers,name];
  return arr;
}

function prependDriver(name) {
  let arr = [name, ...drivers];
  return arr;
}

function removeLastDriver() {
  let arr = drivers.slice(0,2);
  return arr;
}

function removeFirstDriver() {
  let arr = drivers.slice(-2);
  return arr;
}
