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

const ColorPickerModal = ({ isOpen, handleClose }) => (
      <Modal open={isOpen} onClose={()=> handleClose()} >
        <Box sx={style}>
          <ColorPicker />
          <Box>
              <IconButton onClose={handleClose}>
                  <CancelIcon />
              </IconButton>
          </Box>
        </Box>
      </Modal>
);

export default ColorPickerModal;