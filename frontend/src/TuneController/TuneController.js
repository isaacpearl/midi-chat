// tune_controller.js
import Tone from 'tone';

//this class takes an array of notes ("tune") as input, and allows playback with a tone.js synth. 
//moving forward, we may want to have multiple tunes available for playback on a given page,
//so this should be rewritten to handle many tunes/playback toggles (rather than toggling
//the master Tone.Transport)

export default class TuneController {
	constructor(tune) {	
		this.tune = tune;
		this.tuneSynth = new Tone.Synth({oscillator: {type: "sine"}}).toMaster();
		this.sequence = this.setNewSequence(this.tune, this.tuneSynth);	
		Tone.Transport.bpm.value = 120;
	}

	setNewSequence(tune, tuneSynth) {
		return new Tone.Sequence
			(function(time, note) {			
					tuneSynth.triggerAttackRelease(note, "8n", time);
			}, tune, "4n");
	}

	togglePlayback(tune) {
		if (tune !== this.tune) {
			this.tune = tune;
			this.sequence = this.setNewSequence(tune, this.tuneSynth);
			this.sequence.start("0");
		}
		
		Tone.Transport.toggle();
	}
}









