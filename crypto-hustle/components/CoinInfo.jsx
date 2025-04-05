import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
const API_KEY = import.meta.env.VITE_APP_API_KEY;


const CoinInfo = ({image, name, symbol}) => {
    const [price, setPrice] = useState(null);
    useEffect(() => {
        const getCoinPrice = async () => {
            const response = await fetch(
              `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&limit=5&api_key=` +
                API_KEY
            );
          
            const json = await response.json();
            setPrice(json);
            //console.log(json);
          };
        getCoinPrice().catch(console.error);

    }, [symbol]);
    return (
      <div>
        {price ? (
          <ul>
            <li key={symbol} className="main-list">
              <img 
                className="icons" 
                src={`https://www.cryptocompare.com${image}`} 
                alt={`Small icon for ${name} crypto coin`} 
              />
              <Link
                style={{ color: "White" }}
                to={`/coinDetails/${symbol}`}
                key={symbol}
              >
                {name} <span className="tab"></span> ${price.USD} USD
              </Link>
            </li>
          </ul>
        ) : 
          null
        } 
      </div>
    );
}

export default CoinInfo;