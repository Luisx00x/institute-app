'use client'
import s from '../Admin/layout.module.css';
import Header from '@/components/header/Header';

const layout = ({children}) =>{


  return (
    <>
    {
      <div className={s.container}>
        <Header />
        <div className={s.uiContainer}>
            {children}
        </div>
      </div>
    }
    </>
  )

}

export default layout;