/*eslint-disable*/
import * as React from 'react';
import { Box, Modal, IconButton }from '@mui/material';
import ColorPicker from './color-picker';
import CancelIcon from '@mui/icons-material/Cancel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex'
};

const ColorPickerModal = ({ isOpen, handleClose }) => {
    const handleActiveColor = (color) => {
        console.log(color);
    }
    return (
    <Modal
    open={isOpen}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={style}>

<ColorPicker onActiveColor={handleActiveColor} />

    </Box>
    </Modal>
)};

export default ColorPickerModal;