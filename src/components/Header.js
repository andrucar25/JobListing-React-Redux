import React from 'react';
import headerImg from '../images/bg-header-desktop.svg';

const Header = () => {
    return ( 
       <div className="relative h-32 header-container">
           <img src={headerImg} className="absolute inset-0 w-full h-full object-cover" />
       </div> 
     );
}
 
export default Header;