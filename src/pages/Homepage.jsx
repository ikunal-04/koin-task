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
        <div className="flex gap-5">
            <div className="ml-16 flex-grow">
                <BitcoinChart />
                <Overview />
                <Performance />
                <Sentiment />
                <About />
                <Tokenomics />
                <Team />
            </div>
            <div className="mr-[56px]">
                <div className='mb-5'>
                    <GetStarted />
                </div>
                <div>
                    <TrendingCoins />
                </div> 
            </div>
        </div>
    )
}

export default Homepage;