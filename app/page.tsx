import NavigationBar from "@/app/components/navigation-bar/navigation-bar";
import Banner from "@/app/components/banner/banner";
import Section1 from "@/app/components/section1/section1";
import Section2 from "@/app/components/section2/section2";
import Section3 from "@/app/components/section3/section3";
import Section4 from "@/app/components/section4/section4";
import Footer from "@/app/components/footer/footer";

export default function Home() {
    return (
        <main>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>
            <Footer></Footer>
        </main>
    )
}
