"use strict";
function computeCharges(arr) {
    let result=[];
    for(let i=0; i<arr.length;i++){
        let obj=arr[i];
        let max= getMax(obj.charges);
        let avg= getAvg(obj.charges);
        let cobj = {
            custId: obj.custId,
            average: avg,
            maximum: max
            
        }
         result[i]=cobj ;
    }
   return result;
}
function getMax(arr) {
    let max =arr[0];
    for(let i=0; i<arr.length;i++){
        if(arr[i]>max){
            max= arr[i];
        }
    }
    return max;
}

function getAvg(arr) {
    let sum =0;
    for(let i=0; i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
const cstmrCharge = [{custId: 1,charges:[5,7,3]}, {custId: 2, charges: [20,60,50,30]}]
console.log(computeCharges(cstmrCharge));
