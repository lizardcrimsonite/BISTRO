document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('heroLogo');

  if (logo) {
    logo.classList.add('pulse');

    logo.addEventListener('mouseenter', () => {
      logo.classList.remove('pulse');
      logo.style.transform = 'scale(1.1)';
    });

    logo.addEventListener('mouseleave', () => {
      logo.style.transform = 'scale(1)';
      logo.classList.add('pulse');
    });
  }
});

function mostrarGaleria() {
  const galeria = document.getElementById('galeria');
  if (galeria) {
    // Quitar ocultamiento
    galeria.classList.remove('d-none');
    
    // Forzar reflow para reiniciar animación (opcional para garantizar que se ejecute)
    void galeria.offsetWidth;
    
    // Agregar clase de animación
    galeria.classList.add('fade-in');
    
    // Scroll suave hacia la galería
    galeria.scrollIntoView({ behavior: 'smooth' });
  }
}
