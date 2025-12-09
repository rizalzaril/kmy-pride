// Custom JS Animations //

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Hero title animation
  gsap.from("#hero-title", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power3.out",
  });

  // About section
  gsap.from("#about .col-md-6", {
    scrollTrigger: { trigger: "#about", start: "top 80%" },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
  });

  // Gallery images
  gsap.from(".masonry img", {
    scrollTrigger: { trigger: ".masonry", start: "top 80%" },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
  });

  // Event cards
  gsap.from("#event .card", {
    scrollTrigger: { trigger: "#event", start: "top 80%" },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
  });

  // Project boxes
  gsap.from("#project .p-4", {
    scrollTrigger: { trigger: "#project", start: "top 80%" },
    opacity: 0,
    x: -50,
    duration: 1,
    stagger: 0.3,
  });

  // Contact form
  gsap.from("#contact form", {
    scrollTrigger: { trigger: "#contact", start: "top 80%" },
    opacity: 0,
    scale: 0.9,
    duration: 1,
  });
});

const lightbox = GLightbox({
  selector: ".glightbox",
  touchNavigation: true,
  loop: true,
});

//ytb thumb

document.addEventListener("click", function (e) {
  const p = e.target.closest(".yt-placeholder");
  if (!p) return;
  const id = p.dataset.videoid;
  const iframe = document.createElement("iframe");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  );
  iframe.setAttribute("allowfullscreen", "");
  iframe.src = "https://www.youtube.com/embed/" + id + "?autoplay=1";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  p.innerHTML = "";
  p.appendChild(iframe);
});

// const mainVideo = document.getElementById("mainVideo");
// const items = document.querySelectorAll(".playlist-item");

// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     const src = item.getAttribute("data-src");
//     mainVideo.src = src;
//     mainVideo.play();
//   });
// });

const mainVideo = document.getElementById("mainVideo");
const items = document.querySelectorAll(".playlist-item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    const src = item.getAttribute("data-src");
    mainVideo.src = src;
    // autoplay dimatikan
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll(".lazy-img");

  const lazyLoad = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.onload = () => img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  };

  const observer = new IntersectionObserver(lazyLoad, {
    root: null,
    threshold: 0.1,
  });

  lazyImages.forEach((img) => observer.observe(img));
});
