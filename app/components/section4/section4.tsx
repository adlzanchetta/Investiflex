import section4pic from "./section4.png";
import Image from "next/image";

const Section4 = () =>  {
    return (
        <div className="p-16 bg-[url('/section4-bg.jpeg')]">
            <div className="flex w-full">
                <div className="grid w-5/12 h-auto flex-grow card place-items-center">
                    <Image className="w-[75%] h-auto" src={section4pic} alt=""/>
                </div>
                <div className="grid w-7/12 h-auto flex-grow card place-items-center">
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="grid h-auto card py-20 px-40">
                            <h2 className="leading-relaxed text-[#20212A] text-5xl text-justify font-medium"><span className="font-bold text-[#E53FF8]">Investiflex</span> brings intelligent automation to unstructured financial data.</h2>
                        </div>
                        <div className="grid h-auto card py-20 px-40">
                            <p className="leading-relaxed text-[#20212A] text-4xl text-justify">Investiflex deploys generative AI and adaptive AI model, making AI adaptive to your business surroundings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section4;