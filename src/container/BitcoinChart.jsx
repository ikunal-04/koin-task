import { useEffect, useState } from 'react';
import axios from 'axios';
import bitcoin from '../assets/bitcoin.svg';
import { ShowGain } from '../components/ShowGain';
import bitcoinChart from '../assets/bitcoinChart.svg';
// import TradingViewWidget  from './TradingView';

export function BitcoinChart() {
    const [usdPrice, setUsdPrice] = useState("");
    const [usdChange, setUsdChange] = useState("");
    const [inrPrice, setInrPrice] = useState("");

    const config = {
        headers: {'x-cg-demo-api-key': 'CG-c34qzP9We31r2mkrXcN3n7xQ'}
    }

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/simple/price', {
            params: {
                ids: 'bitcoin',
                vs_currencies: 'usd',
                include_24hr_change: 'true',
            },
            config
        }).then((res) => {
            setUsdPrice(res.data.bitcoin.usd);
            const value = res.data.bitcoin.usd_24h_change;
            const ans = parseFloat(value.toFixed(2));
            setUsdChange(ans);
        })      

        axios.get('https://api.coingecko.com/api/v3/simple/price', {
            params: {
                ids: 'bitcoin',
                vs_currencies: 'inr',
            },
            config
        }).then((res) => {
            setInrPrice(res.data.bitcoin.inr);
        })
    }, [])



    return (
        <div>
            <div className='pt-4 pr-6 pl-2 pb-4 sm:hidden flex gap-7'>
                <img src={bitcoin} alt="bitcoin logo" />
                <div  className='bg-[#768396] border w-20 flex justify-center sm:w-auto border-[#808A9D] rounded-lg text-white'>
                    <button className='p-1 sm:p-2'>Rank #1</button>
                </div>    
            </div>
            <div className="bg-white pt-4 pr-6 pl-6 pb-9 sm:pt-6 sm:pb-8 rounded-lg h-max sm:pr-8">
            <div className='hidden sm:inline-flex gap-10'>
                <img src={bitcoin} alt="bitcoin logo" />
                <div  className='bg-[#768396] border w-20 flex justify-center sm:w-auto border-[#808A9D] rounded-lg text-white'>
                    <button className='p-1 sm:p-2'>Rank #1</button>
                </div>    
            </div>

            <div className='flex flex-start h-[66px] mt-6 gap-8 sm:mt-10'>
                <div className='text-[#0B1426]'>
                    <h1 className='font-semibold text-lg mb-1'>${usdPrice}</h1>
                    <p className=' text-base font-medium'>~ {inrPrice}</p>
                </div>
                <div className='flex justify-center gap-4 sm:gap-3'>
                    <div>
                        <ShowGain gain={usdChange}/>
                    </div>
                    <div className='pt-2 font-medium text-sm text-[#768396]'>
                        (24H)
                    </div>
                </div>
            </div>

            <div className='border border-[#DEE1E6] mt-6 mb-6'></div>

            <div className='sm:flex sm:justify-between mb-4 sm:mb-10'>
                <div className='font-semibold text-base text-[#0B1426] mb-2 sm:mb-0'>
                    Bitcoin Price Chart (USD)
                </div>
                <div className='flex font-medium text-sm text-[#5D667B] sm:justify-end gap-4'>
                    <p>1H</p>
                    <p>24H</p>
                    <p>7D</p>
                    <p>1M</p>
                    <p>3M</p>
                    <p>6M</p>
                    <p>1Y</p>
                    <p>ALL</p>
                </div>
            </div>

            <div className=''>
                <img src={bitcoinChart} alt="bitcoin Chart" />
            </div>
            
        </div>
        </div>
        
    )
}