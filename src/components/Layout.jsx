import React from 'react'
import { Outlet } from 'react-router'

function Layout() {
    return (
        <>
            <Sidebar />
            <Outlet />
            {/* <ChatLayout /> */}
        </>
    )
}

export default Layout