class MyStorage {
    constructor(app) {
        this.app = app;
        this.storage = sessionStorage;
        this.data = JSON.parse(this.storage.app || '{}');
    }

    getItem(key){
        return this.data[key];
    }

    setItem(key, value){
        this.data[key] = value;
    }

    save(){
        this.storage[this.app] = JSON.stringify(this.data);
    }
}

let storage = new MyStorage('JSSample');
storage.setItem('hoge', 'ホゲ');
console.log(storage.getItem('hoge'));
storage.save();