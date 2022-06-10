const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimerOut

function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')

}

function resetTime() {
  updateTimeDisplay(minutes, 0)
  clearTimeout(timerTimerOut)
}

function updateTimeDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown() {
  timerTimerOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimeDisplay(minutes, 0)

    if (minutes <= 0) {
      resetControls()
      return
    }

    if (seconds <= 0) {
      seconds = 2
      --minutes
    }

    updateTimeDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()
})

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimerOut)
})

buttonStop.addEventListener('click', function () {
  resetControls()
  resetTime()
})

buttonSoundOff.addEventListener('click', function () {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function () {
  buttonSoundOff.classList.remove('hide')
  buttonSoundOn.classList.add('hide')
})

buttonSet.addEventListener('click', function () {
  let newMinutes = prompt('Quantos minutos?')
  if (!newMinutes) {
    resetTime()
    return
  }
  minutes = newMinutes
  updateTimeDisplay(minutes, 0)
})