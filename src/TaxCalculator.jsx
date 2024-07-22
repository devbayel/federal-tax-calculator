import React, { useState, useEffect } from 'react';
import CalculateMedicareTax from './CalculateMedicareTax';
import CalculateSocialSecurityTax from './CalculateSocialSecurityTax';
import CalculateFederalTax from './CalculateFederalTax';
import CalculateStateTax from './CalculateStateTax';

const TaxCalculator = () => {
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('single');
  const [state, setState] = useState('');

  const [stateTax, setStateTax] = useState(null);
  const [federalTax, setFederalTax] = useState(null);
  const [medicare, setMedicare] = useState(null);
  const [socialSecurity, setSocialSecurity] = useState(null);
  const [total, setTotal] = useState(null);

  const handleCalculate = () => {
    const amountNumber = parseFloat(amount); // Convert amount to a number
    const stateTax = CalculateStateTax(amountNumber, status, state);
    const federalTax = CalculateFederalTax(amountNumber, status);
    const socialSecurity = CalculateSocialSecurityTax(amountNumber, status);
    const medicare = CalculateMedicareTax(amountNumber, status);

    const totalTax = stateTax + federalTax + socialSecurity + medicare;
    setStateTax(stateTax);
    setFederalTax(federalTax);
    setMedicare(medicare);
    setSocialSecurity(socialSecurity);
    setTotal(totalTax);
  };

  return (
    <div>
      <h2>Tax Calculator</h2>
      <div>
        <label>
          Amount:
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </label>
      </div>
      <div>
        <label>
          State:
          <select value={state} onChange={(e) => setState(e.target.value)}>
            <option value='CA'>California</option>
            <option value='TX'>Texas</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </label>
      </div>

      <button onClick={handleCalculate}>Calculate</button>
      {total !== null && (
        <div>
          <h4>State Tax: ${stateTax.toFixed(2)}</h4>
          <h4>Federal Tax: ${federalTax.toFixed(2)}</h4>
          <h4>Medicare: ${medicare.toFixed(2)}</h4>
          <h4>Social Security: ${socialSecurity.toFixed(2)}</h4>
          <hr/>
          <h3>Total Tax: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default TaxCalculator;