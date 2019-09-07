function groupAnimals(animals) {
    // you can only write your code here!
    var res = [], out = [];
    //menyiapkan array sebanyak jumlah alphabet
    for(var i=0; i<26; i++)
        res.push([]);
    //mengelompokkan nama binatang sesuai abjad pertama
    for(i=0; i<animals.length; i++)
        res[animals[i].charCodeAt()-97].push(animals[i]);
    //menyimpan kelompok binatang yang array-nya tidak kosong
    for(i=0; i<res.length; i++){
        if(res[i].length > 0)
            out.push(res[i]);
    }
    return out;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]