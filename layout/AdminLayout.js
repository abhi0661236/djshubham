import React from 'react'
import AdminNav from '@/components/admin/AdminNav'

const AdminLayout = ({ children, pathname }) => {

    return (
        <>
            {
                pathname === "/admin/login" ? <></> :
                    <AdminNav />
            }
            {children}
        </>
    )
}

export default AdminLayout