// Simple crossfade slideshow, no dependencies.
(function () {
  var slides = document.querySelectorAll('.slideshow .slide');
  if (slides.length < 2) return;

  var current = 0;
  var intervalMs = 5000; // time each photo stays fully visible before crossfading

  function next() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  setInterval(next, intervalMs);
})();
