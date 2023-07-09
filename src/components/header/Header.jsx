import { useDispatch } from 'react-redux';
import s from './Header.module.css';
import Link from 'next/link';
import { logout } from './headerHandler';

const Header = () => {

  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <h2>Header</h2>
      <Link onClick={() => logout(dispatch)} href={"/"}>Cerrar sesión</Link>
    </div>
  )
}

export default Header;