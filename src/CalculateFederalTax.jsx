function CalculateFederalTax(amount, status) {
    
    //2024-2025 April Federal Single Individual Rates
    const SingleRates = [
        { id: 1, percentage: 10, from: 0, to: 11600 },
        { id: 2, percentage: 12, from: 11600, to: 47150 },
        { id: 3, percentage: 22, from: 47150, to: 100525 },
        { id: 4, percentage: 24, from: 100525, to: 191950 },
        { id: 5, percentage: 32, from: 191950, to: 243725 },
        { id: 6, percentage: 35, from: 243725, to: 609350 },
        { id: 7, percentage: 37, from: 609350, to: 999999999 }
    ];

    //2024-2025 April Federal Married Individual Rates
    const MarriedRates = [
        { id: 1, percentage: 10, from: 0, to: 23200 },
        { id: 2, percentage: 12, from: 23200, to: 94300 },
        { id: 3, percentage: 22, from: 94300, to: 201050 },
        { id: 4, percentage: 24, from: 201050, to: 383900 },
        { id: 5, percentage: 32, from: 383900, to: 487450 },
        { id: 6, percentage: 35, from: 487450, to: 731200 },
        { id: 7, percentage: 37, from: 731200, to: 999999999 }
    ];

    const rates = status === 'single' ? SingleRates : MarriedRates
    let result = 0;

    // Loop through the tax brackets and calculate the tax
    for (let i = 0; i < rates.length; i++) {
        const rate = rates[i];
        
        //loop until user input amount will be less than to 
        if (amount > rate.from) {
            // Calculate taxable income within the current bracket
            const taxableIncome = Math.min(amount, rate.to) - rate.from; // 
            result += taxableIncome * (rate.percentage / 100);
        } else {
            // Break out of the loop if the amount is below the current bracket
            break;
        }
    }
    return result;
}

export default CalculateFederalTax;