import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const base_url =
  "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

const Currency = () => {
  const history = useHistory();
  const currencyConverter = () => {
    history.push("/converter");
  };

  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    fetch(base_url)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyData(data);
      });
  }, []);

  const arr = [];
  currencyData.map(({ ccy }) => arr.push(ccy));

  const defaultData = currencyData.filter(
    (item) => item.ccy === currencyData[0]?.ccy
  );
  console.log(defaultData);

  return (
    <>
      <ul className="list">
        {defaultData?.map(({ ccy, base_ccy, sale, buy }) => (
          <li className="li" key={ccy}>
            <p className="cur">
              {ccy} - {base_ccy}
            </p>
            <p className="p">sale: {Number(sale).toFixed(2)}</p>
            <p className="p">buy: {Number(buy).toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <button className="button-primary" onClick={() => currencyConverter()}>
        Money exchange
      </button>
    </>
  );
};

export default Currency;
