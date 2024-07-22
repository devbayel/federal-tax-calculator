function CalculateMedicareTax(amount, status){
    const SingleMedicareRates = [
        {id: 1, percentage: 1.45, from: 0, to: 200000},
        {id: 2, percentage: 2.35, from: 200000, to: Infinity}
    ];

    const MarriedMedicareRates = [
        {id: 1, percentage: 1.45, from: 0, to: 250000},
        {id: 2, percentage: 2.35, from: 250000, to: Infinity}
    ];

    const rates = status === 'single' ? SingleMedicareRates : MarriedMedicareRates;

    let result = 0;

    for(let i = 0; i < rates.length ; i++){
        const rate = rates[i];

        if (amount > rate.from){
            const taxableIncome = Math.min(amount, rate.to) - rate.from;
            result += taxableIncome * (rate.percentage/100);
        } else {
            break;
        }
    }
    return result;

}

export default CalculateMedicareTax;

