import React from 'react'
import AdminNav from '@/components/admin/AdminNav'

const AdminLayout = ({ children }) => {
    return (
        <>
            <AdminNav />
            {children}
        </>
    )
}

export default AdminLayout