import {Heading} from './Heading';
import {SubHeading} from './SubHeading';

export function Sentiment() {
    return (
        <div className='bg-white p-6 h-[556px] rounded-lg gap-6 mt-5'>
            <Heading title={"Sentiment"}/>
            <div className='mt-4'>
                <SubHeading title={"Key Events"}/>
            </div>
        </div>
    )
}