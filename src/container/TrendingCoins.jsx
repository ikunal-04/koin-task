import { useState, useEffect } from 'react';
import {ShowGain} from '../components/ShowGain';
import axios from 'axios';

export function TrendingCoins() {
    const [coins, setCoins] = useState([]);

    const config = {
        headers: {'x-cg-demo-api-key': 'CG-c34qzP9We31r2mkrXcN3n7xQ'}
    }

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/search/trending', config).then((res) => {
            const TrendingCoins = res.data.coins.slice(0, 3);
            setCoins(TrendingCoins);
            console.log(TrendingCoins)
        })
    }, [])
    
    return (
        <div className='h-max sm:rounded-lg px-4 py-6 sm:p-6 gap-6 sm:w-[426px] bg-white'>
            <div className='font-semibold text-xl text-[#0F1629] mb-6'>
                <p>Trending Coins (24h)</p>
            </div>
            <div>
                {coins.map((coin, index) => {
                        return (<div key={index} className='flex justify-between mb-5'>
                            <div className='flex gap-[6px] items-center'>
                                <img className='h-6 w-6 rounded-full' src={coin.item.thumb} alt="coin logo" />
                                <h1 className=''>{coin.item.name}</h1>
                            </div>
                            <div>
                                <ShowGain gain={parseFloat(coin.item.data.price_change_percentage_24h.usd.toFixed(2))}/>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    )
}