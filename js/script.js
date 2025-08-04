document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('heroLogo');
  logo.classList.add('pulse');

  logo.addEventListener('mouseenter', () => {
    logo.classList.remove('pulse');
    logo.style.transform = 'scale(1.1)';
  });

  logo.addEventListener('mouseleave', () => {
    logo.style.transform = '';
    logo.classList.add('pulse');
  });
});
