function findMinDistance(arr){
    let valueExist=-1;
    let minDistance=Infinity;
    for(let i=0;i<arr.length;i++){
    let firstInd;
    let second;
    let distanc=0
    for(let j=i+1;j<arr.length;j++){
    if(arr[i]===arr[j]){
    firstInd=i;
    second=j
    }
    }
    distanc=Math.abs(firstInd-second)
    if(distanc<minDistance){
    minDistance=distanc;
    }
    }
    if(minDistance===Infinity){
    return -1;
    }
    return minDistance;
   }
   console.log(findMinDistance([3,2,1,2,3] ))
   console.log(findMinDistance([7,1,3,4,1,7]))
   console.log(findMinDistance([1,2,3,4]))