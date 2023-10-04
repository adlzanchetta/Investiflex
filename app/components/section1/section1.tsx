import Title1 from "@/app/components/section1/title1";
import section1pic from "./section1.png";
import Image from "next/image";
import RightContent from "@/app/components/section1/right-content/right-content";

const Section1 = () => {
    return (
        <div className="bg-[#1E0A3D] pb-16">
            <div className="flex flex-col w-full">
                <div className="grid h-auto place-items-center md:place-items-start">
                    <Title1></Title1>
                </div>
                <div className="grid h-auto">
                    <div className="flex flex-col md:flex-row w-full">
                        <div className="grid flex-grow h-auto md:w-1/2 place-items-center">
                            <Image className="w-auto h-[50vw] md:h-[30vw]" src={section1pic} alt=""/>
                        </div>
                        <br/>
                        <br/>
                        <div className="grid flex-grow h-auto md:w-1/2 place-items-center relative">
                            <RightContent></RightContent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1;