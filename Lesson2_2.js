let A=[100,53,2,8,34,99,4];
K=+prompt("Input count circling array");
circling=(A,K)=>{
A.unshift(A.slice(A.length-K));
A.splice(A.length-K,K);
return A;
}
document.getElementById("tasks2_2").innerHTML= circling(A,K);