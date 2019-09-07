function pasanganTerbesar(num) {
    // you can only write your code here!
    var kasih = [], out=0;
    while(num/10){
        kasih.unshift(num%10);
        num = Math.floor(num/10);
    }
    for(var i=0; i<kasih.length-1;i++){
        var temp = kasih[i]*10 + kasih[i+1];
        if(temp>out)
            out = temp;
    }
    return out;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99