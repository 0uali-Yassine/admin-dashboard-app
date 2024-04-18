import React, { createContext, useContext, useEffect, useState } from 'react';
import { userRows } from './datatablesource';

const Mycontext = createContext();

function Context({children}) {
    const [data,setData] = useState(userRows);
    const [newData,setNewData] = useState([userRows[0]]);
    const [darkMode,setDarkMode] = useState(false);
    const [isDrawerOpen,setIsDrawerOpen] = useState(false);

    // for menu when is falls within the specified range
    useEffect(() => {
      function handleResize() {
        const width = window.innerWidth;
        if (width >= 889 && width <= 1200) {
          setIsDrawerOpen(false);
        }
      }

      window.addEventListener('resize', handleResize);

      handleResize();

      // Cleanup function to remove event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    

    function handlView(id){
      setNewData( data.filter(itm => itm.id === id));
    }

    function handlDelete(id){
      setData(prev => prev.filter(user => user.id !== id));
    }

    function NewUser(e){
      e.preventDefault();
     
    }


  return (
    <Mycontext.Provider value={{data,handlView,newData,handlDelete,NewUser,darkMode,setDarkMode,
      isDrawerOpen,setIsDrawerOpen}}>
        {children}
    </Mycontext.Provider>      
  )
}

export function useGlobalContext(){
    return useContext(Mycontext);
}
export default Context;
