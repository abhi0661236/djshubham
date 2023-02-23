import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Image from 'next/image';
import AdminSideNav from '@/components/admin/AdminSideNav.js';
import Link from 'next/link';
import { HiMenuAlt1 } from 'react-icons/hi'

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);



export default function AdminNav() {
    const [opensidebar, setSidebar] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setSidebar(open);
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="fixed" sx={{ backgroundColor: "var(--theme-primary)" }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 0, cursor: "pointer" }}
                            onClick={toggleDrawer(true)}
                        >
                            <HiMenuAlt1 style={{ color: "var(--icon-color-dark)", width: "2.5rem", height: "2.5rem" }} />
                        </IconButton>
                        <SwipeableDrawer
                            anchor={'left'}
                            open={opensidebar}
                            onClose={toggleDrawer(false)}
                            onOpen={toggleDrawer(true)}
                        >
                            <AdminSideNav onHide={() => setSidebar(false)} anchor="left" />
                        </SwipeableDrawer>
                        <Box
                            component="div"
                            sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: "1rem", justifyContent: "end"}}
                            className="text-end transition-3"
                        >
                            <Link href="dashboard" className="transition-3">
                                <Image
                                    src="/logo.png"
                                    width={40}
                                    height={40}
                                    alt="logo"
                                />
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Offset />
            </Box>

        </div>
    );
}