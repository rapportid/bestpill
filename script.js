var redPillChosen = false;

function showResult(choice) {
    var resultMessage = document.getElementById('result-message');
    var pixtestLogo = document.getElementById('pixtest');
    var replayButton = document.getElementById('replay-button');
    var graffitiMessage = document.getElementById('graffiti-message');

    if (choice === 'red') {
        redPillChosen = true;
        resultMessage.textContent = "Happy Holidays!  You are ready.  See you in the new year";
        pixtestLogo.style.display = 'block';

        setTimeout(function () {
            graffitiMessage.style.display = 'none';
            resetGame();
        }, 3000);

    } else {
        redPillChosen = false;
        resultMessage.textContent = "You're not ready. Hit replay.";
        replayButton.style.display = 'block';
    }
}

function resetGame() {
    var resultMessage = document.getElementById('result-message');
    var pixtestLogo = document.getElementById('pixtest');
    var replayButton = document.getElementById('replay-button');
    var graffitiMessage = document.getElementById('graffiti-message');

    resultMessage.textContent = '';
    pixtestLogo.style.display = 'none';
    replayButton.style.display = 'none';
    graffitiMessage.style.display = 'none';
}

function playGraffiti() {
    var graffitiMessage = document.getElementById('graffiti-message');
    graffitiMessage.innerHTML = ''; // Clear previous graffiti effect
    graffitiMessage.innerHTML = '<div class="firework"></div>'; // Add fireworks effect
    graffitiMessage.innerHTML += "This is not the end. Flexibility is your best medicine.";
    graffitiMessage.style.display = 'block';

    setTimeout(function () {
        graffitiMessage.style.display = 'none';
        resetGame();
    }, 3000);
}

// Clear picture when blue pill is clicked again after red pill
document.getElementById('blue-pill').addEventListener('click', function () {
    if (redPillChosen) {
        var pixtestLogo = document.getElementById('pixtest');
        pixtestLogo.style.display = 'none';
    }
});
