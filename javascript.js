window.onscroll = function () {
  myFunction();
};

var head = document.getElementsByClassName("head");

var sticky = head.offsetTop;
console.log(`sticky adalah:`, sticky);

function myFunction() {
  console.log("scroll", window.pageYOffset);
  if (window.pageYOffset > sticky) {
    head.classList.add("sticky");
  } else {
    head.classList.remove("sticky");
  }
}
