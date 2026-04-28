function solution(fees, records) {
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    
    
    const getMinutes = (time) => {
        const [h, m] = time.split(':').map(Number);
        return h * 60 + m;
    };

    const parking = new Map(); // 현재 주차 중인 차량
    const totalTimes = new Map(); // 차량별 누적 주차 시간 

    records.forEach(record => {
        const [time, carNum, status] = record.split(' ');
        const min = getMinutes(time);

        if (status === 'IN') {
            parking.set(carNum, min);
        } else {
            const inTime = parking.get(carNum);
            const duration = min - inTime;
            totalTimes.set(carNum, (totalTimes.get(carNum) || 0) + duration);
            parking.delete(carNum); // 출차 처리
        }
    });

    const MAX_TIME = getMinutes('23:59');
    for (const [carNum, inTime] of parking) {
        const duration = MAX_TIME - inTime;
        totalTimes.set(carNum, (totalTimes.get(carNum) || 0) + duration);
    }


    const result = [...totalTimes.entries()]
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([carNum, totalTime]) => {
            if (totalTime <= baseTime) return baseFee; // 기본 시간 이내
            
            const extraTime = totalTime - baseTime;
            const fee = baseFee + Math.ceil(extraTime / unitTime) * unitFee;
            return fee;
        });

    return result;
}