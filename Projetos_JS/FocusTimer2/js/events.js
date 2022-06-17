import {
  buttonCoffee,
  buttonFire,
  buttonForrest,
  buttonLess,
  buttonPlay,
  buttonPlus,
  buttonRain,
  buttonStop
} from "./elements.js"

export default function ({ timer, sound }) {

  buttonPlay.addEventListener('click', function () {
    timer.countdown()
  })
  buttonStop.addEventListener('click', function () {
  })
  buttonPlus.addEventListener('click', function () {
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
    timer.plusMinutes()
  })
  buttonLess.addEventListener('click', function () {
  })
  buttonForrest.addEventListener('click', function () {
  })
  buttonRain.addEventListener('click', function () {
  })
  buttonCoffee.addEventListener('click', function () {
  })
  buttonFire.addEventListener('click', function () {
  })


}
