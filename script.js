"use strict";

const thumbnails = document.querySelectorAll(".thumbnails div img");

const thumbnailsBorders = document.querySelectorAll(".thumbnails div");

const mainImg = document.getElementById("main-img");

const modalMainImg = document.getElementById("modal-main-img");

const leftBtn = document.getElementById("leftBtn");

const rightBtn = document.getElementById("rightBtn");

const miniImgsModal = document.querySelectorAll(".mini-modal-imgs div img");

const miniImgsModalDivs = document.querySelectorAll(".mini-modal-imgs div");

const minusBtn = document.getElementById("minusBtn");

const plusBtn = document.getElementById("plusBtn");

const counter = document.getElementById("counter");

const itemCount = document.getElementById("item-count");

const addToCartBtn = document.getElementById("addToCartBtn");

const mainModal = document.getElementById("mainModal");

const xBtn = document.getElementById("xBtn");

const overlay = document.getElementById("overlay");

const resetModalState = () => {
  miniImgsModal.forEach((t) => {
    t.classList.add("opacity");
  });
  miniImgsModalDivs.forEach((t) => {
    t.style.border = "2px solid transparent";
  });
};

let modalImageDisplayedIndex;

const addBorderAndClass = () => {
  modalMainImg.src = `images/image-product-${modalImageDisplayedIndex}.jpg`;
  miniImgsModalDivs[modalImageDisplayedIndex - 1].style.border =
    "2px solid hsl(26, 100%, 55%)";
  miniImgsModal[modalImageDisplayedIndex - 1].classList.remove("opacity");
};

thumbnails.forEach((pic, index) => {
  pic.addEventListener("click", (e) => {
    thumbnails.forEach((t) => {
      t.classList.remove("opacity");
    });
    thumbnailsBorders.forEach((t) => {
      t.style.border = "2px solid transparent";
    });
    mainImg.src = `images/image-product-${index + 1}.jpg`;
    modalMainImg.src = mainImg.src;
    modalImageDisplayedIndex = Number(modalMainImg.src.split("-")[2][0]);
    resetModalState();
    addBorderAndClass();
    e.target.classList.add("opacity");
    thumbnailsBorders[index].style.border = "2px solid hsl(26, 100%, 55%)";
  });
});

const increment = () => {
  counter.textContent++;
};

const decrement = () => {
  if (counter.textContent > 0) {
    counter.textContent--;
  }
};

plusBtn.addEventListener("click", increment);

minusBtn.addEventListener("click", decrement);

let c = 0;

addToCartBtn.addEventListener("click", () => {
  c += Number(counter.textContent);
  itemCount.textContent = c;
  counter.textContent = 0;
});

mainImg.addEventListener("click", () => {
  mainModal.classList.remove("hidden");
});

xBtn.addEventListener("click", () => {
  mainModal.classList.add("hidden");
});

window.addEventListener("keydown", () => {
  mainModal.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  mainModal.classList.add("hidden");
});

rightBtn.addEventListener("click", () => {
  resetModalState();
  if (modalImageDisplayedIndex < 4) {
    modalImageDisplayedIndex++;
  } else {
    modalImageDisplayedIndex = 1;
  }
  addBorderAndClass();
});

leftBtn.addEventListener("click", () => {
  resetModalState();
  if (modalImageDisplayedIndex > 1) {
    modalImageDisplayedIndex--;
  } else {
    modalImageDisplayedIndex = 4;
  }
  addBorderAndClass();
});
