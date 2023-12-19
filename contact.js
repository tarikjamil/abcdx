$("input, textarea").focus(function () {
  $(this).parent(".contact-field-wrapper").addClass("is--focused");
});

$("input, textarea").blur(function () {
  $(this).parent(".contact-field-wrapper").removeClass("is--focused");
});
