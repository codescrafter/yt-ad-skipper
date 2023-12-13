(() => {
  const adSkipHandler = () => {
    // get element with classname html5-video-player. Video tag is a child of this element
    const videoContainer =
      document.getElementsByClassName("html5-video-player")[0];

    // get the actual video element
    const video = document.getElementsByClassName(
      "video-stream html5-main-video"
    )[0];

    let initialVideoSpeed = video.playbackRate;
    let initialSoundState = video.muted;
    let timeoutId = null;

    if (videoContainer.classList.contains("ad-showing")) {
      video.muted = true;
      video.playbackRate = 16;

      //   every second, observe the element with classname ytp-ad-skip-button-container,
      //   and click it if it exists
      timeoutId = setInterval(() => {
        const skipButton = document.getElementsByClassName(
          "ytp-ad-skip-button-container"
        )[0];

        if (skipButton) skipButton.click();
      }, 1000);
    } else {
      //   reset the video speed and sound state
      video.playbackRate = initialVideoSpeed;
      video.muted = initialSoundState;
      //   clear the interval
      clearInterval(timeoutId);
    }
  };

  let attempts = 0;
  const maxAttempts = 5;
  const interval = 500; // in milliseconds

  //   check if the video container exists. If it does, add a mutation observer to
  //  it. Mutation observer will observe the class attribute of the video container
  //  and call adSkipHandler whenever the class changes. This is because the class
  // changes when an ad is playing. So we can use this to detect when an ad is playing
  // and skip it

  //   execute this whenever class ad-showing is added to the video element

  //  if the video container doesn't exist, wait for 0.5 seconds and try again.
  // this could be improved by verifying that the DOM has loaded before trying to
  // access the video container

  const checkVideoContainer = () => {
    const videoContainer =
      document.getElementsByClassName("html5-video-player")?.[0];

    if (videoContainer) {
      const observer = new MutationObserver(adSkipHandler);
      observer.observe(videoContainer, {
        attributes: true,
        attributeFilter: ["class"],
      });
    } else if (attempts < maxAttempts) {
      attempts++;
      setTimeout(checkVideoContainer, interval);
    }
  };
  checkVideoContainer();
})();
