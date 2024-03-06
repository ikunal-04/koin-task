import {Button} from './Button';

export function AboutCard({gradient, image, heading}) {
    return (
        <div className={`flex items-center rounded-[6.65px] ${gradient} h-max p-3 gap-7 w-max`}>
            <div className="">
                <img src={image} alt="image" />
            </div>
            <div className='gap-4 w-[195px]'>
                <div className="font-bold text-[20px]/[28px] text-white mb-4">
                    <p>{heading}</p>
                </div>
                <div className="w-max">
                    <Button title={"Check Now"}/>
                </div>
            </div>
        </div>
    )
}