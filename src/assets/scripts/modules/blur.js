export let blur = (function(options) {
  const ratio = 1.0608, //соотношение сторон фоновой картинки
    bgImgHeight = 1273; //высота фоновой картинки
  let bgBlock = document.querySelector(options.bgBlock),
    blurBlock = document.querySelector(options.blurBlock),
    blurWrapper = document.querySelector(options.blurWrapper);

  return {
    set: function() {
      let bgWidth = bgBlock.offsetWidth,
        bgHeight = bgBlock.offsetHeight,
        posTop = blurWrapper.offsetTop,
        blurCSS = blurBlock.style,
        bgBlockPosY =
          parseInt(getComputedStyle(bgBlock).backgroundPositionY) / 100,
        bgBlockSize = getComputedStyle(bgBlock).backgroundSize;

      if (bgBlockSize !== "auto") {
        if (bgWidth > bgHeight / ratio) {
          bgHeight = bgWidth * ratio;
          blurCSS.backgroundSize = bgWidth + "px" + " " + "auto";
          blurCSS.backgroundPositionY =
            -posTop - (bgHeight - bgBlock.offsetHeight) * bgBlockPosY + "px";
        } else {
          blurCSS.backgroundSize = "auto" + " " + bgHeight + "px";
          blurCSS.backgroundPositionY = -posTop + "px";
        }
      } else {
        blurCSS.backgroundSize = "auto";
        blurCSS.backgroundPositionY =
          -posTop - (bgImgHeight - bgHeight) * bgBlockPosY + "px";
      }
    }
  };
})({
  bgBlock: ".works-about",
  blurBlock: ".works-about__blur",
  blurWrapper: ".works-about__contact-card"
});
