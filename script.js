// smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

//get scroll value
lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress });
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 0.5,
  });
  tl.from(".loading-animation", {
    y: "20rem",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 0.5,
  });
}
pageLoad();

// img parallax
$(".img-parallax").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top",
    },
  });
  tl.to(targetElement, {
    y: "-15%",
  });
});

$(".img-parallax-reverse").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top",
    },
  });
  tl.to(targetElement, {
    y: "15%",
  });
});

// text parallax
$(".text-parallax").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top",
    },
  });
  tl.fromTo(
    targetElement,
    {
      x: "15%",
    },
    {
      x: "-15%",
    }
  );
});

//shape parallax
$(".parallax-animation-2").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top",
    },
  });
  tl.fromTo(
    targetElement,
    {
      y: "32rem",
    },
    {
      y: "-32rem",
    }
  );
});

$(".parallax-animation").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top",
    },
  });
  tl.fromTo(
    targetElement,
    {
      y: "-32rem",
    },
    {
      y: "+32rem",
    }
  );
});

// navbar menu hamburger click
$(".menu-link").click(function () {
  var clicks = $(this).data("clicks");
  if (clicks) {
    // odd clicks
    gsap.to(".is--navbar-load", {
      y: "10rem",
      duration: 0.2,
      opacity: 0,
      ease: "Quint.easeOut",
      stagger: {
        each: 0.1,
        from: "end",
      },
    });
  } else {
    // even clicks
    gsap.fromTo(
      ".is--navbar-load",
      {
        y: "10rem",
        opacity: 0,
      },
      {
        duration: 0.5,
        delay: 0.4,
        y: "0rem",
        opacity: 1,
        ease: "Quint.easeOut",
        stagger: {
          each: 0.1,
        },
      }
    );
  }
  $(this).data("clicks", !clicks);
});

// scroll text
$(".is--scroll-intoview").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top",
    },
  });
  tl.from(targetElement, {
    duration: 1,
    delay: 0.3,
    opacity: 0,
    y: "20rem",
    ease: "Quint.easeOut",
  });
});

// scroll into footer

$(".section.is--footer").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".is--footer-text-animation");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top",
    },
  });
  tl.from(targetElement, {
    duration: 1,
    delay: 0.3,
    opacity: 0,
    y: "20rem",
    ease: "Quint.easeOut",
    stagger: {
      amount: 0.2,
      from: "0",
    },
  });
});

// lines-horizontal
$(".line").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top",
    },
  });
  tl.fromTo(
    targetElement,
    {
      opacity: 0,
      width: "0%",
    },
    {
      duration: 1,
      delay: 0.3,
      opacity: 1,
      width: "100%",
      ease: "Quint.easeOut",
      stagger: {
        amount: 0.3,
        from: "0",
      },
    }
  );
});

$(".btn--arrow").on("mouseenter mouseleave", function () {
  let state = Flip.getState(
    ".btn--arrow, .btn--arrow-parent, .btn--text, .btn--text-hover",
    {
      props: "width,padding,opacity",
    }
  );
  $(this).toggleClass("is--hover");
  Flip.from(state, {
    duration: 0.5,
    ease: "Quint.easeOut",
  });
});

$(".search--btn").on("mouseenter mouseleave", function () {
  $(this).siblings(".is--search").toggleClass("is--hover");
});

// GSAP animation setup
gsap.set("#about--dropdown", { display: "none", y: "-100%" });
gsap.set("#solution--dropdown", { display: "none", y: "-100%" });

let isAboutOpen = false;
let isSolutionOpen = false;

document.querySelector("#about-trigger").addEventListener("click", function () {
  gsap.to("#about--dropdown", {
    duration: 0.5,
    ease: "power1.out",
    display: isAboutOpen ? "none" : "flex",
    y: isAboutOpen ? "-100%" : "0%",
  });
  isAboutOpen = !isAboutOpen;
});

document
  .querySelector("#solution-trigger")
  .addEventListener("click", function () {
    gsap.to("#solution--dropdown", {
      duration: 0.5,
      ease: "power1.out",
      display: isSolutionOpen ? "none" : "flex",
      y: isSolutionOpen ? "-100%" : "0%",
    });
    isSolutionOpen = !isSolutionOpen;
  });
