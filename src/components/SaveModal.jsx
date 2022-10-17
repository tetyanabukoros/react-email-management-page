import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import SuccessModal from './SuccessModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px #2550f5 #000',
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function SaveModal({ openModal, setOpenModal }) {
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);

  return (
    <div>
      {openSuccessModal
        ? <SuccessModal 
            openModal={openSuccessModal} 
            setOpenModal={setOpenSuccessModal}
          />
        : <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openModal}
            onClose={() => setOpenModal(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
           <Fade in={openModal}>
            <Box sx={style}>
            <Typography mb={4} id="transition-modal-title" variant="h6" component="h2">
              Вы уверенны?
            </Typography>
            <Stack
              mb={2}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button 
                variant="contained"
                onClick={() => {
                  setOpenSuccessModal(true);
                  setTimeout(() => {
                    setOpenModal(false);
                  }, 2000);
                }}
              >
                Да
              </Button>
              <Button 
                variant="outlined"
                color="error"
                onClick={() => setOpenModal(false)}
              >
                Нет
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>}
    </div>
  );
}
