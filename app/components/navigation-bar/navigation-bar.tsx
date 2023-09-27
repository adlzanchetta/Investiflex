import MenuItem from "@/app/components/navigation-bar/menu-item";
import Image from "next/image";
import logoPic from "./logo.png";

const NavigationBar = () => {
    return (
        <div className={"navbar bg-base-100 absolute left-24 top-6 w-fit z-10"}>
            <Image className="relative right-6 w-[10%] h-auto" src={logoPic} alt={"Investiflex"}/>
            <MenuItem itemName={"HOME"}></MenuItem>
            <MenuItem itemName={"SOLUTION"}></MenuItem>
            <MenuItem itemName={"PRODUCT"}></MenuItem>
            <MenuItem itemName={"CONTACT"}></MenuItem>
        </div>
    )
}

export default NavigationBar;