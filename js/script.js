document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('heroLogo');

  if (logo) {
    // Aplicar animación inicial
    logo.classList.add('pulse');

    // Solo escalar sin remover la clase
    logo.addEventListener('mouseenter', () => {
      logo.style.transform = 'scale(1.1)';
    });

    logo.addEventListener('mouseleave', () => {
      logo.style.transform = 'scale(1)';
    });
  }

  // Scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(ancla => {
    ancla.addEventListener('click', function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Botón para mostrar galería
  const btnCarta = document.getElementById('btnExplorarCarta');
  if (btnCarta) {
    btnCarta.addEventListener('click', mostrarGaleria);
  }
});

function mostrarGaleria() {
  const galeria = document.getElementById('galeria');
  if (galeria) {
    galeria.classList.remove('d-none');

    void galeria.offsetWidth;

    galeria.classList.add('fade-in');

    galeria.scrollIntoView({ behavior: 'smooth' });
  }
}
