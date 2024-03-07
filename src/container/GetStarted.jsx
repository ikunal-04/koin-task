import GetStartedLogo from '../assets/Getstarted.svg'
import { ArrowRight } from 'lucide-react';
import {Button} from "../components/Button";

export function GetStarted() {
    return (
        <div className="flex justify-center h-max w-[426px] ml-[14px] mr-[14px] sm:mr-0 sm:ml-0 pt-6 mt-7 sm:mt-0 sm:pt-8 pb-10 px-12 rounded-2xl sm:rounded-lg gap-5 bg-[#0052FE]">
                <div className="flex flex-col text-white gap-[14px]">
                    <div className="hidden sm:flex flex-col text-white gap-[14px]">
                    <div className="font-bold">
                        <p className='flex justify-center text-xl'>Get Started with KoinX</p>
                        <p className='flex justify-center text-xl'>for FREE</p>
                    </div>
                    <div className='flex justify-center text-sm font-medium text-[#F2F2F2] mb-5'>
                        <p>With our range of features that you can equip for <span className='flex justify-center'> free, KoinX allows you to be more educated and</span> <span className='flex justify-center'> aware of your tax reports.</span></p>
                    </div>
                    </div>
                    
                    <div className='flex justify-center sm:mt-5 '>
                        <img src={GetStartedLogo} alt="Get Started"/>
                    </div>
                    
                    <div className="flex sm:hidden flex-col text-white gap-[14px]">
                        <div className="font-bold">
                            <p className='flex justify-center text-[22px]/[40px] whitespace-nowrap'>Get Started with KoinX for FREE</p>
                            {/* <p className='flex justify-center text-xl'></p> */}
                        </div>
                        <div className='flex justify-center text-sm font-medium text-[#F2F2F2] mb-1'>
                            <p>With our range of features that you can equip for <span className='flex justify-center'> free, KoinX allows you to be more educated and</span> <span className='flex justify-center'> aware of your tax reports.</span></p>
                        </div>
                    </div>

                    <div className='flex justify-center mt-2'>
                        <Button title={"Get Stared for FREE"}/>
                    </div>
                </div>
        </div>
    )
}