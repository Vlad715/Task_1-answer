"use strict";

let S = 'The goal is to';
let K = 4;

function solution(S, K) {

    const arr = S.split(' ');

    const wordLength = arr.map(item => item.length);

    let largestWord = Math.max( ...wordLength );
    
    let sum = 0;
    let items = [];
    let numMassenge = 0;

    let i = items.length;

    function counter() {
        numMassenge++;

        for ( ; i < wordLength.length; i++) {

            let item = function() {
                console.log(i);
            }
    
            items.push(item);
    
            sum += wordLength[i] + 1;
            if ( sum > K + 1 ) break;
                
        }
        // console.log(sum);
        // console.log(items);
    }

    function recycle() {
        counter();

        if (arr.length > items.length ) {
            recycle();
        }        
    }
    recycle();
    // console.log(wordLength);

    return (
        (function() {   
            if ( largestWord > K) {
                return console.log(-1);
            } else { console.log(numMassenge);}
        } ())
    );   
}

solution(S, K);