import { Info } from 'lucide-react';

export function SubHeading({title}) {
    return (
        <div className="flex font-semibold text-[18.91px]/[20px] sm:text-[20px] text-[#44475B] items-center gap-2 mb-1 sm:mb-4">
            <p>{title}</p>
            <Info size={20}/>
        </div>
    )
}