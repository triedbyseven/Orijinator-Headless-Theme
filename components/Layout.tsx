import React from 'react';
import 'uikit/dist/css/uikit.min.css'

const Layout: React.SFC = ({ children }: any) => {
    return (
        <div className="uk-container">
            {children}
        </div>
    )
}

export default Layout;