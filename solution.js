$(".technology-logos-wrapper").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".download-wrapper");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top"
    }
  });
  tl.from(targetElement, {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    y: "20rem",
    ease: "Quint.easeOut",
    stagger: {
      amount: 0.2,
      from: "0"
    }
  });
});

$(".is--technologies-grid3").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".technology-element");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top"
    }
  });
  tl.from(targetElement, {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    y: "20rem",
    ease: "Quint.easeOut",
    stagger: {
      amount: 0.2,
      from: "0"
    }
  });
});

// timeline scroll into
$(".is--timeline").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".timeline-element");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top"
    }
  });
  tl.from(targetElement, {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    y: "20rem",
    ease: "Quint.easeOut",
    stagger: {
      amount: 0.2,
      from: "0"
    }
  });
});

$(".technology-phone").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top"
    }
  });
  tl.from(targetElement, {
    y: "128rem"
  });
});
