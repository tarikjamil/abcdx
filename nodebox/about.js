document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".slider1", {
    type: "loop",
    perPage: 1,
    interval: "6000",
    autoplay: true,
    perMove: 1,
    gap: "16rem",
    arrows: false,
    breakpoints: {
      991: {
        // Tablet
        perPage: 2
      },
      767: {
        // Mobile Landscape
        perPage: 1,
        arrows: false
      },
      479: {
        // Mobile Portrait
        perPage: 1,
        arrows: false
      }
    }
  });
  splide.mount();
});

let typeSplit;
// Split the text up
function runSplit() {
  typeSplit = new SplitType(".split-lines", {
    types: "lines, words"
  });
  $(".line").append("<div class='line-mask'></div>");
  createAnimation();
}
runSplit();
// Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    typeSplit.revert();
    runSplit();
  }
});

gsap.registerPlugin(ScrollTrigger);

function createAnimation() {
  $(".line").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        // trigger element - viewport
        start: "top center",
        end: "bottom center",
        scrub: 1
      }
    });
    tl.to($(this).find(".line-mask"), {
      width: "0%",
      duration: 1
    });
  });
}
