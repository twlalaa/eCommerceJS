"use strict";

const thumbnails = document.querySelectorAll(".thumbnails div img");

const thumbnailsBorders = document.querySelectorAll(".thumbnails div");

const mainImg = document.getElementById("main-img");

thumbnails.forEach((pic, index) => {
  pic.addEventListener("click", (e) => {
    thumbnails.forEach((t) => {
      t.classList.remove("opacity");
    });
    thumbnailsBorders.forEach((t) => {
      t.style.border = "2px solid transparent";
    });
    mainImg.src = `images/image-product-${index + 1}.jpg`;
    e.target.classList.add("opacity");
    thumbnailsBorders[index].style.border = "2px solid hsl(26, 100%, 55%)";
  });
});

const minusBtn = document.getElementById("minusBtn");

const plusBtn = document.getElementById("plusBtn");

const counter = document.getElementById("counter");

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

const itemCount = document.getElementById("item-count");

const addToCartBtn = document.getElementById("addToCartBtn");

let c = 0;

addToCartBtn.addEventListener("click", () => {
  c += Number(counter.textContent);
  itemCount.textContent = c;
  counter.textContent = 0;
});

const mainModal = document.getElementById("mainModal");

const xBtn = document.getElementById("xBtn");

const overlay = document.getElementById("overlay");

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

const leftBtn = document.getElementById("leftBtn");

const rightBtn = document.getElementById("rightBtn");

const modalMainImg = document.getElementById("modal-main-img");

const miniImgsModal = document.querySelectorAll(".mini-modal-imgs div img");

leftBtn.addEventListener("click", () => {});

rightBtn.addEventListener("click", () => {
  let currentSrc = modalMainImg.src;
  if (Number(currentSrc.split("-")[2][0]) < 4) {
    modalMainImg.src = `images/image-product-${
      Number(currentSrc.split("-")[2][0]) + 1
    }.jpg`;
  } else {
    modalMainImg.src = "images/image-product-1.jpg";
  }
});

leftBtn.addEventListener("click", () => {
  let currentSrc = modalMainImg.src;
  if (Number(currentSrc.split("-")[2][0]) > 1) {
    modalMainImg.src = `images/image-product-${
      Number(currentSrc.split("-")[2][0]) - 1
    }.jpg`;
  } else {
    modalMainImg.src = "images/image-product-4.jpg";
  }
});
