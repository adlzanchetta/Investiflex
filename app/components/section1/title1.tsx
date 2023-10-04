import Image from "next/image";
import vector3 from "./Vector3.svg";

const Title1 = () => {
    return (
        <>
            <div className="flex w-full h-auto max-w-fit place-items-center p-10 z-[1] absolute invisible md:visible">
                <Image className="px-3 w-auto h-[3.5vw]" src={vector3} alt=""/>
                <p className="text-white font-black text-[3vw]">Decide before anyone else</p>
            </div>
            <div className="flex w-full h-auto md:h-[10vw] max-w-fit place-items-center p-10 relative z-[1] visible md:invisible">
                <p className="text-white text-[7.5vw] text-center">Decide before <br/> anyone else</p>
            </div>
        </>
    )
}

export default Title1;