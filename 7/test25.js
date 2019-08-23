document.addEventListener('DOMContentLoaded', function () {
    let elem = document.getElementById('elem');

    elem.addEventListener('mouseover', function(e){
        e.target.className = 'highlight';
    }, false);

    elem.addEventListener('mouseout', function(e){
        e.target.className = '';
    }, false);
}, false);