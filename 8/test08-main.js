document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btn').addEventListener('click',function(){
        let newWorkerViaBlob = function (relativePath) {
            let baseURL = window.location.href.replace(/\\/g, '/').replace(/\/[^\/]*$/, '/');
            let array = ['importScripts("' + baseURL + relativePath + '");'];
            let blob = new Blob(array, { type: 'text/javascript' });
            let url = window.URL.createObjectURL(blob);
            return new Worker(url);
        };
        let worker = newWorkerViaBlob('test08-1.js');

        worker.postMessage({
            'target': document.getElementById('target').value,
            'x': document.getElementById('x').value
        });
        document.getElementById('result').textContent = '計算中。。。';

        worker.addEventListener('message', function(e){
            document.getElementById('result').textContent = e.data;
        }, false);

        worker.addEventListener('error', function(e){
            document.getElementById('result').textContent = e.error;
        }, false);
    }, false);
}, false);