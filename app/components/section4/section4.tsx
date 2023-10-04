import section4pic from "./section4.png";
import Image from "next/image";

const Section4 = () =>  {
    return (
        <div className="p-16 md:bg-[url('/section4-bg.jpeg')]">
            <div className="flex w-full">
                <div className="grid w-5/12 h-auto flex-grow card place-items-center invisible md:visible absolute md:relative">
                    <Image className="w-[75%] h-auto" src={section4pic} alt=""/>
                </div>
                <div className="grid w-7/12 h-auto flex-grow card place-items-center">
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="grid h-auto card py-20 md:px-40">
                            <p className="leading-relaxed text-[#20212A] text-[6vw] md:text-5xl text-center md:text-justify font-medium"><span className="font-bold text-[#E53FF8]">Investiflex</span> brings intelligent automation to unstructured financial data.</p>
                        </div>
                        <div className="grid flex-grow card place-items-center visible md:invisible relative md:absolute">
                            <Image className="w-[75vw] h-auto" src={section4pic} alt=""/>
                        </div>
                        <div className="grid h-auto card py-20 md:px-40">
                            <p className="leading-relaxed text-[#20212A] text-[6vw] md:text-4xl text-justify">Investiflex deploys generative AI and adaptive AI model, making AI adaptive to your business surroundings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section4;