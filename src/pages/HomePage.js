import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const base_url =
  "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

const HomePage = () => {
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

        console.log(data);
      });
  }, []);

  const arr = [];
  const arrBase = [];
  currencyData.map(({ ccy }) => arr.push(ccy));
  currencyData.map(({ base_ccy }) => arrBase.push(base_ccy));

  return (
    <div className="div">
      <ul className="list">
        {currencyData?.map(({ ccy, base_ccy, sale, buy }) => (
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
    </div>
  );
};

export default HomePage;
