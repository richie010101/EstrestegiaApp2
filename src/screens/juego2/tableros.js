
export function crear() {
        var tableros
        console.log("entra");
         tableros = new Array(15)

        for(var i = 0;i<tableros.length;i++){
             tableros[i]= new Array(9);
        }
    
        for(var i = 0;i<tableros.length;i++){
            for(var j = 0;j<9;j++){
                tableros[i][j]= new Array(3);
            }
        }
    
        for(var i = 0;i<tableros.length;i++){
            for(var j = 0;j<9;j++){
                for(var k = 0;k<3;k++){
                    tableros[i][j][k]= new Array(3);
                }
        }
        }
        for(var i = 0;i<tableros.length;i++){
            for(var j = 0;j<9;j++){
              for(var k = 0;k<3;k++){
                for(var l = 0;l<3;l++){
                    if(i===0){
                        tableros[i][j][k][l]= 1
                    }
                    else if(i===1){
                        tableros[i][j][k][l]= 2
                    }
                    else if(i===2){
                        tableros[i][j][k][l]= 3
                    }
                    else if(i===3){
                        tableros[i][j][k][l]= 4
                    }
                    else if(i===4){
                        tableros[i][j][k][l]= 5
                    }
                    else if(i===5){
                        tableros[i][j][k][l]= 6
                    }
                    else if(i===6){
                        tableros[i][j][k][l]= 7
                    }                    
                    else if(i===7){
                        tableros[i][j][k][l]= 8
                    }
                    else if(i===8){
                        tableros[i][j][k][l]= 9
                    }
                    else{
                        tableros[i][j][k][l]=5
                    }
                }
              }
            }
          }
    return tableros
  }



