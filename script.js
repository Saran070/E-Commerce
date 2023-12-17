document.addEventListener("DOMContentLoaded", function () {
    // Load header
    fetch("/path-to-your-header/header.html")
      .then(response => response.text())
      .then(html => {
        document.querySelector("header").innerHTML = html;
      });
  
    // Load footer
    fetch("/path-to-your-footer/footer.html")
      .then(response => response.text())
      .then(html => {
        document.querySelector("footer").innerHTML = html;
      });
  });
  