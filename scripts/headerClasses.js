var sectionHeaders = document.querySelectorAll("h2");

for (var i = 0; i < sectionHeaders.length; i++) {
    sectionHeaders[i].addEventListener('click', function() {
        this.parentNode.classList.toggle("expanded");
    })
}