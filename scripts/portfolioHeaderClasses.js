var sectionHeaders = document.querySelectorAll("h2");

for (var i = 0; i < sectionHeaders.length; i++) {
    sectionHeaders[i].addEventListener('click', function() {
        this.parentNode.classList.toggle("expanded");
        
        for (var j = 0; j < sectionHeaders.length; j++) {
            if (sectionHeaders[j] != this) {
                sectionHeaders[j].parentNode.classList.toggle("removed");
            }
        }
    })
}