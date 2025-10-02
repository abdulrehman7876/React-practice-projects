import { useEffect, useState } from 'react'
import countryList from './Components/countryList'
import Input from './Components/Input'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [countries, setCountries] = useState([])
  const [amountfrom, setAmountfrom] = useState(0)
  const [amountto, setAmountto] = useState(0)
  const [selectcountryfrom, setSelectCountryfrom] = useState("USD")
  const [selectcountryto, setSelectCountryto] = useState("PKR")

  const data = useCurrencyInfo(selectcountryfrom);
  
  useEffect(()=>{
  for (let country in countryList) {
    setCountries((prev)=>[...prev,country])
  }
  },[])

  const onAmountChangefrom = (evt)=>{
    if (evt.target.value < 0) return;  
    setAmountfrom(Number(evt.target.value))
  }
  const onAmountChangeto = (evt)=>{
    setAmountto(Number(evt.target.value))
  }

  const onCurrencyChangefrom = (val)=>{
    setSelectCountryfrom(val)
  }
  const onCurrencyChangeto = (val)=>{
    setSelectCountryto(val)
  }
  const swap = ()=>{
    setSelectCountryfrom(selectcountryto)
    setSelectCountryto(selectcountryfrom)
    setAmountfrom(amountto)
    setAmountto(amountfrom)
  }
  const convert = ()=>{
    setAmountto(amountfrom * data[selectcountryto.toLowerCase()])
  }


  return (
    <>
    <form action="" onSubmit={(evt)=>{
      evt.preventDefault();
    }}>
      <div className='main'>
        <div className='from'>
          <Input 
            selectcountry={selectcountryfrom} 
            onCurrencyChange={onCurrencyChangefrom} 
            amount={amountfrom} 
            countryList={countryList} 
            label="From" 
            countries={countries} 
            onAmountChange={onAmountChangefrom} 
          />
        </div>
        <button className='swap' onClick={swap}>Swap</button>
        <div className='from'>
          <Input 
            selectcountry={selectcountryto} 
            onCurrencyChange={onCurrencyChangeto} 
            amount={amountto} 
            countryList={countryList} 
            label="To" 
            countries={countries} 
            onAmountChange={onAmountChangeto} 
            isDisabled
          />
        </div>
        <button className='convert' onClick={convert}>Convert {amountfrom} {selectcountryfrom} to {selectcountryto}</button>
      </div>
    </form>
    </>
  )
}

export default App
