/*eslint-disable*/
import * as React from 'react';
import {useState} from 'react';
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
  minWidth: '250px',
};

const CardUpdateModal = ({ isOpen, handleClose, cardContent, handleTextUpdate }) => {
    // const handleActiveColor = (color) => {
    //     console.log(color);
    // }
    // console.log(cardContent)
    const [ textValue, setTextValue ] = useState(cardContent);

    const handleChange = e => {
        setTextValue(e.target.value);
      };
      const handleEditedText = (textValue) => {
        handleTextUpdate(textValue);
      }
   
    return (
       

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
            value={textValue}
            placeholder="Redaguojamas tekstas"
            onChange={handleChange}
            />
            <Button
            onClick={() => handleEditedText(textValue)}
          variant="contained"
          color="primary"
          type="submit"

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

)};

export default CardUpdateModal;