let timer;
let seconds = 0;
let running = false;

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

function updateTimerDisplay() {
    document.getElementById('timer').textContent = formatTime(seconds);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start').addEventListener('click', () => {
        if (!running) {
            running = true;
            timer = setInterval(() => {
                seconds++;
                updateTimerDisplay();
            }, 1000);
        }
    });

    document.getElementById('stop').addEventListener('click', () => {
        if (running) {
            clearInterval(timer);
            running = false;
        }
    });

    document.getElementById('reset').addEventListener('click', () => {
        clearInterval(timer);
        running = false;
        seconds = 0;
        updateTimerDisplay();
    });

    // Initialize the timer display
    updateTimerDisplay();
});
