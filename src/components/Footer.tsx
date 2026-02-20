const Footer = () => {
    return (
        <footer className="flex justify-center space-x-30 fixed bottom-0 w-full p-4 bg-base-200 text-base-content absolute sticky">
            <div className="flex flex-col flex-[1/3]">
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
            </div>
            <div className="flex flex-col flex-[1/3]">
                <span className="footer-title">About us</span>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div className="flex flex-col flex-[1/3]"> 
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    )
}

export default Footer;