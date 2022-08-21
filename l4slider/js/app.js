const slides = document.getElementsByClassName("carousel-item");
const dots = document.querySelectorAll(".dot");

let currentside = 1;

document.getElementById("prev").addEventListener("click", function () {
  carousel(currentside -= 1);
});

document.getElementById("next").addEventListener("click", function () {
  carousel(currentside += 1);
});

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    currentside = this.getAttribute("data-bs-slide-to");
    carousel(currentside);
  });
}

function carousel(slidenumber) {
  for (let x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }

  for(let y = 0; y < dots.length; y++) {
    dots[y].className = dots[y].className.replace("active", "");
  }

  if (slidenumber > slides.length) {
    currentside = 1;
  } else if (slidenumber < 1) {
    currentside = slides.length;
  }

  slides[currentside - 1].style.display = "block";
  dots[currentside - 1].className += " active";
}

carousel(currentside);