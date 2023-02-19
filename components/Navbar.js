import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Image from 'next/image';
import InputBase from '@mui/material/InputBase';
import Sidebar from '../components/Sidebar.js';
import Link from 'next/link';
import { HiMenuAlt1 } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('xs')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1, 0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Navbar() {
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
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{ backgroundColor: "var(--theme-primary)" }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 0, display: { md: "none" }, cursor: "pointer" }}
                            onClick={toggleDrawer(true)}
                        >
                            <HiMenuAlt1 style={{ color: "var(--icon-color-light)", width: "2.5rem", height: "2.5rem" }} />
                        </IconButton>
                        <SwipeableDrawer
                            anchor={'left'}
                            open={opensidebar}
                            onClose={toggleDrawer(false)}
                            onOpen={toggleDrawer(true)}
                            sx={{backgroundColor: "var(--theme-primary-light)"}}
                        >
                            <Sidebar onHide={() => setSidebar(false)} anchor="left" />
                        </SwipeableDrawer>
                        <Box
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: 'block' }}
                        >
                            <Link href="/">
                                <Image
                                    src="/logo.png"
                                    width={40}
                                    height={40}
                                    alt="logo"
                                />
                            </Link>
                        </Box>
                        <Search>
                            <SearchIconWrapper>
                                <BiSearch style={{color: "var(--icon-color-white)"}} />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search song name..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
                <Offset />
            </Box>

        </div>
    );
}