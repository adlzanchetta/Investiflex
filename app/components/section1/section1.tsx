import Title1 from "@/app/components/section1/title1";
import section1pic from "./section1.png";
import Image from "next/image";
import RightContent from "@/app/components/section1/right-content/right-content";

const Section1 = () => {
    return (
        <div className="bg-[#1E0A3D] pb-16">
            <div className="flex flex-col w-full">
                <div className="grid h-45">
                    <Title1></Title1>
                </div>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow h-auto w-1/2 place-items-center">
                        <Image className="w-auto h-[75%]" src={section1pic} alt=""/>
                    </div>
                    <div className="grid flex-grow h-auto w-1/2 place-items-center">
                        <RightContent></RightContent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1;