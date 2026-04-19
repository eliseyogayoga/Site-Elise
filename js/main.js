document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const header = document.querySelector('.header');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  window.addEventListener('scroll', () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }
  });

  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeEls.forEach(el => observer.observe(el));
  }

  // LIGHTBOX LOGIC
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const blobItems = document.querySelectorAll('.blob-item.with-image');

  if (lightbox && blobItems.length > 0) {
    blobItems.forEach(item => {
      item.addEventListener('click', () => {
        const fullImgUrl = item.getAttribute('data-full');
        // Find the caption structure
        const parentCard = item.closest('.blob-card');
        const captionTitle = parentCard ? parentCard.querySelector('.caption-title').innerHTML : '';
        const captionTech = parentCard ? parentCard.querySelector('.caption-tech').innerHTML : '';

        if (fullImgUrl) {
          lightboxImg.src = fullImgUrl;
          lightboxCaption.innerHTML = `
            <span class="caption-title">${captionTitle}</span>
            <span class="caption-tech">${captionTech}</span>
          `;
          lightbox.classList.add('open');
          document.body.style.overflow = 'hidden'; // Prevent scroll
        }
      });
    });

    // Close on click anywhere
    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
      // Small delay to clear src after fade out
      setTimeout(() => {
        lightboxImg.src = '';
      }, 300);
    });
  }
});
