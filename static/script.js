(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuButton.addEventListener('click', () => {
    const opened = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(opened));
    menuButton.textContent = opened ? '×' : '☰';
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Interação dos planos: abre o WhatsApp com a escolha já preenchida.
  const whatsappNumber = '5511999999999'; // Troque pelo número real da agência.
  document.querySelectorAll('[data-plan]').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      const plan = button.dataset.plan;
      const message = `Olá! Tenho interesse no plano ${plan}. Gostaria de saber como começar.`;
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
      button.classList.add('clicked');
      setTimeout(() => button.classList.remove('clicked'), 450);
    });
  });

  // Efeito magnético discreto no botão principal (apenas em dispositivos com mouse).
  if (window.matchMedia('(pointer:fine)').matches) {
    document.querySelectorAll('.magnetic').forEach(button => {
      button.addEventListener('mousemove', e => {
        const r = button.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.08;
        const y = (e.clientY - r.top - r.height / 2) * 0.12;
        button.style.transform = `translate(${x}px, ${y}px)`;
      });
      button.addEventListener('mouseleave', () => button.style.transform = '');
    });
  }
  document.getElementById('year').textContent = new Date().getFullYear();
})();
