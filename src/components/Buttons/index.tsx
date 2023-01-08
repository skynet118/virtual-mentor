import { Fragment, MouseEventHandler } from "react";

export const LinkButtonPrimary = ({children, onClick, classes=""}: 
                            {children: any, onClick: ()=> void,  classes?: string}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                    w-[150px] 
                    h-[50px]
                    cursor-pointer
                    font-normal
                    text-lg
                    flex items-center justify-center
                    h-[50px] text-[#141136]
                    bg-[#FFD600] hover:bg-[#FFF600]
                    rounded-md`}
            >
            { children } 
        </button>
    )
}

export const LinkButtonSecondary = ({children, onClick, classes=""}: 
                            {children: any, onClick: ()=> void,  classes?: string}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                    w-[120px] 
                    h-[30px]
                    cursor-pointer
                    font-normal
                    text-lg
                    flex items-center justify-center
                    h-[50px] text-white
                    bg-[#FF3D00] hover:bg-[#ff764d]
                    rounded-md`}
            >
            { children } 
        </button>
    )
}

export const PrimaryButton = ({children, onClick, classes=""}: 
                            {children: any, onClick: MouseEventHandler, classes?: string}) => {
    return (
        <button 
            type="button"
            className={`
                    w-[150px] 
                    h-[50px] text-[#141136]
                    bg-[#FFD600] hover:bg-[#FFF600]
                    rounded-md`}
            onClick={onClick}>
            { children } 
        </button>
    )
}

export const SecondaryButton = ({children, onClick, classes=""}: 
                            {children: any, onClick: MouseEventHandler, classes?: string}) => {
    return (
        <button 
            type="button"
            className={`
                    w-[150px] 
                    h-[50px] text-[#141136]
                    bg-[#FFD600] hover:bg-[#FFF600]
                    rounded-md`}
           onClick={onClick}>
            { children } 
        </button>
    )
}

export const FormButton = ({children, onClick, classes=""}: 
                            {children: any, onClick: MouseEventHandler, classes?: string}) => {
    return (
        <button 
            type="button"
            className={`
                    w-[150px] 
                    h-[50px] text-[#141136]
                    bg-[#FFD600] hover:bg-[#FFF600]
                    rounded-md`}
           onClick={onClick}>
            { children } 
        </button>
    )
}
