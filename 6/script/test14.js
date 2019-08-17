class MyIterator {
    constructor(data) {
        this.data = data;
    }

    [Symbol.iterator](){
        let current = 0;
        let that = this;
        return {
            next(){
                let result;
                if (current < that.data.length) {
                    result = { value : that.data[current++], done : false };
                }else{
                    result = { done: true };
                }
                return  result;
            }
        }
    };
}

let ltr = new MyIterator(['one', 'two', 'three']);
for(let value of ltr){
    console.log(value);
}