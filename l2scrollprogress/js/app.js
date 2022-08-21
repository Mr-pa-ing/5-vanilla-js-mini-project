const getProgressBar = document.getElementById("progress-bar");

function scrollpoint() {
  let getScrollTop = document.documentElement.scrollTop;
  let getScrollHeight = document.documentElement.scrollHeight;
  let getClientHeight = document.documentElement.clientHeight;

  let calcHeight = getScrollHeight - getClientHeight;
  let finalHeight = Math.round((getScrollTop / calcHeight) * 100);

  getProgressBar.style.width = `${finalHeight}%`;
}

window.onscroll = function () {
  scrollpoint();
};

function printme() {
  window.print();
}
