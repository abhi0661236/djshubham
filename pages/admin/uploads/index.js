import { useState } from 'react';
import SongCard2 from '@/components/SongCard2';
import SectionTitle from '@/components/SectionTitle';
import Button from '@mui/material/Button';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import MyModal from '@/components/MyModal';
import FormGroup from '@mui/material/FormGroup'

const Uploads = () => {
    const [addModal, showAddModal] = useState(false);


    return (
        <>
            <MyModal show={addModal} onClose={() => showAddModal(false)} title="Upload Song">
                <form style={{width: "50rem"}}>
                    <div className='mb-3'>
                        <label htmlFor="title" className="form-label">Song Title</label>
                        <input type="text" name="title" id="title" className="form-control" />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="title" className="form-label">Song Title</label>
                        <input type="text" name="title" id="title" className="form-control" />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="title" className="form-label">Song Title</label>
                        <input type="text" name="title" id="title" className="form-control" />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="title" className="form-label">Song Title</label>
                        <input type="text" name="title" id="title" className="form-control" />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="title" className="form-label">Song Title</label>
                        <input type="text" name="title" id="title" className="form-control" />
                    </div>
                </form>
            </MyModal>
            <section className='container-fluid pt-4'>
                <SectionTitle title="Your Uploads">
                    <Button onClick={() => showAddModal(true)}><MdOutlineLibraryAdd style={{ width: "3rem", height: "3rem" }} /></Button>
                </SectionTitle>
                <div className='grid grid-card mt-4'>
                    {
                        Array(8).fill("").map((_, i) => {
                            return (
                                <SongCard2 key={i} data={{ base_url: "song-title" }} />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Uploads