let N = prompt("Input number");
solution = (N)=>{
    let a = +parseInt(N).toString(2);
    let b = a.toString();
    let prevA=0;
    let j=0;
    let maxSolution=0;
for(let i=0; i<b.length; i++){
if(+b[i]===0){
    if(prevA===1){
        j=1;
    }
    else {
        j=j+1;
    }
}
else{
    if(maxSolution<j){
        maxSolution= j;
    }
}
prevA=+b[i];
}
console.log(maxSolution);  
return maxSolution;
}
document.getElementById("tasks1").innerHTML= "Inputing number has "+solution(N)+ " zeros";
