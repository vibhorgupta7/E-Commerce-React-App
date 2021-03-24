import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';          // this ia function that takes a component and upgrades in some manner

const MenuItem = ({ title, imageUrl, id, size, history, match, linkUrl }) => (
    <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}} />

        
        <div className="content">
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div> 
);

export default withRouter(MenuItem);        // now it will return MenuItem but now it will alos have access to Match, Location, History props