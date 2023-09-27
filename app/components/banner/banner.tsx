import Image from "next/image";
import banner1 from "./banner1.jpeg";
import banner2 from "./banner2.png";

const Banner = () => {
    return (
        <div className="flex w-full h-auto max-w-fit">
            <div className="grid flex-grow place-items-center">
                <div>
                    <Image className="relative left-48 z-10 w-[80%] h-auto" src={banner2} alt={""}/>
                    <br/>
                    <p className={"relative left-48 z-10 text-center text-[#E53FF8] font-black text-[1.7vw] w-[80%] h-auto"}>MAKE BETTER INVESTMENT DECISIONS</p>
                </div>
            </div>
            <div className="grid flex-grow place-items-center">
                <Image className="relative w-full h-auto" src={banner1} alt={""}/>
            </div>
        </div>
    )
}

export default Banner;