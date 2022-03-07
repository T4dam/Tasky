import React from 'react';
import {
  Box, Typography, Container,
} from '@mui/material';
import Banner from '../components/partials/home-page-banner/index';
import Pic1 from '../assets/images/board.svg';
import Pic2 from '../assets/images/Checklist.svg';
import Pic3 from '../assets/images/Addnotes.svg';

const HomePage = () => (
  <>
    <Banner />
    <Container>

      <Box sx={{
        display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', mt: { xs: '20px', lg: '0' },
      }}
      >
        <Box sx={{ width: { xs: '100%', sm: '70%' }, paddingRight: '10px' }}>
          <Typography element="h4" variant="h6" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>Padidink savo produktyvumą</Typography>
          <Typography element="h3" variant="h4" sx={{ fontWeight: '700', mb: '20px', textAlign: { xs: 'center', sm: 'left' } }}>
            Darbų sąrašas leidžia nustatyti svarbesnių užduočių prioritetus
          </Typography>
          <Typography sx={{ display: 'flex', justifyContent: 'flex-end', textAlign: { xs: 'center', sm: 'left' } }}>
            Darbe ir namie sudarytas darbų sąrašas gali padėti nustatyti prioritetus darbo
            ir asmeninėms užduotims. Taip galėsite organizuoti ir pirmiausia
            atlikti svarbiausias užduotis. Darbų sąrašai gali būti naudojami
            laiko valdymui pagerinti, nes visos jūsų užduotys yra aiškiai išdėstytos
            iš anksto. Galite lengviau nuspręsti,
            ką daryti atlikus užduotį, ir pereiti prie kito sąrašo punkto.
          </Typography>
        </Box>
        <Box sx={{ width: { xs: '100%', sm: '70%' }, height: 'auto', paddingLeft: '10px' }}>
          <img src={Pic1} alt="guy with the task board" />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, alignItems: 'center' }}>
        <Box sx={{ width: { xs: '100%', sm: '70%' }, paddingRight: '10px' }}>
          <img src={Pic2} alt="guy with the task board" />
        </Box>
        <Box sx={{ width: { xs: '100%', sm: '70%' }, height: 'auto', paddingLeft: '10px' }}>
          <Typography element="h4" variant="h6" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>Pradėk save motyvuoti</Typography>
          <Typography element="h3" variant="h4" sx={{ fontWeight: '700', mb: '20px', textAlign: { xs: 'center', sm: 'left' } }}>
            Darbų sąrašai yra puiki motyvacinė priemonė,
            nes jais naudodamiesi galite išsiaiškinti savo tikslus
          </Typography>
          <Typography sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            Nešvaistysite laiko užduotims, kurioms nereikia
            tiesioginio dėmesio. Sąrašas padės jums susitelkti ties
            svarbiausiomis užduotimis. Turint darbų sąrašą lengviau susisteminti
            viską, ką norite padaryti per dieną, kad kitą dieną
            galėtumėte pradėti iš naujo. Įvykdžius užduotį gali padidėti
            moralė ir produktyvumas. Net jei tai tokia paprasta užduotis kaip
            lovos paklojimas, užduoties atlikimas daugeliui žmonių yra galingas
            motyvuojantis veiksnys.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>
        <Box sx={{ width: { xs: '100%', sm: '70%' }, paddingRight: '10px' }}>
          <Typography element="h4" variant="h6" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>Nustebink visus su savo atmintimi</Typography>
          <Typography element="h3" variant="h4" sx={{ fontWeight: '700', mb: '20px', textAlign: { xs: 'center', sm: 'left' } }}>
            Darbų sąrašas veikia kaip išorinė atminties priemonė
          </Typography>
          <Typography sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            Vienu metu galima laikyti tik keletą informacijos vienetų.
            Turėkite darbų sąrašą ir galėsite sekti viską, o ne tik kelias
            užduotis, kurias turite atlikti. Jūsų darbų sąrašas taip pat
            sustiprins informaciją, todėl mažiau tikėtina, kad ką nors pamiršite.
            Kasdienių darbų sąrašo sudarymas ir tvarkymas gali padėti pagerinti bendrą atmintį, nes
            sustiprina trumpalaikę atmintį. Rašydami užduotis ir trumpalaikius tikslus bei
            nuolat tikrindami sąrašą, galite išsaugoti daugiau informacijos.
          </Typography>
        </Box>
        <Box sx={{ width: { xs: '100%', sm: '70%' }, height: 'auto', paddingLeft: '10px' }}>
          <img src={Pic3} alt="guy with the task board" />
        </Box>
      </Box>

    </Container>
  </>
);

export default HomePage;
