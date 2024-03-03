import React from 'react';

const Tabs = ({cn, tabs}) => {
    return (
        <div className={`tabs ${cn}`}>
            {tabs}
        </div>
    )
}

export default Tabs;