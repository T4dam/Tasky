/*eslint-disable*/
import React, { useState } from 'react';
import { TextField, Grid } from '@mui/material';
import {useDispatch} from 'react-redux'
import {LoginActionSuccess} from '../store/auth/action-creators'
import AuthFrom from '../components/Form';
import APIservice from '../services/api-service';
import { useFormik } from 'formik';
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
  const dispatch = useDispatch()
  
  const handleLogin = async ({email, password}) => {
      try {
        const {token, user} = await APIservice.login({ email, password });
        dispatch(LoginActionSuccess({token, user}));
      } catch (error) {
        console.log('--Nepavyko----');
        console.log(error);
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
