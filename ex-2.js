function balikString(inp){
    var res = '';
    for(var i=inp.length-1; i>=0; i--)
        res += inp[i];
    return res;
}   

console.log(balikString('hello world!'));
console.log(balikString('tes tes 123'));

