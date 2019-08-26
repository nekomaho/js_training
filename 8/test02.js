let count = 0;
let result = document.getElementById('result');

document.getElementById('btn').addEventListener('click', function(){
    result.textContent = ++count;
    history.pushState(count, null, '/js/07/count/'+count);
});

window.addEventListener('popstate', function(e){
    count = e.state;
    result.textContent = count;
})