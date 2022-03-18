const rating = document.querySelector('.rating');
const modal = document.querySelector('.modal');
const ratingBtns = document.querySelectorAll('.review__rating-btn');
const submitBtn = document.querySelector('.review__submit-btn');
const modalText = document.querySelector('.modal__rating-number');

let selected = null;
ratingBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    selected = btn.dataset.rating;
    cleanSelected();
    if (selected === btn.dataset.rating) {
      btn.classList.add('selected');
    }
  });
});

submitBtn.addEventListener('click', () => {
  if (selected) {
    rating.classList.add('hidden');
    modal.classList.remove('hidden');
    modalText.textContent = `You selected ${selected} out of 5`;
  } else {
    alert('Please select rating!');
  }
});

function cleanSelected() {
  ratingBtns.forEach((btn) => {
    if (btn.classList.contains('selected')) {
      btn.classList.remove('selected');
    }
  });
}
