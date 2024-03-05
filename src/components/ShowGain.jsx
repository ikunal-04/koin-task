import gainlogo from '../assets/gainLogo.svg'

export function ShowGain({ gain }) {
    return (
        <div className="flex bg-[#EBF9F4] p-2 gap-2 rounded">
            <div className='flex flex-col justify-center'>
                <img src={gainlogo} alt="gainLogo" />
            </div>
            <div className="font-medium text-base text-[#14B079]">
                {gain}%
            </div>
        </div>
    )
}