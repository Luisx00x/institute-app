
export const ChangeTab = (e, setTab) => {

  setTab(prev => {
    return e.target.id
  })

} 