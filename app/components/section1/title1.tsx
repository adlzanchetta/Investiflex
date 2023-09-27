import Image from "next/image";
import vector3 from "./Vector3.svg";

const Title1 = () => {
    return (
        <div className="flex w-full h-auto max-w-fit place-items-center p-10 relative left-20 top-10 z-10">
            <Image className="px-3 w-auto h-[60%]" src={vector3} alt=""/>
            <h1 className="text-white font-black text-6xl">Decide before anyone else</h1>
        </div>
    )
}

export default Title1;