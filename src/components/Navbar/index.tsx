import { Fragment, useState } from "react";
import logo from "../../assets/logo.svg";
import whatsappLogo from "../../assets/whatsappLogo.svg";
import Dropdown from "../Dropdown";
import Link from "../Link";
import { MainTitle } from "../Titles";


const Navbar = ({children}:{children:any}) => {

    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-[#FFD600] transition ease transform duration-300`;

    return(
        <Fragment>
            <div className={`w-full bg-[#141136] 
                             h-[70px] flex items-center
                             z-10
                             justify-around fixed`}>
                <div className={"flex w-full justify-between md:justify-around"}>
                    <div className={`w-[20%] mx-[10px]`}>
                        <img className={`m-auto`} src={logo} alt="" />
                    </div>
                    <div className={`hidden md:flex justify-around w-[80%] mx-[40px]`}>
                        <Link name={"Nosotros"} to={""}/>
                        <Dropdown 
                            menuName="Servicios"
                            options={[{key: 1, value: 'first'}, {key: 2, value: 'second'}]}
                         />
                        <div className={`flex items-center 
                                         cursor-pointer
                                         transition duration-150 
                                         ease-out hover:ease-in`}>
                            <img src={whatsappLogo} alt="" />
                        </div>
                        <div className={`flex items-center 
                                         hover:text-[#ffee99]
                                         text-[#FFD600] cursor-pointer`} >
                            <span>Iniciar Session</span>
                        </div>
                    </div>
                    <div className={`md:hidden flex`}>
                        <MainTitle title={"VIRTUAL MENTOR"} />
                    </div>
                    <div className={`md:hidden mx-[10px]`}>
                        <button className={`flex flex-col h-12 w-12 border-2 
                                            border-[#FFD600] rounded justify-center 
                                            items-center group`}
                                onClick={() => setIsOpen(!isOpen)} >
                            <div className={`${genericHamburgerLine} ${ isOpen ? 
                             "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                             :"opacity-50 group-hover:opacity-100"}`} ></div>
                            <div className={`${genericHamburgerLine} ${isOpen ? 
                                "opacity-0" : "opacity-50 group-hover:opacity-100"}`}></div>
                            <div className={`${genericHamburgerLine} ${isOpen ? 
                                "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                                : "opacity-50 group-hover:opacity-100"}`}></div>
                        </button>
                        <div className={`
                                    bg-[#141136]
                                    border-[#00FF80]
                                    border
                                    h-fit
                                    z-10
                                    group
                                    p-[20px] top-[67px]
                                    fixed right-0 w-[150px] 
                                    md:hidden
                                    ${isOpen ? "block": "hidden"}
                        `}>
                            <Link name={"Nosotros"} to={""}/>
                            <Dropdown 
                                menuName="Servicios"
                                options={[{key: 1, value: 'first'}, {key: 2, value: 'second'}]}
                             />
                            <div className={`flex items-center 
                                             hover:text-[#ffee99]
                                             text-[#FFD600] cursor-pointer`} >
                                <span>Iniciar Session</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`relative top-[70px]`}>
                {children}
            </div>
        </Fragment>
    )
}

export default Navbar;
