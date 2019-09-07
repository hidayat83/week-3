function dataHandling2(inpArr){
    /* modifikasi variabel input */
    inpArr.splice(1, 1, "Roman Alamsyah Elsharawy");
    inpArr.splice(2, 1, "Provinsi Bandar Lampung");
    inpArr.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(inpArr);
    /* print nama bulan */
    var month = inpArr[3].split('/');
    switch (month[1]) {
        case '01':
            console.log('Januari');
            break;
        case '02':
            console.log('Februari');
            break;
        case '03':
            console.log('Maret');
            break;
        case '04':
            console.log('April');
            break;
        case '05':
            console.log('Mei');
            break;
        case '06':
            console.log('Juni');
            break;
        case '07':
            console.log('Juli');
            break;
        case '08':
            console.log('Agustus');
            break;        
        case '09':
            console.log('September');
            break;
        case '10':
            console.log('Oktober');
            break;
        case '11':
            console.log('November');
            break;
        case '12':
            console.log('Desember');
            break;
        default:
            break;
    }
    /* sorting tahun/bulan/tanggal */
    var monthSort = month.slice().sort((a,b)=>b-a);
    console.log(monthSort);
    /* join tanggal/bulan/tahun */
    console.log(month.join('-'));
    /* slice kelebihan karakter */
    console.log(inpArr[1].slice(0,15));
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);