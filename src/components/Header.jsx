import { NavLink } from "react-router-dom"
import logo from '../assets/Logo2.png'

export const Header = () => {
  return (
    <header>
        <hgroup>
            <img src={logo} alt="" width={150}/>
            <p>ITLand</p>
        </hgroup>
        <nav>
            <ul>
                <li><NavLink to= "/">Home</NavLink></li>
                <li><NavLink to= "/products">Products</NavLink></li>
                <li><NavLink to= '/users'>Users</NavLink></li>
                <li><NavLink to= '/categories'>Categories</NavLink></li>

            </ul>
        </nav>
        
    </header>
  )
}
