import React from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { staticImageLoader } from '@/utils/index'


const SongCard2 = ({ data: { base_url } }) => {
    const router = useRouter();
    return (
        <>
            <div className="square-card p-4 border border-gray rounded">
                <div className='w-fit'>
                    <Image
                        src="/logo.png"
                        width={80}
                        height={80}
                        alt="song image"
                    />
                </div>
                <div>
                    <h5>Song Title</h5>
                    <p className='text-truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, soluta.</p>
                    <Button
                        variant="contained"
                        color='success'
                        className='fs-6 text-uppercase'
                        onClick={()=>router.push(`uploads/${base_url}`)}
                    >
                        Details
                    </Button>
                </div>
            </div>
        </>
    )
}

export default SongCard2