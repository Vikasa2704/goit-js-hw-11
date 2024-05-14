const API_KEY = '43843961-af0153872675268c29353c689';
const BASE_URL = 'https://pixabay.com/api/';

function fetchImages(searchQuery) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error fetching data');
    })
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error('No images found');
      }
      return data.hits;
    });
}

export { fetchImages };
