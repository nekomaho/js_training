let s = document.getElementById('food');
let opts = s.childNodes;
opts.forEach(function (value, key, parent) {
    console.dir(value)
    if (value.nodeType === 1) {
        console.log(value.value);
    }
});