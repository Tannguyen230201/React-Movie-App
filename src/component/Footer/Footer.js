import { BsFacebook } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import '../Footer/Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='content_footer'>
                <div className='copyRight'>
                    <a href='https://www.facebook.com/tannguyen2302/'>
                        <BsFacebook className='icon_footer' /> Tan Nguyen
                    </a>
                </div>
                <div className=''>
                    <Link to="*" >
                        <TfiEmail className='icon_footer' /> Nguyenvantan230201@gmail.com
                    </Link>
                </div>
                <div>
                    <Link to='*'>
                        <BsFillTelephoneFill className='icon_footer' /> 0369064083
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Footer