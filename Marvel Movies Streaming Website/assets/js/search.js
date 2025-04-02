// Search functionality
document.getElementById('search-btn').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const movieCards = document.querySelectorAll('#movie-cards .card');
  
    movieCards.forEach(function(card) {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
        card.parentElement.style.display = 'block'; // Show card
      } else {
        card.parentElement.style.display = 'none'; // Hide card
      }
    });
  });
  
  // You can also add "keyup" event to trigger search as the user types
  document.getElementById('search-input').addEventListener('keyup', function() {
    const searchTerm = this.value.toLowerCase();
    const movieCards = document.querySelectorAll('#movie-cards .card');
  
    movieCards.forEach(function(card) {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
        card.parentElement.style.display = 'block';
      } else {
        card.parentElement.style.display = 'none';
      }
    });
  });
  