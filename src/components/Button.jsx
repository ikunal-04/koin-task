import { ArrowRight } from 'lucide-react';

export function Button({title}) {
    return (
        <div className='flex items-center gap-2 text-[#0F1629] font-semibold text-base bg-white rounded-lg pt-2 pb-2 pr-6 pl-6 h-12'>
            <button>{title}</button>
            <ArrowRight size={20} />
        </div>
    )
}