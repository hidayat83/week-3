function targetTerdekat(arr) {
    // you can only write your code here!
    var loc = [[],[]];
    //mapping lokasi o dan x
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o')
            loc[0].push(i);
        else if (arr[i] === 'x')
            loc[1].push(i);
    }
    //hitung jarak terdekat
    var shortest = arr.length;
    for (i = 0; i < loc[0].length; i++) {
        for (var j = 0; j < loc[1].length; j++) {
            var temp = Math.abs(loc[0][i] - loc[1][j]);
            if (shortest > temp)
                shortest = temp;
        }
    }
    //jika tidak ada x atau o, return 0
    return (loc[0].length > 0 && loc[1].length > 0) ? shortest : 0;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2