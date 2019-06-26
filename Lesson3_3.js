let A=[10,4,2,8,6,9,3,7,1,12,15,19,16,5,11,17,14,18];
let P=A.reduce((sum, a) => sum + a,0);
function tapeEquilibrium(A){
    for(let i=1; i<A.length; i++){
        let sum1=A.slice(0,i).reduce((sum, a) => sum + a,0);
        let sum2=A.slice(i).reduce((sum, a) => sum + a,0);
        let sub=Math.abs(sum1-sum2)
        if(P>sub){
            P=sub;
        }
    }
    return P;
}

document.getElementById("tasks3_3").innerHTML= tapeEquilibrium(A);