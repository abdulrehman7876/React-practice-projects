import { useId } from "react"

function Input(
  {
    countryList, 
    label,countries, 
    amount, onAmountChange, 
    selectcountry, 
    onCurrencyChange, 
    isDisabled
  }) {  
  const amountId = useId();
  return (
      <div className="container">
        <div className="label">
          <label htmlFor={amountId} >{label}</label>
          <input 
            id={amountId}
            type="number" 
            placeholder="0" 
            value={amount} 
            onChange={(evt)=> onAmountChange(evt)} 
            disabled={isDisabled}
          />
        </div>
        <div className="label-select">
          <label>Currency Type</label>
          <div className="select">
            <img
              className="flag" 
              key={countryList[selectcountry]} 
              src={`https://flagsapi.com/${countryList[selectcountry]}/flat/64.png`} 
              alt={selectcountry} 
            />
            <select 
              name={label} 
              value={selectcountry} 
              onChange={(evt) => onCurrencyChange && onCurrencyChange(evt.target.value)}
            >
            {
              countries.map((coun, ind)=><option key={ind+coun} value={coun}>{coun}</option>)
            }
            </select>
          </div>
        </div>
      </div>
  )
}

export default Input
