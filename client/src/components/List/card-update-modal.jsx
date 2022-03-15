/*eslint-disable*/
import * as React from 'react';
import { Box, Modal, TextField, Button, Typography, IconButton }from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'relative',
  background: 'white',
  padding: '20px',
  borderRadius: '6px',
  
};

const CardUpdateModal = ({ isOpen, handleClose }) => {
    // const handleActiveColor = (color) => {
    //     console.log(color);
    // }
    return (
        // <StoreApi.Provider value={{ addNewCard }}>

    <Modal
    open={isOpen}
    onClose={handleClose}
    >
    <Box sx={style}>
<Box>
    <Typography element="h6" variant="h6" sx={{pb: '5px'}}>Redaguokite tekstą</Typography>
<TextField 
            style={{ overflow: 'hidden' }}
            multiline
            fullWidth
            // value={cardContent}
            placeholder="Redaguojamas tekstas"
            
            />
            <Button
          variant="contained"
          color="primary"
          type="submit"
        //   disabled={cardContent === ''}
        //   onMouseDown={handleSubmit}
          sx={{ width: 100, my: '8px', }}
        >
          Pridėti
        </Button>
</Box>
    <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
        <IconButton onClick={handleClose} size="small">
                      <CancelIcon fontSize="small" />
                    </IconButton>
    </Box>


    </Box>
    </Modal>
            // </StoreApi.Provider>
)};

export default CardUpdateModal;