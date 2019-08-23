document.addEventListener('DOMContentLoaded', function(){
    let setRadioValue = function(name, value) {
        var elements = document.getElementsByName(name);
        elements.forEach((element,idx,elements) => {
            if (element.value === value) {
                element.checked = true;
                return;
            }
        });
    };

    setRadioValue('animal', '牛');
}, false);