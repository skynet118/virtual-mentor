const Link = ({name, to}:{name:string, to:string}) => {
    return (
        <div className="cursor-pointer my-auto text-[#00FF80]">
            <span>{name}</span>
        </div>
    )
}

export default Link;
