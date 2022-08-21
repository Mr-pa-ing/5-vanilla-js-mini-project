// const getAccTitles = document.getElementsByClassName("accordion-title"); // HTMLCollections
// const getAccContents = document.querySelectorAll(".accordion-content"); // NodeLists[]

// for (let i = 0; i < getAccTitles.length; i++) {
//   getAccTitles[i].addEventListener("click", function () {
//     this.classList.toggle("active");

//     let getSiblingContent = this.nextElementSibling;

//     if (getSiblingContent.style.height) {
//       getSiblingContent.style.height = null; // beware of giving 0 px first time ok but second not
//     } else {
//       getSiblingContent.style.height = getSiblingContent.scrollHeight + "px";
//     }
//   });

//   if (getAccTitles[i].classList.contains("active")) {
//     getAccContents[i].style.height = getAccContents[i].scrollHeight + "px";
//   }
// }

const getAccTitles = document.getElementsByClassName("accordion-title"); // HTMLCollections
const getAccContents = document.querySelectorAll(".accordion-content"); // NodeLists[]

for (let i = 0; i < getAccTitles.length; i++) {
  getAccTitles[i].addEventListener("click", function () {
    this.classList.toggle("active");

    const getAccContent = this.nextElementSibling;

    if (getAccContent.style.height) {
      getAccContent.style.height = null;
    } else {
      getAccContent.style.height = getAccContent.scrollHeight + "px";
    }
    
  });

  if (getAccTitles[i].classList.contains("active")) {
    getAccContents[i].style.height = getAccContents[i].scrollHeight + "px";
  }
}
