document.addEventListener('DOMContentLoaded',function(){
    let data = {
        title: 'ほげ',
        price: 2000,
        show: function(){
            console.log(this.title + '/' + this.price + '円');
        }
    };

    document.getElementById('btn').addEventListener('click',data.show.bind(data),false);
}, false)