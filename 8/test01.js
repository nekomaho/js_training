document.addEventListener("DOMContentLoaded",function(){
    let timer = window.setInterval(
        function() {
            let dat = new Date();
            document.getElementById('result').textContent = dat.toLocaleTimeString();
        }, 5000);

    document.getElementById('btn').addEventListener('click', function(){
        window.clearInterval(timer);
    },false);
},false);