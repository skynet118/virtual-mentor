import { Fragment } from "react";
import logo from "../../assets/logo.svg";
import whatsappLogo from "../../assets/whatsappLogo.svg";
import Dropdown from "../Dropdown";
import Link from "../Link";


const Navbar = ({children}:{children:any}) => {
    return(
        <Fragment>
            <div className={"w-full bg-[#141136] h-[70px] flex items-center justify-around"}>
                <div className={"flex w-full justify-evenly"}>
                    <div>
                        <img src={logo} alt="" />
                    </div>
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
            </div>
            <div>
                {children}
            </div>
        </Fragment>
    )
}

export default Navbar;
