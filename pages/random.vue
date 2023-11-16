<template>
	<div id="mode-movie" class="container">
		 <div :class="{ 'plastic-box': true, 'playing': isPlaying }">
			<div class="plastic-box-top">
				<button @click="playRandomAudio" class="btn-movie"><span>Reproducir Audio Aleatorio</span></button>

				<h1 class="relieve">
					Telephone<br> Voice<br> Changer
				</h1>
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
      audio: null,
      isPlaying: false,
      totalAudioFiles: 36
    };
  },
  methods: {
    playRandomAudio() {
      if (this.audio) {
        // Detener la reproducción si ya hay un audio reproduciéndose
        this.audio.pause();
        this.isPlaying = false; // Cambiar el estado de reproducción cuando se detiene
      }

      // Seleccionar un número aleatorio entre 1 y 36
      const randomIndex = Math.floor(Math.random() * this.totalAudioFiles) + 1;

      // Crear una nueva instancia del objeto de audio con la ruta aleatoria
      const audioSrc = `quotes/${String(randomIndex).padStart(2, '0')}.ogg`;
      this.audio = new Audio(audioSrc);

      // Reproducir el nuevo audio
      this.audio.play();

      // Cambiar el estado de reproducción cuando comienza la reproducción
      this.isPlaying = true;

      // Agregar una función de escucha para cambiar el estado cuando se detiene la reproducción
      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
      });
    }
  }
};
</script>
