import { Link } from "react-router-dom"
import '../style/HeaderNav.css'

const HeaderNav = () => {
  return (
    <header className='header'>
        <h1 className='header__title'>
          <Link to='/'>E-Commerce</Link>
        </h1>
        <nav className='header__nav'>
            <ul className='header__list'>
                <li className='header__item'>
                  <Link className='header__link' to='/login'>Login</Link>
                </li>
                <li className='header__item'>
                  <Link className='header__link' to='/cart'>Cart</Link>
                </li>
                <li className='header__item'>
                  <Link className='header__link' to='/purchases'>Purchases</Link>
                </li>
                <li className='header__item'>
                  <Link className='header__link' to='/register'>Register</Link>
                </li>
                
            </ul>
        </nav>
    </header>
  )
}

export default HeaderNav
