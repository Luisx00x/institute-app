'use client'
import Link from 'next/link';
import s from './Sidebar.module.css';
import { usePathname } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { parentCleanUp } from './sidebarHandler';

const Sidebar = ({menus, altMenu}) => {

  const pathname = usePathname();
  const dispatch = useDispatch();

  return (
    <nav className={s.container}>
      <ul className={s.list}>
          {
            menus.map( (menu,index) => {
              return (
              <li key={index}>
                <Link 
                className={`${s.link} ${ pathname == menu.route ? s.active : "" }`} 
                href={menu.route}
                >
                    {menu.name}
                </Link>
              </li>
              )
            })
          }
          {
            altMenu
            ?
            <li key={altMenu.name} onClick={(e) => parentCleanUp(e, dispatch)}>
              <Link
              className={`${s.link} ${ pathname == altMenu.route ? s.active : "" }`} 
              href={altMenu.route}
              >
                {altMenu.name}
              </Link>
            </li>
            :
            null
          }
        </ul>
    </nav>
  )
}

export default Sidebar;