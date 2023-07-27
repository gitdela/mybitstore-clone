import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CryptoTable = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 9,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCryptoData(response.data);
        console.log(cryptoData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    // Fetch data every 5 minutes (adjust the interval as needed)
    const intervalId = setInterval(fetchData, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='mt-48 bg-gray-50  py-16 sm:py-20 lg:py-20'>
      <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-5xl xl:max-w-6xl'>
        <h1 className='mt-2 text-center text-3xl  font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
          Todays Cryptocurrency Prices By Market Cap
        </h1>
        <h4 className='mt-5 mx-auto text-center max-w-prose text-xl  text-gray-500'>
          Current prices of various cryptocurrencies.
        </h4>
      </div>

      <div className='overflow-x-scroll sm:rounded-none'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider'>
                Price(USD)
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider'>
                Price Change
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider'>
                Percentage Change
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider'></th>
            </tr>
          </thead>
          <tbody className='hover:bg-gray-100 cursor-pointer'>
            {cryptoData.map((crypto) => (
              <tr key={crypto.id}>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-2 items-center  text-gray-900'>
                  <img src={crypto.image} width={32} height={32} />
                  <div className='px-2  whitespace-pre-wrap'>
                    <div className='flex flex-col'>
                      <span className='capitalize'>{crypto.name}</span>
                      <span className='uppercase font-light text-gray-500'>
                        {crypto.symbol}
                      </span>
                    </div>
                  </div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                  ${crypto.current_price}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                  <div
                    className={`${
                      crypto.price_change_24h < 0
                        ? 'text-red-500'
                        : 'text-green-500'
                    } font-semibold`}
                  >
                    ${crypto.price_change_24h.toFixed(3)}
                  </div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm  text-gray-500'>
                  <div
                    className={`${
                      crypto.price_change_percentage_24h < 0
                        ? 'text-red-500'
                        : 'text-green-500'
                    } font-bold`}
                  >
                    {crypto.price_change_percentage_24h}%
                  </div>
                </td>
                <td className='px-6 py-4 items-center justify-end whitespace-nowrap text-sm  text-gray-500 flex'>
                  <div className='flex gap-3 items-right'>
                    <a
                      href='#'
                      className='bg-indigo-500 flex justify-between disabled:bg-gray-400 text-white hover:text-white font-bold py-2 px-4 rounded'
                    >
                      Trade
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;
