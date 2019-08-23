document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btn').addEventListener('click', function(){
        document.getElementsByName('animal').forEach((animal, idx, animals) => {
            if (animal.checked) {
                window.alert(animal.value);
                return;
            }
        });
    },false);
},false);