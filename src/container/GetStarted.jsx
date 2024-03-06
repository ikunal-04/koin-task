import GetStartedLogo from '../assets/Getstarted.svg'
import { ArrowRight } from 'lucide-react';
import {Button} from "../components/Button";

export function GetStarted() {
    return (
        <div className="flex justify-center h-[515px] w-[426px] pt-8 pb-8 pl-12 pr-12 rounded-lg gap-5 bg-[#0052FE]">
                <div className="flex flex-col text-white gap-[14px]">
                    <div className="font-bold">
                        <p className='flex justify-center text-xl'>Get Started with KoinX</p>
                        <p className='flex justify-center text-xl'>for FREE</p>
                    </div>
                    <div className='flex justify-center text-sm font-medium text-[#F2F2F2] mb-5'>
                        <p>With our range of features that you can equip for <span className='flex justify-center'> free, KoinX allows you to be more educated and</span> <span className='flex justify-center'> aware of your tax reports.</span></p>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <img src={GetStartedLogo} alt="Get Started" />
                    </div>
                    <div className='flex justify-center mt-5'>
                        <Button title={"Get Stared for FREE"}/>
                    </div>
                </div>
        </div>
    )
}