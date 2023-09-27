import Image from "next/image";

interface Props {
    stepNumber: number;
    imageSrc: string;
    title: string;
    subTitle: string;
}


const Step = ({stepNumber, imageSrc, title, subTitle}: Props) =>  {
    let content;

    if (stepNumber%2 === 0) {
        content =
            <div className="flex w-full">
                <div className="grid h-auto w-7/12 flex-grow card rounded-box place-items-center">
                    <div className="relative w-9/12 left-20">
                        <div className="text-center text-[#E53FF8] text-[140px] font-medium absolute -left-24 -top-32">{stepNumber + "°"}</div>
                        <h2 className="text-5xl font-semibold text-white">{title}</h2>
                        <p className="text-4xl text-white">{subTitle}</p>
                    </div>
                </div>
                <div className="grid h-auto w-5/12 flex-grow card place-items-center">
                    <Image src={imageSrc} alt="" width={533} height={555}></Image>
                </div>
            </div>
    } else {
        content =
            <div className="flex w-full">
                <div className="grid h-auto w-5/12 flex-grow card place-items-center">
                    <Image src={imageSrc} alt="" width={533} height={555}></Image>
                </div>
                <div className="grid h-auto w-7/12 flex-grow card place-items-center">
                    <div className="relative w-9/12">
                        <div className="text-center text-[#E53FF8] text-[140px] font-Barlow font-medium absolute -left-24 -top-32">{stepNumber + "°"}</div>
                        <h2 className="text-5xl font-semibold text-white">{title}</h2>
                        <p className="text-4xl text-white">{subTitle}</p>
                    </div>
                </div>
            </div>
    }

    return (
        content
    );
}

export default Step;