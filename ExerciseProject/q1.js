
functiondivisibleSumpairs(arr, k){​​​​​​​​
letcount=0;
 
for(leti=0;i<arr.length;i++){​​​​​​​​
for(letj=1;j<arr.length;j++){​​​​​​​​
if(arr[i]<arr[j]){​​​​​​​​
if((arr[i]+arr[j])%k===0){​​​​​​​​
count=count+1;
                }​​​​​​​​
            }​​​​​​​​
        }​​​​​​​​
    }​​​​​​​​
returncount;
}​​​​​​​​
letarr11=[1,2,3,4,5,6];
letone=5;
 
console.log(divisibleSumpairs(arr11, one));


