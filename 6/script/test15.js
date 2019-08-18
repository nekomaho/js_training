function* myGenerator(){
    yield 'あいうえお';
    yield 'かきくけこ';
    yield 'さしすせそ';
}

for(let t of myGenerator()) {
    console.log(t);
}

function* getPrimes() {
    let num = 2;
    
    while(true) {
        if (isPrime(num)) { yield num; }
        num++;
    }
}

function isPrime(value) {
    for (let i = 2; i < Math.floor(Math.sqrt(value)); i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return true;
}

for(let value of getPrimes()){
    if (value > 100) { break; }
    console.log(value);
}

class MyIterator {
    constructor(data) {
        this.data = data;
        this[Symbol.iterator] = function* (){
            let current = 0;
            let that = this;
            while(current < that.data.length) {
                yield that.data[current++];
            }
        }
    }
}

let ltr = new MyIterator(['one', 'two', 'three']);
for(let value of ltr){
    console.log(value);
}