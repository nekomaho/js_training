document.addEventListener('DOMContentLoaded',function(){
    mouse = function (e) {
        let target = e.target;
        console.log('発生元' + target.nodeName + '/' + target.id);
        console.log('種類' + e.type);
    }
    document.getElementById('btn').addEventListener('click', mouse, false);
}, false);