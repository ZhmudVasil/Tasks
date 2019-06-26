let X=prompt("Input X koordinat");
let Y=prompt("Input Y koordinat");
let D=prompt("Input step");
function solution(X, Y, D){
    if(X>Y){
        Y=prompt("Input new Y koordinat, because Y>X")
    }
    return Math.ceil((Y-X)/D);
}
document.getElementById("tasks3_1").innerHTML= solution(X,Y,D);