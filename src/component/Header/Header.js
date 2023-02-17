import React, { useEffect, useState } from "react";
import '../Header/Header.scss'
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom'
const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const handleScrollY = () => {
        const scrollY = window.scrollY;
        setScrollY(scrollY);
    }
    useEffect(() => {
        handleScrollY();
        window.addEventListener('scroll', handleScrollY);
        return () => {
            window.removeEventListener('scroll', handleScrollY);
        }
    }, []);
    return (
        <div className="header" style={scrollY < 100 ? { background: 'transparent' } : { background: 'rgb(17,17,17)' }}>
            <div className="leftMenu">
                <div className="logo">
                    <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" alt="" /></Link>
                </div>
                <div className="searchInput">
                    <FiSearch className="iconSearch" />
                    <input type="text" placeholder="Find movie name, actor ..." />
                </div>
            </div>
            <div className="rightMenu">
                <div>
                    <Link to='movie/type/popular'>Popular</Link>
                    <Link to='movie/type/top_rated'>Top Rated</Link>
                    <Link to='movie/type/upcoming'>Upcoming</Link>
                </div>
            </div>
        </div>
    )
};
export default Header;