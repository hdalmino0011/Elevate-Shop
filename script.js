// ElevateShop – image gallery and cart counter
// No emojis, no money-back guarantee, fully editorial

document.addEventListener('DOMContentLoaded', function() {

  // 1. Thumbnail gallery: replace main image on click
  const mainImage = document.getElementById('main-product-image');
  const thumbnails = document.querySelectorAll('.thumb');

  if (mainImage && thumbnails.length) {
    thumbnails.forEach(function(thumb) {
      thumb.addEventListener('click', function() {
        const newImageSrc = this.getAttribute('data-img');
        if (newImageSrc) {
          // subtle fade effect
          mainImage.style.opacity = '0.7';
          setTimeout(function() {
            mainImage.src = newImageSrc;
            mainImage.style.opacity = '1';
          }, 100);
        }
      });
    });
  }

  // 2. Cart counter logic
  let cartCount = 0;
  const cartSpan = document.getElementById('cart-count');
  const addToCartBtn = document.getElementById('add-to-cart-btn');

  function updateCartDisplay() {
    if (cartSpan) {
      cartSpan.textContent = cartCount;
    }
  }

  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', function() {
      cartCount += 1;
      updateCartDisplay();

      // Visual feedback (no emoji)
      const originalText = addToCartBtn.textContent;
      addToCartBtn.textContent = 'Added';
      addToCartBtn.style.backgroundColor = '#3a3a3a';
      setTimeout(function() {
        addToCartBtn.textContent = originalText;
        addToCartBtn.style.backgroundColor = '#000000';
      }, 800);
    });
  }

  // Initialize counter
  updateCartDisplay();
});
