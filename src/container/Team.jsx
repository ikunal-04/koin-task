import {Heading} from "../components/Heading";
import { SubHeadingWithoutSymbol } from "../components/SubHeadingWithoutSymbol";
import {TeamComp} from "../components/TeamComp";
import person1 from "../assets/person1.svg";
import person2 from "../assets/person2.svg";
import person3 from "../assets/person3.svg";

export function Team() {
    return (
        <div className="bg-white rounded-lg p-6 mt-5 h-[776px]">
            <div>
                <Heading title={"Team"}/>
            </div>
            <div className="mt-6">
                <SubHeadingWithoutSymbol description={"Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue."}/>
            </div>
            <div className="mt-6">
                <TeamComp name={"John Smith"} description={"Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"} img={person1}/>
                
                <TeamComp name={"Elina Williams"} description={"Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"} img={person2}/>

                <TeamComp name={"John Smith"} description={"Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"} img={person3}/>
            </div>
        </div>
    )
}