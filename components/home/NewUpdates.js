import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle';
import SongCard from '../SongCard';

const NewUpdates = () => {
    const [date, setDate] = useState();

    useEffect(() => {
        const date = new Date();
        setDate(`${date.toDateString()}`);
    }, []);
    return (
        <div className='mt-5'>
            <SectionTitle title={`New Updates !! ${date}`} />
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