$(".cta-link-wrapper").on("mouseenter mouseleave", function () {
  let state = Flip.getState(
    ".cta-link-wrapper, .is--text-hover, .is--btn--cta, .gradient-bg",
    {
      props: "height,opacity,padding"
    }
  );
  $(this).toggleClass("is--hover");
  Flip.from(state, {
    duration: 0.5,
    ease: "Quint.easeOut"
  });
});
