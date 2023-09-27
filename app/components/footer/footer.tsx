
const Footer = () =>  {
    return (
        <footer className="footer items-center p-4 bg-[#2A064E] text-neutral-content">
            <aside className="items-center grid-flow-col px-24">
                <p className="text-xl text-white font-medium">Copyright © 2023 investiflex. All rights reserved.</p>
            </aside>
            <nav className="grid-flow-col gap-2 md:place-self-center md:justify-self-end px-24">
                <a className="btn btn-ghost text-xl text-white font-medium">ABOUT</a>
                <a className="btn btn-ghost text-xl text-white font-medium">CONTACT</a>
            </nav>
        </footer>
    );
}

export default Footer;