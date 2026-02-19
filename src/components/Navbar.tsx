const Navbar = () => {

    return (
        <div className="navbar bg-base-100 h-[200px] bg-[url(https://images.unsplash.com/photo-1514905552197-0610a4d8fd73?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-[150px] bg-cover">
            <div className="flex-1">
                <a href="#" className="text-white text-4xl p-4 border ml-6">Art Institute of Chicago</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal text-white text-lg p-4">
                    <li><a>HOME</a></li>
                    <li><a>ABOUT</a></li>
                    <li><a>CONTACT</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
