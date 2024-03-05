import { BitcoinChart } from "../components/BitcoinChart";
import { GetStarted } from "../components/GetStarted";
import {TrendingCoins} from "../components/TrendingCoins";
import {Overview} from "../components/Overview";
import {Performance} from "../components/Performance"
import {Sentiment} from "../components/Sentiment";

function Homepage() {
    return (
        <div className="flex gap-5">
            <div className="ml-16 flex-grow">
                <BitcoinChart />
                <Overview />
                <Performance />
                <Sentiment />
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