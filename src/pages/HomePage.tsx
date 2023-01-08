import { Fragment } from "react";
import { PrimaryButton,
         SecondaryButton,
         FormButton,
         LinkButtonSecondary,
         LinkButtonPrimary} from "../components/Buttons/index";
import mainLogo from "../assets/mainLogo.png";
import Navbar from "../components/Navbar";
import Logo from "../assets/logo.svg";
import { MainTitle } from "../components/Titles";


const HomePage = () => {

    return(
        <Fragment>
            <Navbar>
                <div className={"w-full h-[500px] flex bg-cover bg-center bg-no-repeat"}
                     style={{ 'backgroundImage': "url("+ mainLogo +")" }}
                >
                    <div className={"w-[300px] h-[200px]"}>
                        <img className={"w-full h-full"} src={Logo} alt="" />
                        <MainTitle title="VIRTUAL MENTOR" />
                    </div>
                    <div>
                        
                    </div>
                </div>
            </Navbar>
        </Fragment>
    )
}

export default HomePage;
