import koinxlogo from '../assets/koinXLogo.svg';

function Navbar() {
    return (
        <div className="flex justify-between bg-white h-20 shadow-[#102649]">
            <div className="flex flex-col justify-center ml-16 ">
                <img src={koinxlogo} alt="koinxLogo" />
            </div>
            <div>
                <ul className="flex items-center justify-end h-full mr-16 font-['Inter'] text-base text-[#0F1629] font-semibold gap-8">
                    <li className="">
                        <a href="#home">Crypto Taxes</a>
                    </li>
                    <li className="">
                        <a href="#about">Free Tools</a>
                    </li>
                    <li className="">
                        <a href="#services">Resource Center</a>
                    </li>
                    <button className='bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] p-2 h-10 w-32 text-white rounded-lg text-base'>
                        Get Started
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;