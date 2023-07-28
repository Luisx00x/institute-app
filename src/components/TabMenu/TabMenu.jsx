import s from './TabMenu.module.css';
import { ChangeTab } from './tabHandler';
const TabMenu = ({tabs, activeOption, children, active}) => {

  /* Tabs = [opcion1, opcion2, ..., opcion N] */
  // LOs compoenntes de contenido se pasan por children

  return (
    <>

      <div className={s.releasesContainer}>
        
        <div className={s.releaseOptions}>
          {
            tabs?.map( (tab, index) => {
              if(index == 0){
                return (
                  <>
                    <div id={`${index+1}`} className={`${active == index+1 ? s.active : null} ${s.options} ${s.optionsStart}`} onClick={(e) => ChangeTab(e, activeOption)} >{tab}</div>
                  </>
                  )
                }
              if(index == tabs.length-1){
                return (
                  <>
                    <div id={`${index+1}`} className={`${active == index+1 ? s.active : null} ${s.options} ${s.optionsEnd}`} onClick={(e) => ChangeTab(e, activeOption)} >{tab}</div>
                  </>
                )
              }
              return (
                <>
                  <div  id={`${index+1}`} className={`${active == index+1 ? s.active : null} ${s.options}`} onClick={(e) => ChangeTab(e, activeOption)} >{tab}</div>
                </>
              )
            })
          }
        </div>

        <div className={s.releaseContent}>
          {children}
        </div>

      </div>

    </>
  )
}

export default TabMenu;