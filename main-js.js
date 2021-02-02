import galleryItems from "./gallery-items.js";

const createGalleryItem = ({ preview, original, description, index }) =>
  `<li class="gallery__item"><a class="gallery__link" href='${original}' ><img class="gallery__image" src='${preview}' data-source='${original}' data-index='${index}' alt='${description}' /></a></li>`;

const galleryMarkup = galleryItems.reduce(
  (acc, item) => acc + createGalleryItem(item),
  ""
);

const galleryRef = document.querySelector(".js-gallery");

galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryRef.addEventListener("click", onImgClick);

const largeImgRef = document.querySelector(".gallery__link");

function onImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const largeImgURL = event.target.dataset.source;
  largeImgRef.src = largeImgURL;
  onOpenModal(largeImgURL, event.target.alt);
}

const lightboxRef = document.querySelector(".js-lightbox");
const lightboxImgRef = document.querySelector(".lightbox__image");

function onOpenModal(largeImgURL, alt) {
  window.addEventListener("keydown", onPresEsc);
  lightboxRef.classList.add("is-open");
  lightboxImgRef.src = largeImgURL;
  lightboxImgRef.alt = alt;

  //new
  const currentIndexImg = event.target.dataset.index;
  console.log(currentIndexImg);

  window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
      console.log(event.code);
      const prevImgSourse = galleryItems[currentIndexImg - 1].original;
      console.log(prevImgSourse);
      console.log(galleryItems);
      console.log(galleryItems[currentIndexImg - 1].original);
      lightboxImgRef.src = prevImgSourse;
      lightboxImgRef.dataset.index = currentIndexImg - 1;
    } else if (event.code === "ArrowRight") {
      console.log(event.code);
      const nextImgSourse = galleryItems[currentIndexImg + 1].original;
      console.log(nextImgSourse);
      console.log(galleryItems);
      console.log(galleryItems[currentIndexImg + 1].original);
      lightboxImgRef.src = nextImgSourse;
      lightboxImgRef.dataset.index = currentIndexImg + 1;
    }
  });
}

const btnCloseRef = document.querySelector(
  'button[data-action="close-lightbox"]'
);

btnCloseRef.addEventListener("click", onCloseModal);

function onCloseModal() {
  window.removeEventListener("keydown", onPresEsc);
  lightboxRef.classList.remove("is-open");
  lightboxImgRef.src = "";
  lightboxImgRef.alt = "";
}

const lightboxOverlayRef = document.querySelector(".lightbox__overlay");
const backdropRef = document.querySelector(".js-lightbox");

backdropRef.addEventListener("click", onBackDropClick);

function onBackDropClick(event) {
  if (event.target.classList.contains(lightboxOverlayRef.classList)) {
    onCloseModal();
  }
}

function onPresEsc(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}

// function prevImg(event) {
//
// }

// function onLeftArrow(event) {
//   //   if (event.code === "ArrowLeft") {
//   //     lightboxImgRef
//   //   }
//   galleryRef.();
// }

// const img = (img) => {
//   return galleryRef.map((img) => galleryRef.img);
// };
// }
// function onRightArrow(event) {
// if (event.code === 'ArrowRight') {
// знаходимо поточну картинку і її індекс
// потім її індекс +1
//
// }
// }
// function onRlClick(event) {
//   const currentIndexImg = event.target.dataset.index;
//   console.log(currentIndexImg);

//   if (event.code === "ArrowLeft") {
//     console.log(event.code);
//     const previousImgSourse = galleryItems[currentIndexImg - 1].original;
//   }
// }
