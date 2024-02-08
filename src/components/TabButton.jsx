export  const TabButton=({children,isSelected,...prop})=>{
    
    return(
        <li><button className={isSelected ? 'active':undefined} {...prop} >{children}</button></li>
    )
}