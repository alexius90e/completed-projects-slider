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

let currentSlideIndex = 0;

const cityWithNameElem = document.getElementById('cityWithName');
const apartmentAreaElem = document.getElementById('apartmentArea');
const repairTimeElem = document.getElementById('repairTime');
const repairCostElem = document.getElementById('repairCost');
const sliderNavButtons = document.querySelectorAll('.slider__nav-btn');
const sliderItemWrapper = document.querySelector('.slider-item__wrapper');

console.log(sliderItemWrapper);
sliderItemWrapper.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

const prevButton = document.querySelector('.slider__controls-prev');
const nextButton = document.querySelector('.slider__controls-next');
const pagination = document.querySelector('.slider__controls-pagination');
const paginationBullets = hotels.map((_, index) => {
  const bullet = document.createElement('div');
  bullet.classList.add('slider__controls-pagination-bullet');
  if (index === 0) bullet.classList.add('active');
  return bullet;
});
pagination.append(...paginationBullets);

prevButton.addEventListener('click', () => {
  const index = decreaseIndex();
  updateData(index);
});

nextButton.addEventListener('click', () => {
  const index = increaseIndex();
  updateData(index);
});

function increaseIndex() {
  if (currentSlideIndex === hotels.length - 1) {
    currentSlideIndex = 0;
  } else {
    currentSlideIndex++;
  }
  return currentSlideIndex;
}

function decreaseIndex() {
  if (currentSlideIndex === 0) {
    currentSlideIndex = hotels.length - 1;
  } else {
    currentSlideIndex--;
  }
  return currentSlideIndex;
}

function updateData(activeSlideIndex) {
  const activeHotel = hotels[activeSlideIndex];
  sliderItemWrapper.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  sliderNavButtons.forEach((button, index) => {
    if (index === activeSlideIndex) button.classList.add('active');
    if (index !== activeSlideIndex) button.classList.remove('active');
  });
  paginationBullets.forEach((bullet, index) => {
    if (index === activeSlideIndex) bullet.classList.add('active');
    if (index !== activeSlideIndex) bullet.classList.remove('active');
  });
  cityWithNameElem.innerHTML = `<span>${activeHotel.city}</span><span>${activeHotel.name}</span>`;
  apartmentAreaElem.innerText = activeHotel.apartmentArea;
  repairTimeElem.innerText = activeHotel.repairTime;
  repairCostElem.innerText = activeHotel.repairCost;
}

sliderNavButtons.forEach((button, index) =>
  button.addEventListener('click', () => {
    currentSlideIndex = index;
    updateData(index);
  })
);

paginationBullets.forEach((bullet, index) =>
  bullet.addEventListener('click', () => {
    currentSlideIndex = index;
    updateData(index);
  })
);
