function juntandoArray(nums1, m, nums2, n) {
    let a = m - 1; 
    let b = n - 1; 
    let c = m + n - 1; 

    while (a >= 0 && b >= 0) {
        if (nums1[a] > nums2[b]) {
            nums1[c--] = nums1[a--];
        } else {
            nums1[c--] = nums2[b--];
        }
    }

    while (b >= 0) {
        nums1[c--] = nums2[b--];
    }
}

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
juntandoArray(nums1, m, nums2, n);
console.log(nums1); 

