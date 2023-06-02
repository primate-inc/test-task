// simple JS handler to apply fadeInScroll animation

window.addEventListener('scroll', function () {
  let sections = document.querySelectorAll('.section');
  // calculate scroll position (current scrollY)
  // + height of the viewport
  let scrollPosition = window.scrollY + window.innerHeight;
  // iterate to get distance from top
  sections.forEach(function (section) {
    let position = section.offsetTop;
    // if section within viewport, add animate class
    if (scrollPosition > position) {
      section.classList.add('animate');
    }
  });
});

