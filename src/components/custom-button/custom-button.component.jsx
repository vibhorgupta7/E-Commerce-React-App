import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps}) =>{           // children prop has everything that is inside components eq. <div type="abc"> xyz </div>, children will have xyz And otherProps will have abc
   
return(
        <button className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`}>  
            {children}          
        </button>
   )
    
}

export default CustomButton;