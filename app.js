let nextBtn = document.querySelector(".button--next");
let prevBtn = document.querySelector(".button--previous");
let photo = document.querySelector(".gallery__photo");

let num = 1;

nextBtn.addEventListener("click", () => {
  if (num < 3) {
    num++;
    photo.src = "images/" + num + ".jpg";
  } else {
    num = 1;
    photo.src = "images/" + num + ".jpg";
  }
});

prevBtn.addEventListener("click", () => {
  if (num > 1) {
    num--;
    photo.src = "images/" + num + ".jpg";
  } else {
    num = 3;
    photo.src = "images/" + num + ".jpg";
  }
});
