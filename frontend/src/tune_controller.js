// tune_controller.js

import Tone from 'tone';

var tuneSynth = new Tone.Synth({oscillator: {type: "sine"}}).toMaster();
var tuneSequence = new Tone.Sequence
	(
	function(time, note) {			
		tuneSynth.triggerAttackRelease(note, "8n", time);
	}, ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"], "4n"
	);


Tone.Transport.bpm.value = 90;


export function playNote() {
	console.log("playing note!");
	var synth = new Tone.Synth().toMaster();
	synth.triggerAttackRelease('C4', '8n');
}

export function playTune(synth=tuneSynth, sequence=tuneSequence) {
	Tone.Transport.start();
	(sequence.state === 'stopped') ? sequence.start("0") : sequence.stop("0");
}
