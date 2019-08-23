document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('btn').addEventListener('click', function(){
        let name = document.getElementById('name');
        let result = document.getElementById('result');
        result.innerHTML = 'こんにちは' + name.value + 'さん';
    });
});