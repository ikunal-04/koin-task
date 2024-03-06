
export function SentimentAnalysis({title, price, color, width}) {
    return (
        <div className="flex items-center p-3 h-[54px] w-[553px]">
            <div className="font-medium text-sm text-[#768396] pr-7">
                <p>{title}</p>
            </div>
            <div className="flex flex-start">
                <div className={`${color} h-2 rounded-sm ${width}`}></div>
            </div>
            <div className="font-medium text-sm text-[#768396] pl-[10px]">
                <p>{price}</p>
            </div>
        </div>
    )
}