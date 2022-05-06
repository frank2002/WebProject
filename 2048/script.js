"use strict";

/* initial chess board */
let line0 = [0,0,0,0];
let line1 = [0,0,0,0];
let line2 = [0,0,0,0];
let line3 = [0,0,0,0];

/* initial score */
let score = 0;

display();

function display(){
    /* display chess board */
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            if(i==0){
                /* change value */
                document.getElementById("g0"+"-"+j).innerHTML = line0[j];
                /* change color */
                document.getElementById("g0"+"-"+j).style.backgroundColor = `rgb(255,${210-200*(Math.log(line0[j])/8)},${210-200*(Math.log(line0[j])/8)})`;
                if(line0[j] == 0){
                  document.getElementById("g0"+"-"+j).innerHTML = "";
                  document.getElementById("g0"+"-"+j).style.backgroundColor = "#b6acac82";
                }

            }else if(i==1){
                /* change value */
                document.getElementById("g1"+"-"+j).innerHTML = line1[j];
                /* change color */
                document.getElementById("g1"+"-"+j).style.backgroundColor = `rgb(255,${210-200*(Math.log(line1[j])/8)},${210-200*(Math.log(line1[j])/8)})`;
                if(line1[j] == 0){
                    document.getElementById("g1"+"-"+j).innerHTML = "";
                    document.getElementById("g1"+"-"+j).style.backgroundColor = "#b6acac82";
                }
            }else if(i==2){
                /* change value */
                document.getElementById("g2"+"-"+j).innerHTML = line2[j];
                /* change color */
                document.getElementById("g2"+"-"+j).style.backgroundColor = `rgb(255,${210-200*(Math.log(line2[j])/8)},${210-200*(Math.log(line2[j])/8)})`;
                if(line2[j] == 0){
                    document.getElementById("g2"+"-"+j).innerHTML = "";
                    document.getElementById("g2"+"-"+j).style.backgroundColor = "#b6acac82";
                }
            }else if(i==3){
                /* change value */
                document.getElementById("g3"+"-"+j).innerHTML = line3[j];
                /* change color */
                document.getElementById("g3"+"-"+j).style.backgroundColor = `rgb(255,${210-200*(Math.log(line3[j])/8)},${210-200*(Math.log(line3[j])/8)})`;
                if(line3[j] == 0){
                    document.getElementById("g3"+"-"+j).innerHTML = "";
                    document.getElementById("g3"+"-"+j).style.backgroundColor = "#b6acac82";
                }

            }




        }
    }
}



