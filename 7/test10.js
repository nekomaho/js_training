document.addEventListener('DOMContentLoaded', function(){
    let logo = document.getElementById('logo');
    let attrs = logo.attributes
    console.dir(attrs);
    for(let i = 0, len = attrs.length; i < len; i++){
        console.log(attrs.item(i).name + ":"  + attrs.item(i).value);
    }
});