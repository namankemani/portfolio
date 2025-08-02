import Image from "next/image"
import ToggleThemeButton from "./ToggleThemeButton";

export default function Navbar(){
    return(
        <header className="p-2 md:px-10">
            <section className="bg-white text-black rounded-3xl">
            <div >
                <ul className="flex justify-between">
                    <li className="flex items-center space-x-2 p-2">
                        <Image
                        src='/logo.svg'
                        alt="logo"
                        width={35}
                        height={35}
                        />
                        <h2>Naman <span className="font-bold"> Kemani</span></h2>
                    </li>

                    <li>
                        {/* <ToggleThemeButton/> */}
                    </li>
                </ul>
            </div>
            </section>
        </header>
    )
}