const CalculateSocialSecurityTax = (amount) => {

    const maxAmount = 168600;
    const maxTaxPay = 10453.20;
    const rate = 6.2;

    let SocialSecurityTaxPayment = 0;

    if(amount <= maxAmount ){
        SocialSecurityTaxPayment = amount * (rate/100)
    } else if (amount > maxAmount){
        SocialSecurityTaxPayment = maxTaxPay;
    }
    
    return SocialSecurityTaxPayment;

}

export default CalculateSocialSecurityTax;