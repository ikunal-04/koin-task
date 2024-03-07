import {Heading} from "../components/Heading";
import pieChart from "../assets/pieChart.svg";
import {SubHeadingWithoutSymbol} from "../components/SubHeadingWithoutSymbol";

export function Tokenomics() {
    return (
        <div className="hidden sm:inline-block bg-white rounded-lg p-6 mt-5 h-max">
            <div>
                <Heading title={"Tokenomics"}/>
            </div>
            <div className="font-semibold text-[20px]/[36px] text-[#1D1D1D] mt-6">
                <p>Initial Distribution</p>
            </div>
            <div className="flex items-center pt-4 pb-4 gap-6 mt-4 mb-4">
                <div>
                    <img src={pieChart} alt="pieChart" />
                </div>
                <div className="font-normal text-base text-[#202020]">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full bg-[#0082FF] h-3 w-3"></div>
                        <div>Crowdsale investors: 80%</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="rounded-full bg-[#FAA002] h-3 w-3"></div>
                        <div>Foundation: 20%</div>
                    </div>
                </div>
            </div>
            
            <div>
                <SubHeadingWithoutSymbol description={"Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus."}/>
            </div>
        </div>
    )
}