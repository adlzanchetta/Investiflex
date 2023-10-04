import Title2 from "@/app/components/section2/title2";
import Card from "@/app/components/section2/card/card";
import DemoButton2 from "@/app/components/section2/demo-button2";

const Section2 = () => {
    return (
        <div className="bg-white py-16">
            <div className="flex flex-col w-full">
                <div className="grid h-auto place-items-center bg-white">
                    <Title2></Title2>
                </div>
                <div className="grid h-auto card bg-white place-items-center py-20">
                    <div className="flex flex-row w-full flex-wrap">
                        <div className="grid h-auto flex-grow card bg-white place-items-center py-5 md:p-10">
                            <Card cardTitle="Short Term Trading Insights" isPrimary={false} imageSrc="/section2-1.png"></Card>
                        </div>
                        <div className="grid h-auto flex-grow card bg-white place-items-center py-5 md:p-10">
                            <Card cardTitle="Portfolio Optimisation" isPrimary={false} imageSrc="/section2-2.png"></Card>
                        </div>
                        <div className="grid h-auto flex-grow card bg-white place-items-center py-5 md:p-10">
                            <Card cardTitle="Sector Specific Trading" isPrimary={true} imageSrc="/section2-3.png"></Card>
                        </div>
                        <div className="grid h-auto flex-grow card bg-white place-items-center py-5 md:p-10">
                            <Card cardTitle="Macroeconomic Trends" isPrimary={false} imageSrc="/section2-4.png"></Card>
                        </div>
                    </div>
                </div>
                <div className="grid h-auto card bg-white place-items-center relative">
                    <DemoButton2></DemoButton2>
                </div>
            </div>
        </div>
    )
}

export default Section2;