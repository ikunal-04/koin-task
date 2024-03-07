
export function SentimentCard({imgSrc, heading, content, bgprimary}) {
    return (
        <div className={`h-max ${bgprimary} border border-[#E8F4FD] rounded-xl p-3 pb-6 sm:p-[18px] sm:pb-8 max-w-md`}>
            <div className="flex gap-2">
                <div className="">
                    <img className="h-11 w-11" src={imgSrc} alt="logo" />
                </div>
                <div className="text-sm flex flex-col flex-start w-full gap-2">
                    <div className="font-medium text-[#191C1F]">
                        <p>{heading}</p>
                    </div>
                    <div className="font-normal text-[#3E5765]">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}