import { Heading } from "../components/Heading";
import {useState, useEffect} from 'react';
import axios from 'axios';
import {ShowGain} from '../components/ShowGain'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Footer() {
    const [coins, setCoins] = useState([]);

    const config = {
        headers: {'x-cg-demo-api-key': 'CG-c34qzP9We31r2mkrXcN3n7xQ'}
    }

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/search/trending', config).then((res) => {
            const TrendingCoins = res.data.coins;
            setCoins(TrendingCoins);
            console.log(TrendingCoins)
        })
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <div className="bg-white h-max p-[70px] mt-[78px]">
            <div>
                <div className="gap-5">
                    <div>
                        <Heading title={"You May Also Like"}/>
                    </div>

                    <div className="mt-5">
                    <Slider {...settings}>
                        {coins.map((coin, index) => {
                            return (<div key={index} className='border p-[17px] rounded-[10px] w-[252px] border-[#E3E3E3E]'>
                                <div className='flex items-center mb-1'>
                                    <img className='h-6 w-6 rounded-full mr-1' src={coin.item.thumb} alt="coin logo" />
                                    <h1 className='mr-2'>{coin.item.name}</h1>
                                    <ShowGain gain={parseFloat(coin.item.data.price_change_percentage_24h.usd.toFixed(2))}/>
                                </div>
                                <div className="font-medium text-[20px]/[24px] text-[#171717] mb-1">
                                    <p>{coin.item.data.price}</p>
                                </div>
                                <div>
                                    <img className="h-[60px]" src={coin.item.data.sparkline} alt="graph" />
                                </div>
                            </div>)
                        })}
                        </Slider>
                    </div>
                </div>
                <div className="gap-5 mt-5 mb-[98px]">
                    <div>
                        <Heading title={"Trending"}/>
                    </div>

                    <div className="mt-5">
                    <Slider {...settings}>
                        {coins.map((coin, index) => {
                            return (<div key={index} className='border p-[17px] rounded-[10px] w-[252px] border-[#E3E3E3E]'>
                                <div className='flex items-center mb-1'>
                                    <img className='h-6 w-6 rounded-full mr-1' src={coin.item.thumb} alt="coin logo" />
                                    <h1 className='mr-2'>{coin.item.name}</h1>
                                    <ShowGain gain={parseFloat(coin.item.data.price_change_percentage_24h.usd.toFixed(2))}/>
                                </div>
                                <div className="font-medium text-[20px]/[24px] text-[#171717] mb-1">
                                    <p>{coin.item.data.price}</p>
                                </div>
                                <div>
                                    <img className="h-[60px]" src={coin.item.data.sparkline} alt="graph" />
                                </div>
                            </div>)
                        })}
                        </Slider>
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Footer;