<template>
	<div>
		<h1>
			Botonera
		</h1>

		<div class="grid">
			<button @click="playAudio('quotes/01.ogg')">Audio 1</button>
			<button @click="playAudio('quotes/02.ogg')">Audio 2</button>
			<button @click="playAudio('quotes/03.ogg')">Audio 3</button>
			<button @click="playAudio('quotes/04.ogg')">Audio 4</button>
		</div>
	</div>
</template>
<style type="text/css">
	.grid {
		display: grid;
		gap: 20px;
		grid-template-columns: repeat(3, 1fr);
	}
</style>

<script>
	export default {
		data() {
			return {
				audio: null
			};
		},
		methods: {
			playAudio(audioSrc) {
				if (this.audio) {
				// Detener la reproducción si ya hay un audio reproduciéndose
					this.audio.pause();
				}

				// Crear una nueva instancia del objeto de audio
				this.audio = new Audio(audioSrc);

				// Reproducir el nuevo audio
				this.audio.play();
			}
		}
	}
</script>
