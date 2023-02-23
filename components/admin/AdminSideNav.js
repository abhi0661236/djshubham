import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { AdminMenuItems } from '@/utils';
import { ListItemButton, Typography } from '@mui/material';
import Link from 'next/link'


const AdminSideNav = ({ anchor, onHide }) => {
    return (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, height: "100%" }}
            role="presentation"
        >
            <Box
                sx={{ width: "100%", padding: "1rem", display: 'flex', alignItems: "center", justifyContent: "space-between" }}
            >
                <Typography
                    variant='h3'
                    sx={{ lineHeight: "normal" }}
                >
                    DJ SHUBHAM
                </Typography>

                <Link href="dashboard">
                    <Image
                        src="/logo.png"
                        width={30}
                        height={30}
                        alt="logo"
                        onClick={onHide}
                        style={{ cursor: "pointer" }}
                    />
                </Link>

            </Box>
            <Divider />
            <List>
                {AdminMenuItems.map((item, index) => (
                    <ListItem key={JSON.stringify(item)} disablePadding onClick={onHide}>
                        <ListItemButton component={Link} href={item.base_url}>
                            <ListItemIcon sx={{ mr: 0 }}>
                                {
                                    item.icon.type === "icon" &&
                                    item.icon.icon
                                }
                                {
                                    item.icon.type === "image" &&
                                    <Image
                                        src={item.icon.url}
                                        width={30}
                                        height={30}
                                        style={{ borderRadius: ".5rem" }}
                                        alt="category icon"
                                    />
                                }
                            </ListItemIcon>
                            <ListItemText primary={item.title} className="fs-4" />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Box>
    )
}

export default AdminSideNav