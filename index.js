function slider() {
  const prevSlideButton = document.querySelector('.js-prev-slide')
  const nextSlideButton = document.querySelector('.js-next-slide')
  const slides = document.querySelectorAll('.js-slide')
  let current = 0

  function changeSlide() {
    slides.forEach((slide, i) => {
      if (i !== current) {
        slide.classList.add('hidden')
      } else {
        slide.classList.remove('hidden')
      }
    })
  }

  function prevSlide() {
    current = current === 0 ? slides.length - 1 : current - 1
    changeSlide()
  }

  function nextSlide() {
    current = current === (slides.length - 1) ? 0 : current + 1
    changeSlide()
  }

  prevSlideButton.addEventListener('click', prevSlide)
  nextSlideButton.addEventListener('click', nextSlide)
}

function init() {
  const openModalButton = document.querySelector('.js-open-modal')
  const closeModalButton = document.querySelector('.js-close-modal')
  const modal = document.getElementById('login-modal')
  const focusTrap = window.focusTrap.createFocusTrap('#login-modal-content')

  function openModal() {
    openModalButton.removeEventListener('click', openModal)
    closeModalButton.addEventListener('click', closeModal)
    modal.classList.remove('hidden')
    focusTrap.activate()
  }

  function closeModal() {
    console.log('asdf')
    closeModalButton.removeEventListener('click', closeModal)
    openModalButton.addEventListener('click', openModal)
    modal.classList.add('hidden')
    focusTrap.deactivate()
  }

  openModalButton.addEventListener('click', openModal)
  slider()
}

document.addEventListener("DOMContentLoaded", init)
