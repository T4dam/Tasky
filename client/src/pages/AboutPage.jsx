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
          Supažindinimas apie projekto įdėją
        </Typography>
        <figure>
          <blockquote cite="https://www.huxley.net/bnw/four.html">
            <p>
              Produktyvumas priklauso ne tiek nuo to, ką darote su savo laiku,
              kiek nuo to, kaip valdote savo protą.

            </p>
          </blockquote>
          <figcaption>
            —Robin Sharma
            {' '}
            {/* <cite>Brave New World</cite> */}
          </figcaption>
        </figure>
        <Typography>
          Vienas Harvardo verslo apžvalgos atliktas tyrimas
          parodė, kad 90 proc. vadovų dėl prasto laiko valdymo
          iššvaisto brangų laiką. Laiko eikvojimas ir
          produktyvumo trūkumas yra opi problema tiek
          verslo pasaulyje, tiek asmeniniame gyvenime.
          Šiai problemai spręsti buvo pasitelkti programavimo
          įgūdžiai, kurie buvo įgyti CodeAcademy  programavimo kursuose.
          Kurso akademijos baigiamajam darbui buvo pasirinkta sukurti
          intuityvų įrankį darbų planavimui. Ši sukurta darbų planuoklė
          - tai būdas padidinti produktyvumą,
          leidžiantis nieko nepamiršti,
          padedantis nustatyti užduočių prioritetus, efektyviai
          valdyti užduotis,
          išmintingai naudoti laiką ir pagerinti laiko valdymą. Projekto kūrimo metu buvo panaudoti
          šie frameworkai: Material UI, Express js, Node js, React.
          Darbų sąrašas padeda sutelkti dėmesį į šiuo metu svarbiausią
          užduotį, padės motyvuoti save atliekant užduotis ir pagerins
          jūsų atmintį.

        </Typography>
      </Box>
    </Box>
  </Container>
);

export default AboutPage;
