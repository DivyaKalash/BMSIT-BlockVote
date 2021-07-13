import { React, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions";


import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const auth = useSelector(state => state.auth);
const dispatch = useDispatch();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const renderNonLoggedInUser = () => {
    return(
      <NavMenu onClick={handleClick} click={click}>

      <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/Signup">Sign Up</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/Login">
                    <Button primary>Login</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/Login">
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Login
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              </NavMenu>
    )
  }

  const logout = () => {
    dispatch(signout());
  }

  const renderLoggedInlinks =() => {
    return (
      <NavMenu onClick={handleClick} click={click}>
        <NavItem>
                <NavLinks onClick={logout}>Signout</NavLinks>
              </NavItem>
              </NavMenu>
    )
  }
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              BMSIT
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            {auth.authenticate ? renderLoggedInlinks(): renderNonLoggedInUser()}

          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
