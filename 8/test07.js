function asyncProcess(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(value) {
                resolve(`入力値：${value}`);
            }else {
                reject('入力値は空です');
            }
        }, 500);
    });
}

asyncProcess('とくじろう').then(
    response => {
        console.log(response);
        return asyncProcess('サブロウ');
    }
).then(
    response => {
        console.log(response);
    },
    error => {
        console.log(`エラー ${error}`);
    }
);

console.log('ほげ');

Promise.all([
    asyncProcess('ほげ'),
    asyncProcess('ふが'),
    asyncProcess('にゃご'),
]).then(
    response => {
        console.log(response);
    },
    error => {
        console.log(`エラー：${error}`);
    }
);

Promise.race([
    asyncProcess('ほげ'),
    asyncProcess('ふが'),
    asyncProcess('にゃご'),
]).then(
    response => {
        console.log(response);
    },
    error => {
        console.log(`エラー：${error}`);
    }
);