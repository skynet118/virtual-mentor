import { useState } from "react";

const Dropdown = ({ menuName, options}:
                  {menuName: string, options:{key: any, value: any}[]}) =>{
    const [ expandMenu, setExpandMenu ] = useState(false);
    return(
        <div className="relative inline-block my-auto">
            <span className={"text-[#00FF80] cursor-pointer flex items-center"} onClick={() => setExpandMenu(prev => !prev)}>
                {menuName}
            <svg 
                className={"ml-[10px] " + (expandMenu? "rotate-180": "rotate-0")}
                width="13" 
                height="6" 
                viewBox="0 0 13 6" fill="none">
                <path d="M1 1L7 5L12 1" stroke="#00FF80"/>
            </svg>
            </span>
            { expandMenu ?
            <ul className={`w-[120px] rounded p-[10px]
                            text-center absolute
                            top-[30px] bg-[#141136]
                            border text-[#00FF80] border-[#00FF80] 
                            `
                          }>
                { options.map((element:{key:any, value:any} , index:number)=>
                    {
                        return (
                            <li className={""} key={element.key}>
                                {element.value}
                            </li>
                            )
                    }
                )}
            </ul>
            : 
            <div></div>
            }
        </div>
    )
}

export default Dropdown;
