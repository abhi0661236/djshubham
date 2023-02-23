import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RiCloseCircleLine } from 'react-icons/ri'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "fit-content",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

const MyModal = ({ show, onClose, title, children }) => {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={show}
            onClose={onClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={show}>
                <Box sx={style}>
                    <Box className="d-flex align-items-center justify-content-between border-bottom pb-4">
                        <Typography variant='h4'>{title}</Typography>
                        <Button type="button" onClick={onClose}><RiCloseCircleLine className="text-danger" /></Button>
                    </Box>
                    <Box>
                        {children}
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}


export default MyModal;