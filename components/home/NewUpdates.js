import { useEffect, useState } from 'react';
import SongCard from '../SongCard';

const NewUpdates = () => {
    const [date, setDate] = useState();

    useEffect(() => {
        const date = new Date();
        setDate(`${date.toDateString()}`);
    }, []);
    return (
        <div className='mt-5'>
            <h2 className="p-2 bg-primary text-dark rounded-top border-bottom border-4 border-secondary">
                New Updates !! {date}
            </h2>
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