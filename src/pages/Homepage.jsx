import { BitcoinChart } from "../container/BitcoinChart";
import { GetStarted } from "../container/GetStarted";
import {TrendingCoins} from "../container/TrendingCoins";
import {Overview} from "../container/Overview";
import {Performance} from "../container/Performance"
import {Sentiment} from "../container/Sentiment";
import { About } from "../container/About";
import { Tokenomics } from "../container/Tokenomics";
import { Team } from "../container/Team";

function Homepage() {
    return (
        <div className="gap-9 sm:flex sm:gap-5">
            <div className="ml-[14px] mr-[14px] sm:mr-0 sm:ml-16 sm:flex-grow">
                <BitcoinChart />
                <Overview />
                <Performance />
                <Sentiment />
                <About />
                <Tokenomics />
                <Team />
            </div>
            <div className="sm:ml-0 sm:mr-[56px]">
                <div className='ml-[14px] mr-[14px] mb-6 sm:mb-5'>
                    <GetStarted />
                </div>
                <div className="sm:ml-[14px] sm:mr-[14px]">
                    <TrendingCoins />
                </div> 
            </div>
        </div>
    )
}

export default Homepage;