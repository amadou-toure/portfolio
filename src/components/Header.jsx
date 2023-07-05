import React from "react"
import Style from './component.module.css'
const Header = ()=>{
    return(
        <>
            <div className={Style.header_container}>
                <ul>
                    <div>
                        <a href="">home</a>
                    </div>
                    <div>
                    <a href="">presentation</a>
                    </div>
                    <div>
                    <a href="">skils</a>
                    </div>
                    <div>
                    <a href="">education</a>
                    </div>
                    <div>
                       <a href="">experience</a> 
                    </div>
                </ul>
                
            </div>
        </>
    )
}

export default Header