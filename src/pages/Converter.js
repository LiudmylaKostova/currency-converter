import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";

const base_url =
  "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

export default function ConverterRow() {
  const [currencyData, setCurrencyData] = useState([]);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  useEffect(() => {
    fetch(base_url)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyData(data);
      });
  }, []);

  const arr = [];
  const arrBase = [];
  currencyData.map(({ ccy }) => arr.push(ccy));
  currencyData.map(({ base_ccy }) => arrBase.push(base_ccy));

  const exchangeRateBuy = currencyData[0]?.buy;
  const exchangeRateSale = currencyData[0]?.sale;
  console.log(exchangeRateBuy);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = (amount * exchangeRateBuy).toFixed(2);
    console.log(toAmount);
  } else {
    toAmount = amount;
    fromAmount = (amount / exchangeRateSale).toFixed(2);
    console.log(fromAmount);
  }

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }
  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <>
      <h1 className="title">Конвертер валют </h1>
      <div className="wrapper">
        <input
          className="input"
          type="number"
          value={fromAmount}
          onChange={handleFromAmountChange}
        />
        <select>
          {arr.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>
      <div className="equal">=</div>
      <div className="wrapper">
        <input
          className="input"
          type="number"
          value={toAmount}
          onChange={handleToAmountChange}
        />
        <select>
          {arrBase.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>
    </>
  );
}
