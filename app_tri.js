'use strict';
// トリボナッチ数列

//連想配列の宣言
const memo = new Map();
memo.set(0,0);
memo.set(1,0);
memo.set(2,1);

function trb(n) {
    if (memo.has(n)) {
        //連想配列から結果を返す
        return memo.get(n);
    }

    if ( n=== 0 ) {
        return 0;
    } else if ( n === 1) {
        return 0;
    } else if ( n === 2) {
        return 1;
    }

    //計算
    const value =  trb(n-1) + trb(n-2) + trb(n-3);
    //結果を連想配列に格納
    memo.set(n,value)
    //結果を返す
    return value;
}

//計算範囲を設定
const length = 40;

//数列を生成
for (let i = 0; i <= length; i++) {
    console.log(trb(i));    
}