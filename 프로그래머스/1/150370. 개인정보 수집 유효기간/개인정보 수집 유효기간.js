function solution(today, terms, privacies) {
    function dateToDays(dateStr) {
        const [year, month, day] = dateStr.split('.').map(Number);
        return (year * 12 * 28) + (month * 28) + day;
    }

    const todayDays = dateToDays(today);
    const termsMap = {};

    terms.forEach(term => {
        const [type, month] = term.split(' ');
        termsMap[type] = Number(month); 
    });

    const answer = [];

    privacies.forEach((privacy, index) => {
        const [dateStr, type] = privacy.split(' ');
        
        const collectedDays = dateToDays(dateStr); 
        const expireDays = collectedDays + (termsMap[type] * 28); 
        if (todayDays >= expireDays) {
            answer.push(index + 1); 
        }
    });

    return answer; 
}