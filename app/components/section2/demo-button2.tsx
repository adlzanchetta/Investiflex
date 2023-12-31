import Image from "next/image";
import vector4 from "./Vector 4.svg"

const DemoButton2 = () =>  {
    return (
        <button className="btn btn-ghost text-[#E53FF8] text-[4vw] md:text-2xl text-center absolute md:right-5">Schedule a Demo
            <Image src={vector4} alt="" className="w-auto h-3/6"></Image>
        </button>
    );
}

export default DemoButton2;