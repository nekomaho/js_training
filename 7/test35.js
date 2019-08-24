document.addEventListener('DOMContentLoaded', function(){
    class Counter {
        constructor(elem) {
            this.count = 0;
            this.elem = elem;
            elem.addEventListener('click', () => {
                this.count++;
                this.show();
            }, false)
        }
        
        show() {
            console.log(this.elem.id + 'は' + this.count + '回クリックされました');
        }
    }
    
    let c = new Counter(document.getElementById('btn'));
}, false);