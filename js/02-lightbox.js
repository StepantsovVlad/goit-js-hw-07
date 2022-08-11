import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function createEl(original, preview, description) {
    return `<a class="gallery__item" href="${preview}">
    <img class="gallery__image" src="${original}" alt="${description}" />
  </a>`

};

const galleryStringEl = galleryItems.reduce((contanier, galleryItem) => {
    const { preview, original, description } = galleryItem;

    contanier = contanier + createEl(preview, original, description);
    return contanier;
}, "");

galleryEl.insertAdjacentHTML("beforeend", galleryStringEl);


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});