import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import OtherBoards from './otherboards';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxwidth: '400px',
  maxheight: '500px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '10px',
  p: 4,
};

const OtherBoardsModal = ({ openOB, handleCloseOB }) => (
  <div>
    <Modal
      open={openOB}
      onClose={handleCloseOB}
    >
      <Box sx={style}>
        <Typography element="h6" variant="h6" sx={{ pb: '5px' }}>Pasirinkite naują šabloną</Typography>
        <OtherBoards handleCloseOB={handleCloseOB} />
      </Box>
    </Modal>
  </div>
);

export default OtherBoardsModal;
