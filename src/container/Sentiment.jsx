import {Heading} from '../components/Heading';
import {SubHeading} from '../components/SubHeading';
import { SentimentCard } from '../components/SentimentCard';
import SentimentsLogo1 from '../assets/SentimentsLogo1.svg';
import SentimentsLogo2 from '../assets/SentimentsLogo2.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {SentimentAnalysis} from '../components/SentimentAnalysis'; 

export function Sentiment() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div className='bg-white p-6 h-max rounded-lg gap-6 mt-5 pb-8'>
            <Heading title={"Sentiment"}/>
            <div className='mt-4'>
                <SubHeading title={"Key Events"}/>
            </div>
            
            <div className='mt-4'>
            <Slider {...settings}>
                    <div className=''>
                        <SentimentCard bgprimary={"bg-[#E8F4FD]"} imgSrc={SentimentsLogo1} heading={"Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."} content={"Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."}/>
                    </div>
                    <div>
                        <SentimentCard bgprimary={"bg-[#EBF9F4]"} imgSrc={SentimentsLogo2} heading={"Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."} content={"Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."}/>
                    </div>
                   
                    </Slider>
            </div>

            <div className='mt-8'>
                <div>
                    <SubHeading title={"Analyst Analysis"}/>
                </div>
                <div className='flex items-center gap-10 mt-4 mb-[26px]'>
                    <div className='rounded-full h-[120px] bg-[#EBF9F4] flex justify-center items-center w-[116px]'>
                        <div className='flex items-center h-11 text-[#0FBA83]'>
                            <p className='font-medium text-[36.41px]'>76</p>
                            <p className='text-base'>%</p>
                        </div>
                    </div>
                    <div>
                        <SentimentAnalysis title={"Buy"} price={"76%"} color={"bg-[#00B386]"} width={"w-[350px]"}/>
                        <SentimentAnalysis title={"Hold"} price={"8%"} color={"bg-[#C7C8CE]"} width={"w-[33px]"}/>
                        <SentimentAnalysis title={"Sell"} price={"16%"} color={"bg-[#F7324C]"} width={"w-[66.5px]"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}