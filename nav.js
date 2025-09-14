// nav.js
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  const currentPage = location.pathname.split('/').pop() || 'home.html'; // default to home if blank

  links.forEach(link => {
    const linkPage = link.getAttribute('href');
    if(linkPage === currentPage) {
      link.classList.add('text-blue-600');
      link.classList.remove('text-gray-600', 'hover:text-blue-600');
    } else {
      link.classList.remove('text-blue-600');
      link.classList.add('text-gray-600', 'hover:text-blue-600');
    }
  });
});
