let salary=[100,200,300,400,500];
let salary2=[600,700,800,900,1000]
function calculatetenpercent(num){
    return num*0.1;
}
function calculatetwopercent(num){
    return num*0.2;
}
Array.prototype.calculateTax=function(calculateFn){
    let res=[];
    for(let i=0;i<this.length;i++){
        res.push(calculateFn(this[i]));
    }
    return res;

}
let finaloutput=calculateTax(salary2,calculatetwopercent);
console.log(finaloutput);


