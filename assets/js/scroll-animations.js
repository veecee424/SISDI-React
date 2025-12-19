document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
});

document.querySelectorAll('.value-toggle').forEach(button => {
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
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  if (!counters.length) return;

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
          counter.textContent =
            target >= 10 ? target.toLocaleString() + "+" : target;
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

  counters.forEach(counter => observer.observe(counter));
});


// JS slider
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("impactSlider");
  if (!slider) return;

  const track = slider.querySelector(".impact-track");
  const images = track.querySelectorAll("img");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");

  if (!images.length) return;

  let autoScroll;
  let imageWidth = images[0].getBoundingClientRect().width + 24; // gap

  const updateImageWidth = () => {
    imageWidth = images[0].getBoundingClientRect().width + 24;
  };

  window.addEventListener("resize", updateImageWidth);

  const scrollNext = () => {
    slider.scrollBy({ left: imageWidth, behavior: "smooth" });
  };

  const scrollPrev = () => {
    slider.scrollBy({ left: -imageWidth, behavior: "smooth" });
  };

  nextBtn?.addEventListener("click", scrollNext);
  prevBtn?.addEventListener("click", scrollPrev);

  const startAutoScroll = () => {
    autoScroll = setInterval(() => {
      if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 5
      ) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollNext();
      }
    }, 3500);
  };

  const stopAutoScroll = () => clearInterval(autoScroll);

  slider.addEventListener("mouseenter", stopAutoScroll);
  slider.addEventListener("mouseleave", startAutoScroll);

  startAutoScroll();
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("impactSlider");
  const next = document.querySelector(".slider-next");
  const prev = document.querySelector(".slider-prev");

  if (!slider) return;

  const scrollByAmount = 320;

  next?.addEventListener("click", () => {
    slider.scrollLeft += scrollByAmount;
  });

  prev?.addEventListener("click", () => {
    slider.scrollLeft -= scrollByAmount;
  });
});

//impact autoscroll
let autoScroll;

const startAutoScroll = (slider) => {
  autoScroll = setInterval(() => {
    if (
      slider.scrollLeft + slider.clientWidth >=
      slider.scrollWidth - 5
    ) {
      slider.scrollLeft = 0;
    } else {
      slider.scrollLeft += 320;
    }
  }, 3500);
};

const stopAutoScroll = () => clearInterval(autoScroll);

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("impactSlider");
  if (!slider) return;

  startAutoScroll(slider);

  slider.addEventListener("mouseenter", stopAutoScroll);
  slider.addEventListener("mouseleave", () => startAutoScroll(slider));
});

