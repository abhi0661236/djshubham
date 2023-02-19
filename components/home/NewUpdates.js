import { useEffect, useState } from 'react';
import SongCard from '../SongCard';

const NewUpdates = () => {
    const [date, setDate] = useState();

    useEffect(() => {
        const date = new Date();
        setDate(`${date.toDateString()}`);
    }, []);
    return (
        <div className='mt-4'>
            <div className="py-2 px-4 bg-primary text-white rounded-top">
                New Updates !! {date}
            </div>
            {
                Array(10).fill("").map((item, index) => {
                    return (
                        <>
                            <SongCard data={{}} />
                        </>
                    )
                })
            }
        </div>
    )
}

export default NewUpdates