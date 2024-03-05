
export function PerformanceSectionbar({title, price}) {
    return (
        <div className="flex justify-between items-center border-b-[2px] p-3 h-[54px]">
            <div className="font-medium text-sm text-[#768396]">
                <p>{title}</p>
            </div>
            <div className="font-medium text-sm text-[#111827]">
                <p>{price}</p>
            </div>
        </div>
    )
}