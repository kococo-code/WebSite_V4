import React from 'react';
import Main from './component/main';
import SideBar from './component/Sidebar';
import MobileMain from './MobileComponent/MobileMain';
function App(){
  console.log(`
  ================================================================
|     __  ___   ______    _____    ______    _____    ______       |
|    |  |/  /  |  __  |  |   __|  |  __  |  |   __|  |  __  |      |
|    |  '  /   | |  | |  |  |     | |  | |  |  |     | |  | |      |
|    |  .  \\   | |__| |  |  |__   | |__| |  |  |__   | |__| |      |
|    |__|\\__\\  |______|  |_____|  |______|  |_____|  |______|      |
|                                                                  |                                              
|              kococo9504@naver.com, +82 10-4312-9504              |
  ================================================================ `)
   


    const InnerWidthSize = window.innerWidth;
    if(InnerWidthSize <= 1000){
        /// Mobile
        return(
            <MobileMain></MobileMain>
        )
    }
    else{
      return(  
        /// DeskTop
        <div>
          <Main></Main>
          <SideBar></SideBar>
        </div>
      )}
};

export default App;