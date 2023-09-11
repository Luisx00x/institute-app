import { useDispatch } from 'react-redux';
import s from './Header.module.css';
import Link from 'next/link';
import { logout } from './headerHandler';
import logo from '@/../public/static/logo.png';

const Header = () => {

  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <img src={logo.src} alt="college-logo" />
      </div>
      <h2>I.E.P.C. Hefzibá</h2>
      <Link onClick={() => logout(dispatch)} href={"/"}>Cerrar sesión</Link>
    </div>
  )
}

export default Header;