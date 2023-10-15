const hotels = [
  {
    id: 1,
    name: 'LCD admiral',
    city: 'Rostov-on-Don',
    apartmentArea: '81 m2',
    repairTime: '3.5 months',
    repairCost: 'Upon request',
  },
  {
    id: 2,
    name: 'Thieves',
    city: 'Sochi',
    apartmentArea: '105 m2',
    repairTime: '4 months',
    repairCost: 'Upon request',
  },
  {
    id: 3,
    name: 'Patriotic',
    city: 'Rostov-on-Don',
    apartmentArea: '93 m2',
    repairTime: '3 months',
    repairCost: 'Upon request',
  },
];

const cityWithNameElem = document.getElementById('cityWithName');
const apartmentAreaElem = document.getElementById('apartmentArea');
const repairTimeElem = document.getElementById('repairTime');
const repairCostElem = document.getElementById('repairCost');

const sliderNavButtons = document.querySelectorAll('.slider__nav-btn');

const baseHotel = hotels.rostovOnDonAdmiral;

const slider = new Swiper('#sliderMain', {
  loop: true,
  pagination: {
    el: '.slider__controls-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider__controls-next',
    prevEl: '.slider__controls-prev',
  },
});

slider.on('slideChange', function () {
  const activeSlideIndex = slider.realIndex;
  const activeHotel = hotels[slider.realIndex];
  sliderNavButtons.forEach((button, index) => {
    if (index === activeSlideIndex) button.classList.add('active');
    if (index !== activeSlideIndex) button.classList.remove('active');
  });

  cityWithNameElem.innerHTML = `<span>${activeHotel.city}</span><span>${activeHotel.name}</span>`;
  apartmentAreaElem.innerText = activeHotel.apartmentArea;
  repairTimeElem.innerText = activeHotel.repairTime;
  repairCostElem.innerText = activeHotel.repairCost;
});

sliderNavButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    slider.slideToLoop(index);
  });
});
