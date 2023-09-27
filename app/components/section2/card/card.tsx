import Image, {ImageProps} from "next/image";

interface Props {
    cardTitle: string;
    isPrimary: boolean;
    imageSrc: string;
}
const Card = ({cardTitle, isPrimary, imageSrc}: Props) => {
    let content;

    if (!isPrimary) {
        content =
            <div className="card w-96 z-10 bg-white drop-shadow-[-4px_-4px_7px_rgba(0,0,0,0.5)]">
                <figure className="px-10 pt-10">
                    <Image src={imageSrc} alt="content image" width={230} height={232}></Image>
                </figure>
                <div className="card-body items-center text-center">
                    <p className="card-title text-2xl text-center text-black px-10">{cardTitle}</p>
                </div>
            </div>
    } else {
        content =
            <div className="card w-96 z-10 bg-[#E53FF8] drop-shadow-[-4px_-4px_7px_rgba(0,0,0,0.5)]">
                <figure className="px-10 pt-10">
                    <Image src={imageSrc} alt="content image" width={230} height={232}></Image>
                </figure>
                <div className="card-body items-center text-center">
                    <p className="card-title text-2xl text-center text-white px-10">{cardTitle}</p>
                </div>
            </div>
    }

    return (
        content
    )
}

export default Card;