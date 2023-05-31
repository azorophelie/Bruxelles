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
    darkModeIcon.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';

  }
  document.addEventListener('DOMContentLoaded', function() {
    var dropDownBtn = document.querySelector('.dropbtn');
    var dropDownContent = document.querySelector('.dropdown-content');
  
    dropDownBtn.addEventListener('click', function() {
      if (dropDownContent.style.display === 'block') {
        dropDownContent.style.display = 'none';
      } else {
        dropDownContent.style.display = 'block';
      }
    });
  });

 
  
    