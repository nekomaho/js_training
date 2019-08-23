document.addEventListener('DOMContentLoaded', function () {
    let getSelectView = function (name) {
        let result = [];
        let opts = document.getElementById('animal').options;
        for (let i = 0, len = opts.length; len > i; i++) {
            let opt = opts.item(i);
            if (opt.selected) {
                result.push(opt.value);
            }
        }
        return result;
    };

    document.getElementById('btn').addEventListener('click', function () {
        window.alert(getSelectView('animal'));
    }, false);
}, false);