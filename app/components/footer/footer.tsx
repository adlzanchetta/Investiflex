
const Footer = () =>  {
    return (
        <footer className="footer items-center pt-4 md:p-4 bg-[#2A064E] text-neutral-content">
            <aside className="items-center grid-flow-col invisible md:visible absolute left-[3vw]">
                <p className="text-xl text-white font-medium">Copyright © 2023 investiflex. All rights reserved.</p>
            </aside>
            <nav className="grid-flow-col gap-2 md:place-self-center md:justify-self-end visible md:invisible">
                <a className="btn btn-ghost text-xl text-white font-medium">ABOUT</a>
                <a className="btn btn-ghost text-xl text-white font-medium">CONTACT</a>
            </nav>
            <aside className="items-center grid-flow-col visible md:invisible">
                <p className="text-xl text-white font-medium">Copyright © 2023 investiflex. All rights reserved.</p>
            </aside>
            <nav className="grid-flow-col gap-2 md:place-self-center md:justify-self-end invisible md:visible">
                <a className="btn btn-ghost text-xl text-white font-medium">ABOUT</a>
                <a className="btn btn-ghost text-xl text-white font-medium">CONTACT</a>
            </nav>
        </footer>
    );
}

export default Footer;