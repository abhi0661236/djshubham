import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Box, Button } from '@mui/material'
import Image from 'next/image';
import NewUpdates from '@/components/home/NewUpdates';
import { HiOutlineSearchCircle } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';






const welcomeCard = {
  backgroundColor: "var(--theme-primary-light)",
  // border: "1px solid var(--theme-primary)",
  padding: "4rem",
  borderRadius: "1.5rem",
  color: "white"
}


export default function Home() {
  return (
    <>
      <Head>
        <title>DJ Shubham | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main className="container-fluid">
        <Box sx={{ height: "auto", height: "15rem", backgroundColor: "black" }} className="mt-4">
          <Box className='banner-image'>
            <Image
              src="/img/banner2.png"
              width={400}
              height={200}
              alt="website banner"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>

          <Box>
            <marquee className="moving-text">
              किसी भी गाने में अपना नाम लगवाये मात्र 50 रुपये में ! (Dj Shubham Azamgarh) से ||
            </marquee>
          </Box>

          <Box sx={{ width: "100%" }} className="my-5">
            <Box sx={{ width: "fit-content", padding: "2rem", background: "var(--grad-1)", margin: "auto", display: "flex", alignItems: "center", borderRadius: ".5rem", gap: "1.5rem" }}>
              <Box sx={{ width: "10rem", height: "auto" }}>
                <Image
                  src="/logo.png"
                  width={400}
                  height={200}
                  alt="website banner"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box>
                <div style={{ color: "white", fontWeight: "500", marginBottom: "1rem" }}>DJ SHUBHAM AZAMGARH</div>
                <div
                  className="g-ytsubscribe"
                  data-channelid="UC5RuAnHprD5iNk6XGViwaZw"
                  data-layout="default"
                  data-count="default"
                >
                </div>
              </Box>
            </Box>
          </Box>

          <div className="w-100">
            <div className="shadow-lg w-fit mx-auto py-2 px-5 rounded-pill">
              <div className="d-flex align-items-center">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="searchInput border-0 p-2 border-0 outline-0 text-secondary"
                  placeholder='Search here...'
                />
                <BiSearch />
              </div>
            </div>

            <div className="text-center mt-5">
              <Button className="mx-auto bg-dark shadow-md text-light" variant='contained'>
                Go
              </Button>
            </div>
          </div>

          <NewUpdates />
        </Box>

      </main>
    </>
  )
}
