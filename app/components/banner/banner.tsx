import Image from "next/image";
import bannerPic from "./BannerPic.jpeg";
import bannerTxt from "./BannerTxt.png";

const Banner = () => {
    return (
        <div className="bg-white">
            <div className="flex w-full h-auto flex-col md:flex-row">
                <div className="grid flex-grow place-items-center">
                    <div className="w-[80%] place-items-center text-base">
                        <Image className="" src={bannerTxt} alt={""}/>
                        <br/>
                        <div className="text-center text-[#E53FF8] text-[4vw] font-black md:text-[2vw]">MAKE BETTER INVESTMENT DECISIONS</div>
                    </div>
                </div>
                <br/>
                <div className="grid flex-grow place-items-end">
                    <Image className="" src={bannerPic} alt={""}/>
                </div>
            </div>
        </div>

    )
}

export default Banner;