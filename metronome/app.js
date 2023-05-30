const metronome = new Metronome();
const tempo = document.getElementById('tempo');
tempo.textContent = metronome.tempo;

const playPauseIcon = document.getElementById('play-pause-icon');

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', function() {
    metronome.startStop();

    if (metronome.isRunning) {
        playPauseIcon.className = 'pause';
    }
    else {
        playPauseIcon.className = 'play';
    }

});

const tempoChangeButtons = document.getElementsByClassName('tempo-change');
for (let i = 0; i < tempoChangeButtons.length; i++) {
    tempoChangeButtons[i].addEventListener('click', function() {
        metronome.tempo += parseInt(this.dataset.change);
        tempo.textContent = metronome.tempo;
    });
}
const beatChangeButtons = document.getElementsByClassName('beat-change');
for (let i = 0; i < tempoChangeButtons.length; i++) {
    beatChangeButtons[i].addEventListener('click', function () {
        metronome.beatsPerBar += parseInt(this.dataset.change);
    });
}