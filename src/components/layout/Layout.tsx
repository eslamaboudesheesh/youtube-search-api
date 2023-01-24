import React from 'react';
import { NavBar } from '../nav-bar/NavBar';

export const Layout = ({ children }: React.PropsWithChildren<any>) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
};
