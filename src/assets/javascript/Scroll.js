function splitScroll() {
  const controlller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: "100%",
    triggerElement:'.proyects-title',
    triggerHook: 0
  })
  .setPin('.proyects-title')
  // .addIndicators()
  .addTo(controlller)
}

splitScroll();
