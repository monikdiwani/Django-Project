document.addEventListener("DOMContentLoaded", function() {
  // Initialization code after the DOM is loaded
  let slideImages = document.querySelectorAll('.slides img'); // Target only images within the slide container
  let next = document.querySelector('.next');
  let prev = document.querySelector('.prev');
  let dots = document.querySelectorAll('.dot');
  
  var counter = 0;
  var slideInterval;

  // Ensure the first image is set as active on load
  slideImages[0].classList.add('active');
  
  // Code for next button
  next.addEventListener('click', slideNext);
  function slideNext() {
    slideImages[counter].classList.remove('active'); // Remove active from current
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    
    if (counter >= slideImages.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
    
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    slideImages[counter].classList.add('active'); // Add active to new slide
    indicators();
  }
  
  // Code for prev button
  prev.addEventListener('click', slidePrev);
  function slidePrev() {
    slideImages[counter].classList.remove('active');
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    
    if (counter == 0) {
      counter = slideImages.length - 1;
    } else {
      counter--;
    }
    
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    slideImages[counter].classList.add('active');
    indicators();
  }
  
  // Auto sliding function
  function startAutoSliding() {
    slideInterval = setInterval(slideNext, 3000); // Automatically slide every 3 seconds
  }
  
  // Start the automatic sliding immediately
  startAutoSliding();
  
  // Stop auto sliding when the mouse is over the slider
  const container = document.querySelector('.slide-container');
  container.addEventListener('mouseover', function() {
    clearInterval(slideInterval);
  });
  
  // Resume auto sliding when the mouse leaves the slider
  container.addEventListener('mouseout', startAutoSliding);
  
  // Add and remove active class from the indicators
  function indicators() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[counter].classList.add('active');
  }
  
  // Add click event to the indicator
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      let imageId = parseInt(dot.getAttribute('attr'));
      if (imageId !== counter) {
        slideImages[counter].classList.remove('active');
        if (imageId > counter) {
          slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        } else {
          slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        }
        counter = imageId;
        slideImages[counter].classList.add('active');
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
        indicators();
      }
    });
  });
});
