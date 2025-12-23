'use strict';

const btnsOpenModal = document.querySelectorAll('.show-modal');
const modals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelectorAll('.close-modal');

// Open modal function
const openModal = function(modalClass) {
  const modal = document.querySelector(`.${modalClass}`);
  modal.classList.remove('hidden');
  modal.classList.add('show');
  overlay.classList.remove('hidden');
};

// Close modal function
const closeModal = function() {
  modals.forEach(modal => {
    modal.classList.add('hidden');
    modal.classList.remove('show');
  });
  overlay.classList.add('hidden');
};

// Event listeners for buttons
btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', function() {
    const modalClass = btn.dataset.modal;
    openModal(modalClass);
  });
});

// Close buttons
btnsCloseModal.forEach(btn => btn.addEventListener('click', closeModal));

// Overlay click
overlay.addEventListener('click', closeModal);

// ESC key
document.addEventListener('keydown', function(e) {
  if(e.key === 'Escape' && !overlay.classList.contains('hidden')) {
    closeModal();
  }
});
