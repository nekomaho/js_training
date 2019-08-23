document.addEventListener('DOMContentLoaded', function () {
    let elem = document.getElementById('elem');

    elem.addEventListener('click', function (e) {
        e.target.classList.toggle('highlight');
    }, false);
}, false);