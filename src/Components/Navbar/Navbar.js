import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import './Navbar.css'
import { GlobalContext } from "../GlobalContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";


const Navbar = () => {

    const {searchValue,setSearchValue,handleSubmit} = useContext(GlobalContext)
    const navigator = useNavigate()
    const [showNav,setShovNav] = useState(false);
    const navUl = useRef(null)
    

    const handleNav = ()=>{
        if(showNav){
            setShovNav(false)
            navUl.current.classList.remove('show-me')
        }
        else{
            setShovNav(true)
            navUl.current.classList.add('show-me')
        }
    }
    return (  

        <nav className="navbar">
             <Link className="logo" to = '/' >Food Recipe</Link>

            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name = 'search'
                autoComplete ="off"
                value={searchValue}
                placeholder="Enter Items . . ."
                onChange={(e)=> {setSearchValue(e.target.value)
                    navigator('/')
                    
                }}
                />
            </form>

            {showNav? <MdCancel onClick={handleNav} className = "ham-menu" /> : <GiHamburgerMenu onClick={handleNav} className = "ham-menu"/>}

            
            <ul ref = {navUl}>
                <li>
                    <Link className="links" to = '/' >Home</Link>
                </li>
                <li>
                    <Link className="links" to = '/recipe-item/:id' >Details</Link>
                
                </li>
                <li>
                    <Link className="links" to = '/favourites' >Favourites</Link>
                </li>


            </ul>

        </nav>
        
    );
}
 
export default Navbar;