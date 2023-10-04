import DemoButton1 from "@/app/components/section1/right-content/demo-button1";
import Vectors from "@/app/components/section1/right-content/vectors";


const RightContent = () =>  {
    return (
        <div className="h-auto w-5/6 relative">
            <DemoButton1></DemoButton1>
            <Vectors></Vectors>
            <div className="place-items-center pt-[3vw] md:pt-[4vw] pb-[10vw] md:pb-[5vw]">
                <p className="text-white text-[3vw] md:text-[2vw] text-justify p-[4vw] ">Your AI copilot for financial decision making.
                    <br/><br/> Use our AI-powered real-time analysis of press releases,
                    earning calls, financial reports and news to gain competitive advantage.</p>
            </div>
        </div>
    );
}

export default RightContent;