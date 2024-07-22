const CalculateStateTax = (amount, status, state) => {
    const CaliforniaMarriedStateTaxRates = [
        { id: 1, from: 0, to: 20824, percentage: 1, base: 0 },
        { id: 2, from: 20825, to: 49368, percentage: 2, base: 208.24 },
        { id: 3, from: 49369, to: 77918, percentage: 4, base: 779.12 },
        { id: 4, from: 77919, to: 108162, percentage: 6, base: 1921.12 },
        { id: 5, from: 108163, to: 136700, percentage: 8, base: 3735.76 },
        { id: 6, from: 136701, to: 698274, percentage: 9.3, base: 6018.80 },
        { id: 7, from: 698275, to: 837922, percentage: 10.3, base: 58245.18 },
        { id: 8, from: 837923, to: 1396542, percentage: 11.3, base: 72628.48 },
        { id: 9, from: 1396543, to: Infinity, percentage: 12.3, base: 135752.98 },
    ];

    const CaliforniaSingleStateTaxRates = [
        { id: 1, from: 0, to: 10412, percentage: 1, base: 0 },
        { id: 2, from: 10413, to: 24684, percentage: 2, base: 104.12 },
        { id: 3, from: 24685, to: 38959, percentage: 4, base: 389.56 },
        { id: 4, from: 38960, to: 54081, percentage: 6, base: 960.56 },
        { id: 5, from: 54082, to: 68350, percentage: 8, base: 1867.88 },
        { id: 6, from: 68351, to: 349137, percentage: 9.3, base: 3009.40 },
        { id: 7, from: 349138, to: 418961, percentage: 10.3, base: 29122.59 },
        { id: 8, from: 418962, to: 698271, percentage: 11.3, base: 36314.46 },
        { id: 9, from: 698272, to: Infinity, percentage: 12.3, base: 67876.49 },
    ];

    const stateTaxRates = {
        'CA': {
            single: CaliforniaSingleStateTaxRates,
            married: CaliforniaMarriedStateTaxRates
        },
        // Add other states and their tax rates here if needed
    };

    let result = 0;

    if (!stateTaxRates[state]) {
        console.log('No tax rates available for state:', state);
        return result; // No state tax for states not listed
    }

    const rates = stateTaxRates[state][status];
    console.log('Selected rates for', state, status, ':', rates);


    for (let i = 0; i < rates.length; i++) {
        const rate = rates[i];

        if (amount > rate.from) {
            const taxableIncome = Math.min(amount, rate.to) - rate.from;
            result += taxableIncome * (rate.percentage / 100) + rate.base;

            // If amount is within the current bracket, break the loop
            if (amount <= rate.to) {
                break;
            }
        }
    }

    console.log('Calculated state tax:', result);
    return result;
}

export default CalculateStateTax;