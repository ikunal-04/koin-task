import {Heading} from "../components/Heading";
import {SubHeadingWithoutSymbol} from "../components/SubHeadingWithoutSymbol";
import { AboutCard } from "../components/AboutCard";
import about1 from "../assets/about1.svg";

export function About() {
    return (
        <div className="bg-white rounded-lg p-6 mt-5 h-[995px]">
            <div>
                <Heading title={"About Bitcoin"}/>
            </div>
            <div className="mb-4">
                <div className="mt-6 border-b-[2px] mb-4">
                    <SubHeadingWithoutSymbol title={"What is Bitcoin?"} description={"Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC."}/>
                </div>
                <div className="border-b-[2px] mb-4">
                    <SubHeadingWithoutSymbol title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus."}/>

                    <SubHeadingWithoutSymbol description={"Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at."}/>

                    <SubHeadingWithoutSymbol description={"Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui"}/>
                </div>
            </div>

            <div className="border-b-[2px] mb-4">
                <div className="mb-4">
                    <Heading title={"Already Holding Bitcoin?"}/>
                </div>
                <div className="flex gap-7 mb-4">
                    <AboutCard gradient={"bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD]"} image={about1} heading={"Calculate you Profits"}/>
                    <AboutCard gradient={"bg-gradient-to-r from-[#FF9865] to-[#EF3031]"} image={about1} heading={"Calculate your tax liability"}/>
                </div>
            </div>

            <div>
                <SubHeadingWithoutSymbol description={"Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui"}/>
            </div>
            
        </div>
    )
}