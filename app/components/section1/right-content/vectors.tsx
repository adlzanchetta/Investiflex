import Image from "next/image";
import section1pic2 from "./section1-2.png";
import vectorTopRight from "./Vector 1.svg";
import vectorBottomLeft from "./Vector 2.svg";

const Vectors = () =>  {
    return (
        <>
            <Image className="w-auto h-[5vw] absolute -top-[1vw] left-0" src={section1pic2} alt=""/>
            <Image className="w-auto h-[4.5vw] absolute top-[2vw] right-0" src={vectorTopRight} alt=""/>
            <Image className="w-auto h-[4.5vw] absolute bottom-0 left-0" src={vectorBottomLeft} alt=""/>
        </>
    );
}

export default Vectors;