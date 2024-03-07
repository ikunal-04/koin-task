import { Info } from 'lucide-react';
import { PerformanceSectionbar } from '../components/PerfomanceSectionbar';
import bar from "../assets/bar.svg";
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';

export function Performance() {
    return (
        <div className="bg-white px-4 py-4 h-max sm:p-6 sm:h-max rounded-lg gap-4 sm:gap-6 mt-5">
            <Heading title={"Performance"}/>
            <div className='mt-6 mb-6'>
                <div className="flex items-center justify-between mb-4 h-[71px]">
                    <div className=" text-[#44475B] sm:pr-3 whitespace-nowrap">
                        <p className="font-normal text-sm mb-2">Today's Low</p>
                        <p className="font-medium text-sm sm:text-base">46,930.22</p>
                    </div>
                    <div className='px-2 py-5 w-[176px] sm:w-auto'>
                        <img src={bar} alt="price bar" className='h-[30px] sm:h-auto'/>
                    </div>
                    <div className="flex flex-col flex-end text-[#44475B] sm:pl-3 whitespace-nowrap ">
                        <p className="font-normal text-sm mb-2">Today's High</p>
                        <p className="font-medium text-sm sm:text-base pl-3 sm:pl-0">49,343.83</p>
                    </div>
                </div>
                <div className="flex items-center justify-between h-[71px]">
                    <div className="text-[#44475B] sm:pr-3 whitespace-nowrap">
                        <p className="font-normal text-sm mb-2">52W Low</p>
                        <p className="font-medium text-sm sm:text-base">16,930.22</p>
                    </div>
                    <div className='px-2 py-5 w-[176px] sm:w-auto'>
                        <img src={bar} alt="price bar" className='h-[30px] sm:h-auto'/>
                    </div>
                    <div className="flex flex-col flex-end text-[#44475B]  sm:pr-3 whitespace-nowrap ">
                        <p className="font-normal text-sm mb-2">52W High</p>
                        <p className="font-medium text-sm sm:text-base">49,743.83</p>
                    </div>
                </div>
            </div>

            <div className="pb-1 sm:pb-0">
                <SubHeading title={"Fundamentals"}/>
                <div className='grid sm:grid-cols-2 sm:gap-12 sm:mb-6'>
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