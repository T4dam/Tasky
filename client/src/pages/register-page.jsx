import React, { useState } from 'react';
import {
  TextField, Grid, FormControlLabel, Checkbox, InputAdornment,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import CircularProgress from '@mui/material/CircularProgress';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AuthForm from '../components/Form';
import apiService from '../services/api-service';

const initialValues = {
  name: '',
  surename: '',
  email: '',
  password: '',
  repeatPassword: '',
  subscribed: true,
  emailChecked: false,
  emailAvailable: false,
};

const validationSchema = yup.object({
  name: yup
    .string('')
    .required('Norint prisijungti būtina įvesti vardą')
    .min(2, 'Įveskite savo pilną vardą')
    .max(16, 'Vardas negali viršyti 16 simbolių')
    .matches(/^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/, 'Vardas negali turėti kitų simbilių apart raidžių'),
  surename: yup
    .string()
    .required('Įveskite savo pavardę')
    .min(2, 'Įveskite savo pilną pavardę')
    .max(16, 'Vardas negali viršyti 16 simbolių')
    .matches(/^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/, 'Pavardė negali turėti kitų simbolių apart raidžių'),
  email: yup
    .string()
    .required('Norint užsiregistruoti būtinai įveskite savo el.paštą')
    .email('Pasitikrinkite ar teisingai įvedėte savo el.paštą')
    .test(
      'emailAvailableTest',
      'Toks el.paštas jau užimtas',
      (_, { parent: { emailChecked, emailAvailable } }) => {
        if (!emailChecked) return true;
        return emailAvailable;
      },
    ),
  password: yup
    .string()
    .required('Sukurtite savo slaptažodį')
    .min(8, 'Slaptažodį turi sudaryti bent 8 simboliai')
    .max(32, 'Slaptažodis negali viršyti 32 simbolių')
    .matches(/^.*[A-ZĄČĘĖĮŠŲŪŽ]+.*$/, 'Turi būti panaudota bent viena didžioji raidė')
    .matches(/^.*[0-9]+.*$/, 'Turi būti panaudotas bent vienas skaičius'),
  repeatPassword: yup
    .string()
    .required('Pakartokite slaptažodį')
    .oneOf([yup.ref('password')], 'Slaptažodžiai nesutampa'),
});

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async ({ emailChecked, emailAvailable, ...formData }) => {
    const result = await apiService.register(formData);
    console.log('Registracija pavyko', result);
  };

  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    isSubmitting,
    handleSubmit,
    setFieldValue,
    setValues,
    isValid,
    dirty,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  console.log(values);
  const handleEmailChange = (e) => {
    if (values.emailChecked) {
      setValues({
        ...values,
        email: e.target.value,
        emailChecked: false,
        emailAvailable: false,
      }, true);
    } else {
      handleChange(e);
    }
  };

  const handleEmailBlur = (e) => {
    handleBlur(e);
    if (!errors.email) {
      setIsLoading(true);
      (async () => {
        const emailAvailable = await apiService.checkEmail(values.email);
        setFieldValue('emailChecked', true);
        setFieldValue('emailAvailable', emailAvailable);
        setIsLoading(false);
      })();
    }
  };

  let emailEndAdornment;
  if (isLoading) {
    emailEndAdornment = <InputAdornment position="end"><CircularProgress size={24} /></InputAdornment>;
  } else if (values.emailChecked) {
    emailEndAdornment = values.emailAvailable
      ? <InputAdornment position="end"><CheckCircleOutlineIcon color="success" /></InputAdornment>
      : <InputAdornment position="end"><ReportGmailerrorredIcon color="error" /></InputAdornment>;
  }
  return (

    <AuthForm
      title="Registracija"
      btnTitle="Registruotis"
      linkText="Jau turite vartotojo paskyrą?"
      linkTo="/login"
      isValid={dirty && isValid}
      loading={isSubmitting}
      onSubmit={handleSubmit}
    >

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="name"
            label="Vardas"
            variant="outlined"
            fullWidth
            autoComplete="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={touched.name && errors.name}
            helperText={touched.name && errors.name}
            onBlur={handleBlur}
            disabled={isSubmitting}

          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="surename"
            label="Pavardė"
            variant="outlined"
            fullWidth
            name="surename"
            autoComplete="name"
            value={values.surename}
            onChange={handleChange}
            error={touched.surename && errors.surename}
            helperText={touched.surename && errors.surename}
            onBlur={handleBlur}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            label="El.paštas"
            variant="outlined"
            InputProps={{
              endAdornment: emailEndAdornment,
            }}
            fullWidth
            autoComplete="email"
            name="email"
            value={values.email}
            onChange={handleEmailChange}
            error={touched.email && errors.email}
            helperText={touched.email && errors.email}
            onBlur={handleEmailBlur}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            label="Slaptažodis"
            variant="outlined"
            fullWidth
            autoComplete="email"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={touched.password && errors.password}
            helperText={touched.password && errors.password}
            onBlur={handleBlur}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="repeatPassword"
            label="Pakartokite slaptažodį"
            variant="outlined"
            fullWidth
            autoComplete="email"
            name="repeatPassword"
            value={values.repeatPassword}
            onChange={handleChange}
            error={touched.repeatPassword && errors.repeatPassword}
            helperText={touched.repeatPassword && errors.repeatPassword}
            onBlur={handleBlur}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item sx={{ mb: 2 }} xs={12}>
          <FormControlLabel
            control={(
              <Checkbox
                color="primary"
              // Props provided by Formik
                name="subscribed"
                onChange={handleChange}
                valuechecked="values.subscribed"
                disabled={isSubmitting}
              />
              )}
            label="Noriu gauti su rinkodara susijusius pranešimus"
          />
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default RegisterPage;