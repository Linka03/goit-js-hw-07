import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

function createGalleryItem({ preview, original, description }) {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = original;
  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = preview;
  image.setAttribute("data-source", original);
  image.alt = description;

  link.appendChild(image);
  listItem.appendChild(link);

  return listItem;
}
function renderGallery() {
  const galleryItemsMarkup = galleryItems.map(createGalleryItem);
  gallery.append(...galleryItemsMarkup);
}
function openModal(imageUrl) {
  const instance = basicLightbox.create(
    `<img src="${imageUrl}" width="800" height="600">`
  );

  instance.show();
}

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  const target = event.target;
  if (target.classList.contains("gallery__image")) {
    const largeImageUrl = target.dataset.source;
    openModal(largeImageUrl);
  }
});
renderGallery();
console.log(galleryItems);
