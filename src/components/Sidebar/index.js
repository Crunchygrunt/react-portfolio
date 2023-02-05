import './index.scss'
import { Link } from 'react-router-dom'
import LogoY from '../../assets/images/yuvraj-logo.png'

const Sidebar = () => {
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoY} alt="logo" />
        </Link>
    </div>
}

export default Sidebar