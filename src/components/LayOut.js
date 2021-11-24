import React from 'react';
import Header from './Header';
import classes from './Layout.module.scss';

function LayOut({ children }) {
    return (
        <>
            <Header />
            <div className={classes.container}>{children}</div>
        </>
    )
}

export default LayOut
