/* eslint-disable*/
import React from 'react';
import { Box, Typography, styled, Button } from '@mui/material';

const boardArr = [
  {
    img: 'https://unsplash.it/100/100',
    text: ' Pridėti naują',
  },
  {
    img: 'https://unsplash.it/100/100',
    text: 'Kasdieniai darbai',
  },
  {
    img: 'https://unsplash.it/100/100',
    text: 'Projekto valdymas',
  },
  {
    img: 'https://unsplash.it/100/100',
    text: 'a',
  },
  {
    img: 'https://unsplash.it/100/100',
    text: 'b',
  },

];

const Picture = styled('img')({
height: '100px',
width: '100px',
borderRadius: '5px',
objectFit: 'cover',
});

const OtherBoards = ({ handleCloseOB }) => (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
         <Button onClick={handleCloseOB}>
<Box>
{boardArr.map((item) => {
               
                return <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                     
                        <Picture src= {item.img} />
                        <Typography sx={{
                          maxWidth: '100px', color: 'black', lineHeight: 1.1, mt: '7px',
                        }}
                        >
                          {item.text}
                        </Typography>
                      </Box>
              })}
</Box>
</Button>
</Box>
//   <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//     <Button onClick={handleCloseOB}>

//       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//         <Box sx={{
//           height: '100px', width: '100px', background: 'red', borderRadius: '5px',
//         }}
//         />
//         <Typography sx={{
//           maxWidth: '100px', color: 'black', lineHeight: 1.1, mt: '7px',
//         }}
//         >
//           Pradėti naują
//         </Typography>
//       </Box>
//     </Button>
//     <Button onClick={handleCloseOB}>
//       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//         <Box sx={{
//           height: '100px', width: '100px', background: 'red', borderRadius: '5px',
//         }}
//         />
//         <Typography sx={{
//           maxWidth: '100px', color: 'black', lineHeight: 1.1, mt: '7px',
//         }}
//         >
//           Produkto išleidimas
//         </Typography>
//       </Box>
//     </Button>
//     <Button onClick={handleCloseOB}>
//       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//         <Box sx={{
//           height: '100px', width: '100px', background: 'red', borderRadius: '5px',
//         }}
//         />
//         <Typography sx={{
//           maxWidth: '100px', color: 'black', lineHeight: 1.1, mt: '7px',
//         }}
//         >
//           Projekto valdymas
//         </Typography>
//       </Box>
//     </Button>
//     <Button onClick={handleCloseOB}>
//       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//         <Box sx={{
//           height: '100px', width: '100px', background: 'red', borderRadius: '5px',
//         }}
//         />
//         <Typography sx={{
//           maxWidth: '100px', color: 'black', lineHeight: 1.1, mt: '7px',
//         }}
//         >
//           Kasdieniai darbai
//         </Typography>
//       </Box>
//     </Button>
//   </Box>
);

export default OtherBoards;
