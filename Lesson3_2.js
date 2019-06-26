let A=[10,4,2,8,6,9,3,7,1,12,15,19,16,5,11,17,14,18];
function findNumber(A){
    A.sort(function(a,b){ 
        return a-b
    })
    let prevA=0;
    let findN=0;
    for(let i=0; i<A.length; i++){
        if(A[i]!==prevA+1) {
            findN=prevA+1;
            break;
        }
        prevA=A[i];
    }
    return findN;
}
document.getElementById("tasks3_2").innerHTML= findNumber(A);