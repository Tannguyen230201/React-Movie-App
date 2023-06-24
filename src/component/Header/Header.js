import React, { useEffect, useState } from "react";
import "../Header/Header.scss";
import { FiSearch } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
// import { Nav, NavDropdown, Container, Navbar, NavLink } from "react-bootstrap";
const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [show,setShow] = useState(false);
  const handleScrollY = () => {
    const scrollY = window.scrollY;
    setScrollY(scrollY);
  };
  useEffect(() => {
    handleScrollY();
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);
  const iconClick =() =>{
    setShow(!show)
  }

  return (
    <div
      className="header " style={ scrollY < 90 ? { background: "transparent" } : { background: "rgb(17,17,17)" }}
    >
      <div className="leftMenu">
        <div className="logo">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </Link>
        </div>
        <div className="searchInput">
          <FiSearch className="iconSearch" />
          <input type="text" placeholder="Find movie name, actor ..." />
        </div>
      </div>
      <div className="rightMenu">
        <div>
          <Link to="movie/type/popular">Popular</Link>
          <Link to="movie/type/top_rated">Top Rated</Link>
          <Link to="movie/type/upcoming">Upcoming</Link>
        </div>
      </div>
      <div className="icon_menu" >
            <BiMenu onClick={iconClick}/>
            {show ? <ul >
                        <li><Link onClick={iconClick} className="link" to="movie/type/popular">Popular</Link></li>
                        <li><Link onClick={iconClick} className="link"  to="movie/type/top_rated">Top Rated</Link></li>
                        <li><Link onClick={iconClick} className="link" to="movie/type/upcoming">Upcoming</Link></li>
                     </ul> : ""}
      </div>  
    </div>
  );
};
export default Header;
