document.addEventListener('DOMContentLoaded', () => {
  const scrollThreshold = 100;
  const elements = {
    title: document.getElementById('services-title'),
    hr: document.getElementById('services-hr'),
    description: document.getElementById('services-description')
  };

  function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > scrollThreshold) {
      Object.values(elements).forEach(el => el.classList.add('visible'));
    } else {
      Object.values(elements).forEach(el => el.classList.remove('visible'));
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial call to handle pre-scroll state
});


window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const logo = document.querySelector('nav img');
    const links = document.querySelectorAll('nav a');
    if (window.scrollY > 10) {
      nav.classList.remove('bg-transparent');
      nav.classList.add('bg-white', 'nav-fixed');
      links.forEach(link => link.classList.remove('text-[#e0e0e0]'));
      links.forEach(link => link.classList.add('text-black'));
      logo.src = './assets/images/askara.png'; // Path ke gambar hitam
    } else {
      nav.classList.remove('bg-white', 'nav-fixed');
      nav.classList.add('bg-transparent');
      links.forEach(link => link.classList.remove('text-black'));
      links.forEach(link => link.classList.add('text-[#e0e0e0]'));
      logo.src = './assets/images/askaraputih.png'; // Path ke gambar putih
    }
  });


