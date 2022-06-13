//default import
import Controls from "./controls.js"
import  Timer  from "./timer.js"
import Sound from "./sounds.js"
import Event from "./events.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound()

Event({controls, timer, sound})

