
export function SubHeadingWithoutSymbol({title, description}) {
    return (
        <div className="mb-4">
            <div className="font-bold text-[18px] text-[#0B1426] mb-[10px]">
                <p>{title}</p>
            </div>
            <div className="font-medium  text-[#3E424A]">
                <p className="text-base/[25.6px]">{description}</p>
            </div>
        </div>
    )
}