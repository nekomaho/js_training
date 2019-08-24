window.onload = function() {
    let btn = document.getElementById('btn');
    btn.onclick = function(){
        window.alert('こんにちは');
    };

    btn.onclick = null;
};