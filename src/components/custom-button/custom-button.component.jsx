import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps}) =>{           // children prop has everything that is inside components eq. <div type="abc"> xyz </div>, children will have xyz And otherProps will have abc
   
return(
        <button className='custom-button' {...otherProps}>  
            {children}          
        </button>
   )
   
}

export default CustomButton;