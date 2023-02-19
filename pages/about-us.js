import React from 'react'
import { Box, Typography } from '@mui/material'

const welcomeCard = {
  backgroundColor: "var(--theme-primary-light)",
  // border: "1px solid var(--theme-primary)",
  padding: "4rem",
  borderRadius: "1.5rem",
  color: "white"
}

const AboutUs = () => {
  return (
    <div>
      <Box
        className="welcome-section"
        sx={{ display: "grid", placeContent: "center", position: "relative" }}
      >
        <Box
          sx={welcomeCard}
        >
          <Typography variant='h1' sx={{ fontWeight: "600" }}>I Am <span className='welcome-name'>DJ SHUBHAM</span></Typography>
          <Typography variant='h5'>We deliver high quality songs on demand. Visit our youtube channel for more.</Typography>
        </Box>

      </Box>
    </div>
  )
}

export default AboutUs