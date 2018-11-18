// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(driver) {
  drivers.push(driver)
}

drivers = ["Milo", "Otis", "Garfield"]

function destructivelyPrependDriver(driver) {
  drivers.unshift(driver)
}

drivers = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastDriver(driver) {
  drivers.pop(driver)
}

drivers = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstDriver(driver) {
  drivers.shift(driver)
}

drivers = ["Milo", "Otis", "Garfield"]

function appendDriver(driver){
  return [...drivers, driver]
}

function prependDriver(driver) {
  return [driver, ...drivers]
}

function removeLastDriver() {
  return drivers.slice(0, 2)
}

function removeFirstDriver() {
  return drivers.slice(-2)
}
