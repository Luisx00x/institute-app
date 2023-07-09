
import Link from 'next/link';
import s from './Sidebar.module.css';

const Sidebar = ({menus}) => {

  return (
    <nav className={s.container}>
      <ul className={s.list}>
          {
            menus.map( (menu,index) => {
              return <li key={index}><Link href={menu.route} >{menu.name}</Link></li>
            })
          }
        </ul>
    </nav>
  )
}

export default Sidebar;