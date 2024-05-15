function createMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <div class="photo-card">
        <a href="${largeImageURL}" target="_blank">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" class="photo-card__image" />
         </a>
        <div class="photo-card__info">
          <p class="photo-card__info-item"><b>Likes:</b> ${likes}</p>
          <p class="photo-card__info-item"><b>Views:</b> ${views}</p>
          <p class="photo-card__info-item"><b>Comments:</b> ${comments}</p>
          <p class="photo-card__info-item"><b>Downloads:</b> ${downloads}</p>
        </div>
        </a>
      </div>
    `
    )
    .join('');
}

function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

export { createMarkup, clearGallery };
