import { ChevronsRight } from 'lucide-react';

function Link() {
    return (
        <div className="flex text-[#3E5765] ml-12 mb-5 font-['Inter'] text-sm h-4 p-4 gap-1">
            <div className='flex font-normal gap-1'>
                <p>Cryptocurrencies</p>
                <ChevronsRight size={20} strokeWidth={1.25} color="#3E5765"/>
            </div>
            <div className='font-medium text-[#0F1629]'>
                <p>Bitcoin</p>
            </div>
        </div>
    )
}

export default Link;