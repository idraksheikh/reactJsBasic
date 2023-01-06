import React,{useRef} from "react";
import "./Header.css";
import img from "../../Asset/Image/logo.png" ;



const Header =() =>{

    const navref=useRef();
    const openNav=()=>{
        console.log("hello");
        navref.current.classList.toggle("open");
    }
        
     

return(
    <>
        <div className="nav" >
            
            
                <ul className="nav-link" ref={navref}>
                    <li>
                    <a href="">About Us</a>
                    </li>
                    <li>
                    <a href="">Contact Us</a>
                    </li>
                    <li>
                    <a href="">Home</a>
                    </li>
                </ul>

                <div className="hamburger" id="hamburger" onClick={openNav}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
        </div>
            
        </div>
        <section className="main">
            <img src={img} alt="logo"/>
            <h1>Logo</h1>
        </section>
    </>
)
};

export default Header;