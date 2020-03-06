'use strict';
// フィボナッチ数列

//連想配列の宣言
const memo = new Map();
memo.set(0,0);
memo.set(1,1);

function fib(n) {
    if (memo.has(n)) {
        //連想配列から結果を返す
        return memo.get(n);
    }

    if ( n=== 0 ) {
        return 0;
    } else if ( n === 1) {
        return 1;
    }

    //計算
    const value =  fib(n-1) + fib(n-2);
    //結果を連想配列に格納
    memo.set(n,value)
    //結果を返す
    return value;
}

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));    
}