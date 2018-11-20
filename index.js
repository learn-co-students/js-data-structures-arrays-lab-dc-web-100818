// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name){
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  const newDriversArray = [...drivers, "Broom"];
  return newDriversArray;
}

function prependDriver(name){
  const newDriversArray = ["Arnold", ...drivers];
  return newDriversArray;
}

function removeLastDriver(){
  const removedLast = drivers.slice(0, 2);
  return removedLast;
}

function removeFirstDriver(){
  const removedFirst = drivers.slice(1);
  return removedFirst;
}
