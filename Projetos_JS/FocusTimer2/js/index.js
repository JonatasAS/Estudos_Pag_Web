import Event from "./events.js";
import {
  buttonCoffee,
  buttonFire,
  buttonForrest,
  buttonLess,
  buttonPlay,
  buttonPlus,
  buttonRain,
  buttonStop
}from "./elements.js"
import Timer from "./timer.js";

const timer = Timer({
  minutesDisplay,
  secondsDisplay

})

Event({timer, sound})