/*eslint-disable*/
import React, {useState} from 'react';
import { TextField, Grid, Alert, IconButton } from '@mui/material';
import AuthFrom from '../components/Form';
import CloseIcon from '@mui/icons-material/Close';
import AuthService from '../services/auth-service';
import { useFormik } from 'formik';
import { useSearchParams } from 'react-router-dom';
import * as yup from 'yup';

const initialValues = {
  email: '',
  password: '',
}
const validationSchema = yup.object({
  email: yup
    .string()
    .email('Įvestas turinys nėra el.paštas')
    .required('Norint prisijungti būtinai įveskite el.paštą'),
  password: yup
    .string()
    .min(8, 'Slaptažodis turi susidaryti bent iš 8 simbolių')
    .required('Norint prisjungti būtinai įveskite slaptažodį'),
});

  
  const LoginPage = () => {
    const [searchParams] = useSearchParams();
    const [errorMsg, setErrorMsg] = useState(null);
  
    const handleLogin = async ({ email, password }) => {
      try {
        const redirectTo = searchParams.get('redirectTo');
        await AuthService.login({ email, password }, redirectTo);
      } catch (error) {
        setErrorMsg(error.message);
      }
    };
  const {values,
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    isValid,
    dirty,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleLogin
  });




  return (

    <AuthFrom
      title="Prisijungimas"
      btnTitle="Prisijungti"
      linkText="Neturite savo paskyros?"
      linkTo="/register"
      onSubmit={handleSubmit}
      isValid= {dirty && isValid}
      loading={isSubmitting}
    >
       <Grid container spacing={3}>
        {
          errorMsg
            ? (
              <Grid item xs={12}>
                <Alert
                  severity="error"
                  action={(
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => setErrorMsg(null)}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                )}

                >
                  {errorMsg}
                </Alert>
              </Grid>
            )
            : null
        }

      
        <Grid item xs={12}>
          <TextField
            id="email"
            label="El.paštas"
            variant="outlined"
            fullWidth
            required
            name="email"
            autoComplete="email"
            disabled={isSubmitting}
            value={values.email}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            label="Slaptažodis"
            variant="outlined"
            fullWidth
            required
            autoComplete="email"
            name="password"
            value={values.password}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            disabled={isSubmitting}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </AuthFrom>
  );
};

export default LoginPage;
