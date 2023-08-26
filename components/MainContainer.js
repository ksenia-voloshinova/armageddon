import React from 'react';
import Header from "./Header";


function MainContainer({children}) {
    return (
        <>
            <Header/>
            {children}
        </>
    );
}

export default MainContainer;
