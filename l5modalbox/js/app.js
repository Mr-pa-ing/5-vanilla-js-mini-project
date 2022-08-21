const getmodal = document.getElementById("signup-modal");
const getbtnsignup = document.getElementById("btn-signup");
const getbtnclose = document.querySelector(".btn-close");
const getbtnfullscreen = document.querySelector(".btn-openscreen");
const getbtnclosefullscreen = document.querySelector(".btn-closescreen");
const form = document.querySelector(".form");

getbtnsignup.addEventListener("click", function () {
  getmodal.style.display = "block";
});

getbtnclose.addEventListener("click", function () {
  getmodal.style.display = "none";
});

window.onclick = function (e) {
  // console.log(e.target);

  if (e.target == getmodal) {
    getmodal.style.display = "none";
  }
};

const getde = document.documentElement;

getbtnfullscreen.addEventListener("click", function () {
  if (getde.requestFullscreen) {
    getde.requestFullscreen();
  } else if (getde.msRequestFullscreen) {
    getde.msRequestFullscreen();
  } else if (getde.webkitRequestFullscreen) {
    getde.webkitRequestFullscreen();
  }
  getbtnclosefullscreen.style.display = "inline-block";
});

getbtnclosefullscreen.addEventListener("click", function () {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
  getbtnclosefullscreen.style.display = "none";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
});