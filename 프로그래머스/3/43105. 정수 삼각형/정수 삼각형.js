
2
3
4
5
6
7
8
9
10
11
12
function solution(triangle) {
    const dp = triangle.slice();

    for(let i = dp.length-2; i>=0; i--){
        for(let j =0; j <dp[i].length; j++){
            dp[i][j] = dp[i][j] + Math.max(dp[i+1][j], dp[i+1][j+1])
        }
    }

    return dp[0][0]
}

