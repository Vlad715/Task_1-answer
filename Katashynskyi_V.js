
function solution(S, K) {
    const arrWords = S.split(' ').map((el) => el.length);
    const largestWord = Math.max(...arrWords);
    if ( largestWord > K) { return -1; }

    let countMassenge = 0;
    let testArr = [];
    let i = testArr.length;

    function counterMessege() {
        countMassenge++;
        let sumLetter = 0;
        
        for ( ; i < arrWords.length; i++) {
            testArr.push(i);
            sumLetter += arrWords[i] + 1;
            if ( sumLetter > K + 1 ) { testArr.pop(); break;}              
        }
    }

    function checkEndText() {
        counterMessege();
        if (arrWords.length > testArr.length ) {
         checkEndText();
        }        
    }
    checkEndText();

    return countMassenge;
}

console.log(solution('SMS messages are really short', 12));