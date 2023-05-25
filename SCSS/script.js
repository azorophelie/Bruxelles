window.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', function() {
      var searchTerm = document.querySelector('.search-input').value;
      
      alert("Vous avez recherché : " + searchTerm);
    });
  });


  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function toggleDarkMode() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.toggle("dark-mode");
  }
