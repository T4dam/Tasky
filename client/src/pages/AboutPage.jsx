import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const AboutPage = () => (
  <Container>
    <Box sx={{
      mx: 'auto',
      maxWidth: '600px',
      mt: '50px',
    }}
    >
      <Box>
        <Typography
          element="h3"
          variant="h4"
          sx={{
            fontWeight: '700', mb: '20px', textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          Darbų sąrašas leidžia nustatyti svarbesnių užduočių prioritetus.
        </Typography>
        <Typography>
          Atrodo, kad tai toks paprastas sprendimas, nes rašikliu užrašyti
          ant popieriaus ir skirti laiko savo
          dienos darbų sąrašui sudaryti, dienos planas padeda apibrėžti
          jūsų iššūkius ir tikslus. Taip išvengiama laiko švaistymo bandant
          nustatyti, kokią kitą svarbiausią
          užduotį reikia atlikti vėliau, o dar svarbiau - įsitikinti, kad nepamiršite
          padaryti ko nors svarbaus.
          Darbų sąrašai - tai būdas padidinti produktyvumą, neleidžiantis nieko nepamiršti,
          padedantis nustatyti užduočių prioritetus, efektyviai valdyti užduotis,
          išmintingai naudoti laiką ir pagerinti laiko valdymą bei darbo eigą.
        </Typography>
      </Box>
    </Box>
  </Container>
);

export default AboutPage;
