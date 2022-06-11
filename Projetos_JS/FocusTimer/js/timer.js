function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTime() {
    updateTimeDisplay(minutes, 0)
    clearTimeout(timerTimerOut)
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

// named export
export {resetTime, countdown}