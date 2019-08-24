document.addEventListener('DOMContentLoaded',function(){
    let alert = function(){
        window.alert('こんにちわ');
    };
    let btn = document.getElementById('btn');
    btn.addEventListener('click', alert, false);
    btn.removeEventListener('click', alert, false);
}, false);