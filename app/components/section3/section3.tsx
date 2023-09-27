import Step from "@/app/components/section3/step/step";


const Section3 = () =>  {
    return (
        <div className="p-16 bg-[url('/section3-bg.jpeg')]">
            <div className="flex flex-col w-full border-opacity-50]">
                <div className="grid h-auto card place-items-center p-20">
                    <h2 className="leading-relaxed text-white text-7xl font-medium text-center">Start using <span className="font-bold text-[#E53FF8]">Investiflex AI</span><br/> in three easy steps</h2>
                </div>
                <div className="grid h-auto card place-items-center">
                    <Step imageSrc="/section3-1.png" stepNumber={1} title="CHOOSE YOUR DATA SOURCES:" subTitle="NEWS, REPORTS, FILINGS, TRANSCRIPTS"></Step>
                </div>
                <div className="grid h-auto card place-items-center">
                    <Step imageSrc="/section3-2.png" stepNumber={2} title="DEFINE YOUR INVESTMENT STRATEGY" subTitle=""></Step>
                </div>
                <div className="grid h-auto card place-items-center">
                    <Step imageSrc="/section3-3.png" stepNumber={3} title="CHOOSE OUTPUT:" subTitle="PORTFOLIO REPORTS, TRADING SIGNALS, ETC."></Step>
                </div>
                <div className="grid h-auto card place-items-center p-20">
                    <h2 className="leading-relaxed text-white text-7xl font-medium text-center">Use ai results to make <br/><span className="font-bold text-[#E53FF8]">BETTER INVESTMENT DECISIONS</span></h2>
                </div>
            </div>
        </div>

    );
}

export default Section3;