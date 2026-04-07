function solution(players, m, k) {
    let totalAddedServers = 0;

    const addedAt = Array(24).fill(0);

    for (let i = 0; i < 24; i++) {
  
        let currentActiveServers = 0;
        for (let j = Math.max(0, i - k + 1); j < i; j++) {
            currentActiveServers += addedAt[j];
        }

        const requiredServers = Math.floor(players[i] / m);

 
        if (requiredServers > currentActiveServers) {
            const needToBuild = requiredServers - currentActiveServers;
            addedAt[i] = needToBuild; 
            totalAddedServers += needToBuild;
        }
    }

    return totalAddedServers;
}