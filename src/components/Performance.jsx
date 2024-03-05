import { Info } from 'lucide-react';
import { PerformanceSectionbar } from './PerfomanceSectionbar';
import bar from "../assets/bar.svg";
import { Heading } from './Heading';
import { SubHeading } from './SubHeading';

export function Performance() {
    return (
        <div className="bg-white p-6 h-[632px] rounded-lg gap-6 mt-5">
            <Heading title={"Performance"}/>
            <div className='mt-6 mb-6'>
                <div className="flex items-center justify-between mb-4 h-[71px]">
                    <div className=" text-[#44475B] pr-3">
                        <p className="font-normal text-sm mb-2">Today's Low</p>
                        <p className="font-medium text-base">46,930.22</p>
                    </div>
                    <div>
                        <img src={bar} alt="price bar" />
                    </div>
                    <div className="text-[#44475B] pl-3">
                        <p className="font-normal text-sm mb-2">Today's High</p>
                        <p className="font-medium text-base">49,343.83</p>
                    </div>
                </div>
                <div className="flex items-center justify-between h-[71px]">
                    <div className="text-[#44475B] pr-3">
                        <p className="font-normal text-sm mb-2">52W Low</p>
                        <p className="font-medium text-base">16,930.22</p>
                    </div>
                    <div>
                        <img src={bar} alt="price bar" />
                    </div>
                    <div className="text-[#44475B] pl-1">
                        <p className="font-normal text-sm mb-2">52W High</p>
                        <p className="font-medium text-base">49,743.83</p>
                    </div>
                </div>
            </div>

            <div>
                <SubHeading title={"Fundamentals"}/>
                <div className='grid grid-cols-2 gap-12'>
                    <div>
                        <PerformanceSectionbar title={"Bitcoin Price"} price={"$16,815.46"}/>
                        <PerformanceSectionbar title={"24h Low/ 24h High"} price={"$16,328.07 / $16,874.12"}/>
                        <PerformanceSectionbar title={"7d Low/ 7d High"} price={"$16,382.07 / $16,874.12"}/>
                        <PerformanceSectionbar title={"Trading Volume"} price={"$23,249,202,782"}/>
                        <PerformanceSectionbar title={"Market Cap Rank"} price={"#1"}/>
                    </div>
                    <div>
                        <PerformanceSectionbar title={"Market Cap"} price={"$323,507,290,047"}/>
                        <PerformanceSectionbar title={"Market Cap Dominance"} price={"38.343%"}/>
                        <PerformanceSectionbar title={"Volume / Market Cap"} price={"0.0718"}/>
                        <PerformanceSectionbar title={"All-Time High"} price={"$69,044.77"}/>
                        <PerformanceSectionbar title={"All-Time Low"} price={"$67.81"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}