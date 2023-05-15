import { NavLink } from "react-router-dom";
import Head1 from './Head1';
import Head2 from './Head2';       
       
       
    function Navbar() {
        return (   
          <>
          <Head1/> 
          <Head2/>
       <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">Register</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
    </>
);
}

export default Navbar;