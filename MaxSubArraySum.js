function bestArrayFixedK(arr, k) {
    let total_sum = 0;
    let best = 0;

    for (let i = 0; i < arr.length; i++) {
        total_sum = total_sum + arr[i];
        if (i >= k) total_sum = total_sum - arr[i - k];
        if (i >= k - 1) best = Math.max(best, total_sum);
    }

    return best;
}

function maxSubArraySum(arr, k) {
    best = 0;

    for (let i = 1; i < k + 1; i++) {
        best = Math.max(best, bestArrayFixedK(arr, k));
    }

    return best;
}

module.exports = maxSubArraySum;