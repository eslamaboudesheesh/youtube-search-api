import React from 'react';
import { NavBar } from '../nav-bar/NavBar';

export const Layout = ({ children }: any) => {
    return (
        <>
            <NavBar />

            {children}
        </>
    );
};
