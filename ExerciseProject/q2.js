function mostFrequentSight(arr){
    let sorted=arr.sort((a,b)=>a-b)
    let mostFriquent=1;
    let result;
    for(let i=0;i<arr.length;i++){
    let count=0;
    for(let j=i+1;j<arr.length;j++){
    if(arr[i]===arr[j]){
    count++;
    }else{
    continue
    }
    }
    if(count>mostFriquent){
    mostFriquent=count;
    result=arr[i]
    }else if(count==mostFriquent){
    arr[i]>result;
    result=arr[i]
    }
    }
    return result
   }
    
   console.log(mostFrequentSight([1,1,2,2,2,3,3,3,3,3,3]))
   console.log(mostFrequentSight([1,4,4,4,5,3]))