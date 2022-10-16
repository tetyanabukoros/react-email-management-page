import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';


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

export default function SuccessModal({ openModal, setOpenModal }) {
  const [isDoneIcon, setIsDoneIcon] = React.useState(false);

  setTimeout(() => {
    setIsDoneIcon(true);
  }, 500);

  return (
    <div>
      <Modal
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
            <Typography id="transition-modal-description" sx={{ mt: 2, mb: 2 }}>
              Изменения успешно сохранены.
            </Typography>
            {!isDoneIcon && <InfoOutlinedIcon color="success" fontSize='large'/>}
            {isDoneIcon && <TaskAltOutlinedIcon color="success" fontSize='large'/>}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
