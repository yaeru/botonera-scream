<template>
	<div class="container">
		<div class="plastic-box">
			<div class="plastic-box-top">
				<h1 class="relieve">
					Telephone Voice Changer
				</h1>
				<div class="btn-grid">
					<button v-for="index in 36" :key="index" @click="playAudio(`quotes/${String(index).padStart(2, '0')}.ogg`)" class="btn">Audio {{ index }}</button>
				</div>
			</div>
		</div>
		<footer class="section">
			<credits />
		</footer>
	</div>
</template>

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
