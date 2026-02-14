// Adapted from public/js/scroll-animations.js
export function initScrollAnimations() {
  // Fade-in observer
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    if (fader.dataset.fadeObserverBound === 'true') return;
    fader.dataset.fadeObserverBound = 'true';
    appearOnScroll.observe(fader);
  });

  // Accordion toggles
  document.querySelectorAll('.value-toggle').forEach(button => {
    if (button.dataset.accordionBound === 'true') return;
    button.dataset.accordionBound = 'true';

    button.addEventListener('click', () => {
      const item = button.closest('.value-item');

      // Close other open items (accordion behavior)
      document.querySelectorAll('.value-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });

      // Toggle current
      item.classList.toggle('active');
    });
  });

  // Counter animation
  const counters = document.querySelectorAll('.counter');
  if (counters.length) {
    let animated = false;

    const animateCounters = () => {
      if (animated) return;
      animated = true;

      counters.forEach(counter => {
        const target = parseInt(counter.dataset.target, 10);
        const duration = 1500;
        const step = Math.ceil(target / (duration / 16));
        let current = 0;

        const update = () => {
          current += step;
          if (current < target) {
            counter.textContent = current;
            requestAnimationFrame(update);
          } else {
            counter.textContent = target >= 10 ? target.toLocaleString() + '+' : target;
          }
        };

        update();
      });
    };

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    counters.forEach(counter => {
      if (counter.dataset.counterBound === 'true') return;
      counter.dataset.counterBound = 'true';
      observer.observe(counter);
    });
  }

  // Slider controls
  const initSlider = () => {
    const slider = document.getElementById('impactSlider');
    if (!slider) return;

    if (slider.dataset.sliderInit === 'true') return;
    slider.dataset.sliderInit = 'true';

    const track = slider.querySelector('.impact-track');
    const images = track ? track.querySelectorAll('img') : [];
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');

    if (!images.length) return;

    let autoScroll;
    let imageWidth = images[0].getBoundingClientRect().width + 24; // gap

    const updateImageWidth = () => {
      imageWidth = images[0].getBoundingClientRect().width + 24;
    };

    window.addEventListener('resize', updateImageWidth);

    const scrollNext = () => {
      slider.scrollBy({ left: imageWidth, behavior: 'smooth' });
    };

    const scrollPrev = () => {
      slider.scrollBy({ left: -imageWidth, behavior: 'smooth' });
    };

    nextBtn?.addEventListener('click', scrollNext);
    prevBtn?.addEventListener('click', scrollPrev);

    const startAutoScroll = () => {
      autoScroll = setInterval(() => {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollNext();
        }
      }, 3500);
    };

    const stopAutoScroll = () => clearInterval(autoScroll);

    slider.addEventListener('mouseenter', stopAutoScroll);
    slider.addEventListener('mouseleave', startAutoScroll);

    startAutoScroll();
  };

  initSlider();

  // Programs accordion
  document.querySelectorAll('.program-header').forEach(header => {
    if (header.dataset.programBound === 'true') return;
    header.dataset.programBound = 'true';

    header.addEventListener('click', () => {
      const item = header.parentElement;

      document.querySelectorAll('.program-item').forEach(i => {
        if (i !== item) i.classList.remove('active');
      });

      item.classList.toggle('active');
    });
  });

  // Contact form button behavior
  const form = document.querySelector('.contact-form');
  const button = document.getElementById('submitBtn');
  if (form && button && form.dataset.submitBound !== 'true') {
    form.dataset.submitBound = 'true';
    form.addEventListener('submit', () => {
      button.disabled = true;
      button.innerHTML = 'Sending...';
      button.classList.add('disabled');
    });
  }
}

export default initScrollAnimations;
