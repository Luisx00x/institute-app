import s from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={s.container}>
      <ul className={s.list}>
          <li>Elemento 1</li>
          <li>Elemento 2</li>
          <li>Elemento 3</li>
          <li>Elemento 4</li>
        </ul>
    </nav>
  )
}

export default Sidebar;