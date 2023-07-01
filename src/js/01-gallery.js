// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightBox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const container = document.querySelector('.gallery');

const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" title='${description}' />
   </a>
</li>`
  )
  .join('');

container.innerHTML = markupGallery;

new SimpleLightBox('.gallery a', { captionDelay: 250 });
