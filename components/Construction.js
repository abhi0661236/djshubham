import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Construction = () => {
  return (
    <Box sx={{display: "grid", placeContent: "center", height: "90vh"}}>
        <Box sx={{display: "flex", alignItems: "center",flexWrap: "wrap", justifyContent: "center", gap: "1rem", width: "fit-content"}}>
            <Image 
                src="/img/construction.png"
                width={200}
                height={150}
                alt="constructon image"
            />
            <Box sx={{textAlign: "center"}}>
                <Typography variant="h1">
                    Under Construction
                </Typography>
                <Typography variant="body1">
                    We are currently building this page. Please check back later.
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Construction