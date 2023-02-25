import { useState } from 'react';
import SongCard2 from '@/components/SongCard2';
import SectionTitle from '@/components/SectionTitle';
import Button from '@mui/material/Button';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import MyModal from '@/components/MyModal';
import SearchBox from '@/components/SearchBox';
import UploadForm from '@/components/admin/UploadForm';

const Uploads = () => {
    const [addModal, showAddModal] = useState(false);


    return (
        <>
            <MyModal show={addModal} onClose={() => showAddModal(false)} title="Upload Song">
                <UploadForm />
            </MyModal>
            <section className='container-fluid pt-4'>
                <SectionTitle title="Your Uploads">
                    <SearchBox border={true} inputClassName="py-0"/>
                    <Button onClick={() => showAddModal(true)}><MdOutlineLibraryAdd style={{ width: "3rem", height: "3rem" }} /></Button>
                </SectionTitle>
                <div className='grid grid-lg mt-4'>
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