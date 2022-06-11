//named export
export default function Timer({
    minutesDisplay, 
    secondsDisplay, 
    timerTimerOut, 
    resetControls
}) {
    function updateDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function resetTimer() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimerOut)
    }

    function countdown() {
        timerTimerOut = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            updateDisplay(minutes, 0)

            if (minutes <= 0) {
                resetControls()
                return
            }

            if (seconds <= 0) {
                seconds = 2
                --minutes
            }

            updateDisplay(minutes, String(seconds - 1))

            countdown()
        }, 1000)
    }

    return {
        countdown,
        resetTimer,
        updateDisplay
    }
}


