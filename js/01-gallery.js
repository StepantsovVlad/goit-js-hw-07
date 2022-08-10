import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", galleryItem());
function galleryItem() {
    const markup = galleryItems.map(
        ({ original, preview, description }) =>
            `<div class="gallery__item">
         <a class="gallery__link" href="${original}">
             <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
          </a>
       </div>`)
        .join('');
    return markup;

};

let instance = null;

gallery.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`);
    instance.show();
    document.addEventListener('keydown', modalClose);
});

function modalClose(event) {
    if (event.code === "Escape" && instance.visible()) {
        instance.close();
    }
    document.removeEventListener('keydown', modalClose);
};