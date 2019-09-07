function dataHandling(data){

    var tamp='';
      for(var i=0; i<data.length;i++) {
        for(var j=0;j<data[i].length; j++) {
          switch(j){
          case 0: 
          tamp += '\nNomor ID: '+data[i][j]+'\n';
         break;
         case 1:
         tamp += 'Nama Lengkap: '+data[i][j]+'\n';
         break;
         case 2:
         tamp += 'TTL: '+data[i][j] +' ' + data[i][j+1]+'\n';
         break;
         case 4:
         tamp += 'Hobi: '+data[i][j] + '\n';
         break;
         default:
         break;
        }
        }
      }
      return tamp;
    }
     var data= [
      ["0001","Roman Alasyah","Bandar Lampung","21/05/1989","Membaca"],
      ["0002","Dika Sembiring","Medan","10/10/1992","Bermain Gitar"],
      ["0003","Winona","Ambon","25/12/1965","Memasak"],
      ["0004","Bintang  Senjaya","Martapura", "6/4/1970","Berkebun"]
      ]
      
    console.log(dataHandling(data));
    