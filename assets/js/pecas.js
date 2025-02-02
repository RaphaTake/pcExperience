var details = document.getElementsByClassName('main-section');


for (var m = 0; m < details.length; m++) {
    details[m].addEventListener("click", function() {
        for (var n = 0; n < details.length; n++) {
            if ((details[n].open) && (details[n] != this)) {
                details[n].open = false;
            }
        }
    })
}