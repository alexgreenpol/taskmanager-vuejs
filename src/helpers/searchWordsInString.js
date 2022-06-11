export default function(wordsArr, str) {
    if (!wordsArr) {
        return false;
    }

    const wordList = wordsArr.join("|");
    const regExp = new RegExp(`${wordList}`);

    return regExp.test(str);
}
