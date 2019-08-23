document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btn').addEventListener('click', function(){
        let result = [];
        let animals = document.getElementsByName('animal');
        console.dir(animals);
        animals.forEach((animal, idx, animals) => {
            if (animal.checked) {
                result.push(animal.value);
            }
        });
        window.alert(result.toString());
    },false);
},false);