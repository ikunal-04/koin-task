
export function TeamComp({name, description, img}){
    return (
        <div className="sm:flex items-center mb-4 border border-[#0082FF] bg-[#E8F4FD] sm:gap-4 p-3 rounded-lg h-max sm:mb-6">
            <div className="flex flex-col gap-2 items-center h-max w-max px-4 mb-4 ml-32 sm:ml-0 sm:mb-0">
                <div>
                <img className="rounded" src={img} alt="image" />
                </div>
                <div>
                <p className="font-semibold text-[15px]/[19px] text-[#0F1629]">{name}</p>
                </div>
                <div>
                <p className="font-medium text-[12px]/[14.92px] text-[#788F9B]">Designation here</p>
                </div>  
            </div>
            <div className="w-[340px] sm:w-[646px] ml-7 sm:ml-0">
                <p className="font-normal text-sm/[22.4px] text-[#0F1629]">{description}</p>
            </div>
        </div>
    )
}