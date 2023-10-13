const nav = document.querySelector('.slider__nav');
const navItems = document.querySelectorAll('.slider__nav-btn');
const sliderPages = document.querySelectorAll('.slider__page');

nav.addEventListener('click', (event) => {
  const isNavItem = event.target.classList.contains('slider__nav-btn');
  navItems.forEach((item) => item.classList.remove('active'));
  event.target.classList.add('active');

  if (isNavItem) {
    const activePageId = event.target.dataset.page;

    sliderPages.forEach((page) => {
      if (page.id === activePageId) page.classList.add('active');
      if (page.id !== activePageId) page.classList.remove('active');
    });
  }
});
