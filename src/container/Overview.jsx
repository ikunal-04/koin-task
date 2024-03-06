import {OverviewComp} from '../components/OverviewComp'

export function Overview() {
    return (
        <div className="flex justify-start h-12 gap-8 mt-5 border-b-[2px]">
            <div className="flex items-center text-[#0141CF] border-[#0052FE] border-b-[3px] text-base font-semibold">
                Overview
            </div>
            <OverviewComp title="Fundamentals"/>
            <OverviewComp title="News Insights"/>
            <OverviewComp title="Sentiments"/>
            <OverviewComp title="Team"/>
            <OverviewComp title="Technicals"/>
            <OverviewComp title="Tokenomics"/>
        </div>
    )
}
