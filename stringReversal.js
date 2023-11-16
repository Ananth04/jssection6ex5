const stringReversal = (str) => {
//let str = "aganitha";
//let arr = str.split('');
//arr.reverse();
[...str].reduce((reversed, character) => {
    //console.log(character+reversed);
    return character + reversed;}, "");
};

module.exports = {stringReversal};