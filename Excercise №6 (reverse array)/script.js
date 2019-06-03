let nums = [1,5,3,89,74];
// console.log(nums.reverse());

function reverse_arr(arr) {
    let new_arr=[];
    for(let i =0; i<arr.length;i++){
        new_arr.unshift(arr[i]);
    }
    return new_arr;
}

// console.log(reverse_arr(nums));

function reverse_array(arr) {
    let new_arr=[];
    for (let i=arr.length-1; i>=0; i--){
        new_arr.push(arr[i]);
    }
    return new_arr;
}

console.log(reverse_array(nums));