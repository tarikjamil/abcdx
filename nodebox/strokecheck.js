//shape parallax
$(".slide-wrapper").each(function (index) {
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
  tl.fromTo(
    targetElement,
    {
      x: "0%"
    },
    {
      x: "-50vw"
    }
  );
});
