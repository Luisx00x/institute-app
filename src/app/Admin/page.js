import Header from "@/components/header/Header.jsx";
import s from './page.module.css';
import Sidebar from "@/components/sidebar/Sidebar";
import Information from "@/components/information/Information";

const AdminUI = () => {
  return (
    <div className={s.container}>
      <Header />
      <div className={s.uiContainer}>
        <Sidebar />
        <Information />
      </div>
    </div>
  )
}

export default AdminUI;