window.onload = function() {
    animateLogo();
};

function animateLogo(){

    TweenMax.fromTo("#logo",1, {
      // from
      css: {
        y: "-20px",
      }
    },{
      // to
      css: {
        y: "20px",
      },

      // option to repeat animation forever
      repeat: -1,

      // option to reverse the animation and rerun
      yoyo: true,
    
      ease: Power2.easeInOut,
    }
  );
}
