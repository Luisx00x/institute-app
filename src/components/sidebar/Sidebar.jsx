
import Link from 'next/link';
import s from './Sidebar.module.css';
import { usePathname } from 'next/navigation';

const Sidebar = ({menus}) => {

  const pathname = usePathname();

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
        </ul>
    </nav>
  )
}

export default Sidebar;