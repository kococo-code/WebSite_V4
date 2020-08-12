import React from 'react';
import Main from './component/main';
import SideBar from './component/Sidebar';
import MobileMain from './MobileComponent/MobileMain';
function App(){
    let InnerWidthSize = window.innerWidth;
    if(InnerWidthSize <= 1000){
        /// Mobile
        return(
            <MobileMain></MobileMain>
        )
    }
    else{
      return(  
        <div>
          <Main></Main>
          <SideBar></SideBar>
        </div>
      )}
};

export default App;