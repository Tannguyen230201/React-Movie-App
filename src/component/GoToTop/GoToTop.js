import { FaArrowAltCircleUp } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { useState, useEffect } from 'react';
import '../GoToTop/GoToTop.scss'


const GoToTop =()=> {
    const gotoTop = () => {
        scroll.scrollToTop();
    }
    const handleScrollY = () => {
        setGoToTop(window.scrollY);
    }
    const [goToTop, setGoToTop] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', handleScrollY);
        return () => {
            window.removeEventListener('scroll', handleScrollY);
        }
    }, [])
    return (
        <FaArrowAltCircleUp className='goToTop' offset={50} duration={500} onClick={gotoTop}
            style={goToTop < 500 ? { color: 'rgba(232, 221, 221, 0)' } : { color: 'rgba(232, 221, 221, 1)' }}
        />
    )
}
export default GoToTop