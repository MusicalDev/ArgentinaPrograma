function fadeInText(element, duration) {
    let opacity = 0;
    const increment = 1 / (duration / 100);
    element.style.opacity = opacity;

    function increaseOpacity() {
      opacity += increment;
      element.style.opacity = opacity;

      if (opacity < 1) {
        setTimeout(increaseOpacity, 100);
      }
    }

    increaseOpacity();
  }

  const textElement = document.querySelector('.fade-in-text');
  fadeInText(textElement, 6000); 