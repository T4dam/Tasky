/*eslint-disable*/
import * as React from 'react';
import { Box, Modal }from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  background: 'white',
};

const CardUpdateModal = ({ isOpen, handleClose }) => {
    const handleActiveColor = (color) => {
        console.log(color);
    }
    return (
    <Modal
    open={isOpen}
    onClose={handleClose}
    >
    <Box sx={style}>

Bu!

    </Box>
    </Modal>
)};

export default CardUpdateModal;