import DemoButton1 from "@/app/components/section1/right-content/demo-button1";
import Vectors from "@/app/components/section1/right-content/vectors";


const RightContent = () =>  {
    return (
        <div className="h-5/6 w-5/6 relative place-items-center">
            <DemoButton1></DemoButton1>
            <Vectors></Vectors>
            <p className="text-white text-2xl text-justify p-20">Your AI copilot for financial decision making.
                <br/><br/> Use our AI-powered real-time analysis of press releases,
                earning calls, financial reports and news to gain competitive advantage.</p>
        </div>
    );
}

export default RightContent;