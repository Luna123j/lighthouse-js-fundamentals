const carPassing = function (cars, speed) {

  const pass = {
    time: Date.now(),
    speed: speed
  }
  cars.push(pass);
  console.log(cars);
  return cars;
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

carPassing(cars, speed)