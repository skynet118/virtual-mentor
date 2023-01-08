import {Fragment } from "react";

export const MainTitle = ({title, classes}:{title: string, classes?: string}) => {
    return (
        <Fragment>
            <h1 className={"text-[#00FF80] font-bold relative m-auto text-xl md:text-2xl lg:text-3xl"}>
                {title}
            </h1>
        </Fragment>
    )
}


export const SecondaryTitle = ({title, classes}:{title: string, classes?: string}) => {
    return (
        <Fragment>
            <h1 className={"text-white font-bold relative m-auto text-xl md:text-2xl lg:text-3xl"}>
                {title}
            </h1>
        </Fragment>
    )
}


