import MenuItem from "@/app/components/navigation-bar/menu-item";
import Image from "next/image";
import logoPic from "./logo.png";
import hamburgerMenu from "./HamburgerMenu.svg";

const NavigationBar = () => {
    return (
        <div className="px-5">
            <div className="navbar bg-white pl-20 pt-10 top-6 w-fit absolute invisible md:visible">
                <Image className="relative right-6 w-[10%] h-auto" src={logoPic} alt={"Investiflex"}/>
                <MenuItem itemName={"HOME"}></MenuItem>
                <MenuItem itemName={"SOLUTION"}></MenuItem>
                <MenuItem itemName={"PRODUCT"}></MenuItem>
                <MenuItem itemName={"CONTACT"}></MenuItem>
            </div>

            <div className="navbar bg-white my-20 visible md:invisible">
                <div className="navbar-start">
                    <Image className="relative w-14 h-auto" src={logoPic} alt={"Investiflex"}/>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end -right-3">
                        <label tabIndex={0} className="btn btn-ghost">
                            <Image className="" src={hamburgerMenu} alt={"menu"}/>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                            <li><a className="text-[3vw] text-[#FF4BFB]">HOME</a></li>
                            <li><a className="text-[3vw]">SOLUTION</a></li>
                            <li><a className="text-[3vw]">PRODUCT</a></li>
                            <li><a className="text-[3vw]">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;