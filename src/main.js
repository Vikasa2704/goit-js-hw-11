import { fetchImages } from './js/pixabay-api';
import { createMarkup, clearGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const searchQuery = input.value.trim();

  if (searchQuery === '') {
    iziToast
      .error({
        title: 'Error',
        message: 'Please enter a search query',
      })
      .finally(() => form.reset());
    return;
  }

  clearGallery(); // Очищення галереї перед новим пошуком

  fetchImages(searchQuery)
    .then(images => {
      const markup = createMarkup(images); // Генерація розмітки для нових зображень
      gallery.insertAdjacentHTML('beforeend', markup); // Додавання нових зображень до галереї
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error.message,
      });
    });
}
// Відкриття модального вікна збільшеного зображення
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

lightbox.show();
