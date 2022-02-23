import React, { useRef, useEffect } from 'react';
import {
  Box,
  styled,
  Fab,
} from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import UserService from '../../services/user-service';

const Pic = styled('img')(({ theme }) => ({
  height: '200px',
  width: '200px',
  borderRadius: '50%',
  objectFit: 'cover',
  objectPosition: 'cover',

}));

const ProfilePageImage = ({ imgSrc }) => {
  const imgUploadRef = useRef(null);

  const handleUploadImgClick = () => {
    const imgUpload = imgUploadRef.current;
    imgUpload.click();
  };

  const handleUploadImgLoaded = async () => {
    const imgUpload = imgUploadRef.current;
    const [img] = imgUpload.files;
    await UserService.uploadImage(img);
  };
  return (

    <Box>
      <Box sx={{ mt: '-145px', textAlign: 'center' }}>
        <Pic src={imgSrc ?? '/person-placeholder.jpeg'} alt="profile picture" style={{ border: '5px solid white' }} />
      </Box>
      <Fab onClick={handleUploadImgClick} sx={{ mt: '-100px', mr: '-115px' }} size="small" color="primary">
        <AddAPhotoIcon fontSize="medium" />
      </Fab>
      <input type="file" accept=".png, .jpg, .jpeg" hidden ref={imgUploadRef} onChange={handleUploadImgLoaded} />
    </Box>
  );
};

export default ProfilePageImage;
