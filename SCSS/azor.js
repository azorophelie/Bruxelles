/*var sidenav = document.getElementById("navbar-clid");
  var openBtn = document.getElementById("openBtn");
  var closeBtn = document.getElementById("closeBtn");
  
  openBtn.onclick = openNav;
  closeBtn.onclick = closeNav;
  
  
  function openNav() {
    sidenav.classList.add("active");
  }
  
  function closeNav() {
    sidenav.classList.remove("active");
  }
  document.addEventListener("keydown", function(event) {
    if (event.key === "f" || event.key === "F") {
      var openBtn = document.getElementById("navbar-clcl");
      navbar-clcl.classList.toggle("show");
    }
  }) */
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