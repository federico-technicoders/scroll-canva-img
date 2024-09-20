// Obtener el canvas y su contexto
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Definir cuántos frames tiene la animación (número de imágenes)
const totalFrames = 10  
const frames = [];

// Cargar las imágenes en un array
for (let i = 0; i <= totalFrames; i++) {
  const img = new Image();
  img.src = `images/perro${i}.avif`;  // Cambia el path por tu ruta de imágenes
  frames.push(img);
  console.log(frames);
}

// Función para dibujar un frame específico en el canvas
function drawFrame(frameIndex) {
  const frame = frames[frameIndex];
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar canvas
  ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);  // Dibujar el frame
}

// Detectar el scroll y cambiar de frame según la posición de scroll
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Posición de scroll
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight; // Scroll máximo

  // Calcular el frame en base al porcentaje de scroll
  const scrollFraction = scrollTop / maxScroll;
  const frameIndex = Math.min(
    totalFrames - 1,  // Limitar el índice del frame
    Math.floor(scrollFraction * totalFrames)
  );

  // Dibujar el frame correspondiente
  drawFrame(frameIndex);
});

// Dibujar el primer frame inicialmente cuando carga la página
frames[0].onload = () => {
  drawFrame(0);
};