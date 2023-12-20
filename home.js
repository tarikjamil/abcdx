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

<script type="text/javascript">
piAId = '1051522';
piCId = '21221';
piHostname = 'go.skyhive.io';

(function() {
function async_load(){
var s = document.createElement('script'); s.type = 'text/javascript';
s.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + piHostname + '/pd.js';
var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
}
if(window.attachEvent) { window.attachEvent('onload', async_load); }
else { window.addEventListener('load', async_load, false); }
})();
</script>