// Modo escuro/claro
const toggle = document.getElementById('toggle-mode');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.textContent = '☀️';
  }
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `rotateY(${x * 10}deg) rotateX(${y * -10}deg) scale(1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
  });
});

// Efeito parallax com scroll nos cards
window.addEventListener('scroll', () => {
  document.querySelectorAll('.card').forEach(card => {
    const rect = card.getBoundingClientRect();
    const offset = rect.top / window.innerHeight;
    const translateY = offset * 20 - 10; // ajuste de intensidade
    card.style.transform = `translateY(${translateY}px)`;
  });
});
const translateY = offset * 20 - 10;

// Menu hamburguer
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mainMenu = document.getElementById('mainMenu');

  hamburger.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
  });
});