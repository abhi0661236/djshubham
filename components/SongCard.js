import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const SongCard = ({ data }) => {
    return (
        <>
            <div className="p-4">
                <Link href="#" className='w-100 text-decoration-none fw-semibold'>
                    <Image
                        src="/player.gif"
                        width={35}
                        height={25}
                        alt="player image"
                        className="border border-1 border-gray me-3"
                    />
                    <span className='text-danger'>
                        DJ Shubham Azamagarh
                    </span>
                    &nbsp;-&nbsp;
                    <span className='text-primary'>
                        DJ Bhojpuri Song
                    </span>
                    &nbsp;-&nbsp;
                    <span className='text-dark fw-normal'>
                        The Name Of The Song Will Come Here | Location May Be Here | Others
                    </span>
                    <span className='text-info'> [Download Now]</span>
                </Link>
            </div>
            <hr className="m-0 p-0" />
        </>
    )
}

export default SongCard