import { Fragment } from "react";
import { PrimaryButton,
         SecondaryButton,
         FormButton,
         LinkButtonSecondary,
         LinkButtonPrimary} from "../../components/Buttons/index";
import mainLogo from "../../assets/mainLogo.png";
import Navbar from "../../components/Navbar";
import Logo from "../../assets/logo.svg";
import { MainTitle, SecondaryTitle } from "../../components/Titles";
import { SimpleSpace, DoubleSpace } from "../../components/Spaces";


const HomePage = () => {

    return(
        <Fragment>
            <Navbar>
                <div className={`w-full p-[40px] md:h-[500px] 
                                 text-center items-center
                                 h-[400px] relative  justify-evenly 
                                 -top-[10px] flex flex-col md:flex-row
                                 bg-cover bg-center bg-no-repeat`}
                     style={{ 'backgroundImage': "url("+ mainLogo +")" }}>
                    <div className={"w-[400px] h-[200px] hidden md:block"}>
                        <img className={"w-full h-full"} src={Logo} alt="" />
                        <MainTitle title={`VIRTUAL MENTOR`} />
                    </div>
                    <div>
                        <div>
                            <SecondaryTitle title={`ASEGURA TU INGRESO`} />
                        </div>
                        <SimpleSpace />
                        <div className={`text-white text-center md:max-w-xl`}>
                            <p>Adipisicing ut error molestiae rem maxime. Sit modi mollitia repudiandae harum enim laudantium vitae. Voluptates harum mollitia iste cum cum Neque quidem illum animi provident repellendus! Debitis perferendis iusto cumque</p>
                        </div>
                        <SimpleSpace />
                        <LinkButtonPrimary children={"INFORMES"} classes={"m-auto"} onClick={()=>{}} />
                    </div>
                </div>
                
            </Navbar>
        </Fragment>
    )
}

export default HomePage;
