import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { staticImageLoader } from '@/utils/index'
import Link from 'next/link';


const SongCard2 = ({ data: { base_url } }) => {
    const router = useRouter();
    return (
        <>
            <div
                className="square-card border border-gray rounded d-flex align-items-center"
                onClick={()=>router.push(`uploads/${base_url}`)}
            >
                <div className='bg-secondary'>
                    <Image
                        src="/img_placeholder.jpeg"
                        width={80}
                        height={80}
                        alt="song image"
                        className='w-100 h-100'
                        loader={staticImageLoader}
                    />
                </div>
                <div className='p-4'>
                    <h5 className='text-dark'>Song Title</h5>
                    <p className='text-truncate w-100 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, soluta.</p>
                    <Link
                        href={`uploads/${base_url}`}
                        className='fs-6 text-uppercase text-decoration-none'
                    >
                        Details
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SongCard2